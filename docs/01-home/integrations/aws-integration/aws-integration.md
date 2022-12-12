---
title: "AWS"
slug: "aws-integration"
description: "Integrate your existing AWS backend with Moralis Enterprise-Grade Web3 APIs to build highly-performant and scalable dapps. You have options to integrate with several AWS offerings:\n- AWS GameSparks\n- AWS Lambda"
---
## What is AWS Integration?

The AWS Integrations is built for integrating Moralis APIs to your existing AWS backend easily. This integration is most suitable for developers that either:

- is building their dapp on top of AWS
- has existing app built on top of AWS and would like to add web3 features on it

With the AWS integration, developers will be able to integrate our various APIs to the following AWS offerings:

- [AWS GameSparks](https://docs.moralis.io/docs/aws-gamesparks-integration-with-unity)
- [AWS Lambda](https://docs.moralis.io/docs/using-aws-lambda)

## Prerequisites

### Create an [AWS Account](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)

To create an AWS account, simply follow the following guide [here](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html).

### Create an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console)

When creating the user, make sure you select both **_AWS Credential types_**:

![](/img/content/c817a0e-image.png)

Also make sure to attach **_AdministratorAccess_** as a policy:

![](/img/content/34621f7-image.png)



> 🚧 
> 
> Be aware that the **_AdministratorAccess_** policy will give the **IAM user** a lot of control over your AWS environment. In a production environment, make sure to give the IAM users **only the policies they require**.

And last, but **very important**, download the credentials in a `.csv`:

![](/img/content/2f88fdb-image.png)

## Next Steps

Learn how you can integrate Moralis APIs to your AWS backend with these tutorials:

- [AWS GameSparks](https://docs.moralis.io/docs/aws-gamesparks-integration-with-unity)
- [AWS Lambda](https://docs.moralis.io/docs/using-aws-lambda)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io/) to get 24/7 developer support.