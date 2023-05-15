import React from "react";
import Link from "@docusaurus/Link";
import { BiChevronRight } from "react-icons/bi";

const Timeline = ({ content }) => {
  return (
    <ol className="border-l border-neutral-300 dark:border-neutral-500 m-0 p-0 list-none">
      {content.map((changelog, index) => {
        const { date, permalink, title, description } = changelog ?? {};
        return (
          <li key={index}>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300 m-0">
                {date}
              </p>
            </div>
            <div className="ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300 m-0">
                {description}
              </p>
            </div>
            <div className="mb-6 ml-4">
              <a
                className="inline-flex justify-center items-center"
                href={permalink}
              >
                Read More <BiChevronRight />
              </a>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
