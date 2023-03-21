import { Analytics } from "@segment/analytics-node";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  withTypewriterContext,
  validateAgainstSchema,
} from "../src/utils/segmentAnalytics";

const analytics = new Analytics({ writeKey: "<YOUR_WRITE_KEY>" });

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const { props, options } = req.body ?? {};
    const schema = {
      $schema: "http://json-schema.org/draft-07/schema#",
      description: "User submits comments after their thumbs/down rating",
      labels: {},
      properties: {
        context: {},
        properties: {
          properties: {
            comment: {
              description: "the comment",
              type: "string",
            },
            helpful: {
              description: "the rating given prior to the comment",
              type: "boolean",
            },
            section: {
              description:
                "Was the feedback form in the right-nav or footer clicked?",
              type: "string",
            },
            title: {
              description: "",
              type: "string",
            },
          },
          type: "object",
        },
        traits: {
          type: "object",
        },
      },
      title: "Feedback Comment Provided",
      type: "object",
    };
    const message = {
      event: "Feedback Comment Provided",
      properties: props || {},
      options,
    };
    validateAgainstSchema(message, schema);
    if (analytics) {
      analytics.track(
        "Feedback Comment Provided",
        props || {},
        withTypewriterContext(options)
      );
    }
  } catch (e) {
    console.error(e);
  }
};
