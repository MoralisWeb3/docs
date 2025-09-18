---
title: "Create Multichain Tokens with Interchain Token Service"
description: "Step-by-step guide on how to build create multichain tokens with Axelar and the Moralis Web3 data API."
sidebar_label: "Creating Multichain Tokens"
sidebar_position: 3
---

# Create Multichain Tokens with Interchain Token Service

The next level in Web3 - creating a [Multichain Token](https://github.com/axelarnetwork/interchain-token-service/blob/main/contracts/interchain-token/InterchainToken.sol) that is fungible and customizable across all blockchains - is here, made possible by Axelar's new [Interchain Token Service](https://github.com/axelarnetwork/interchain-token-service/tree/main).

This service employs Axelar's communication protocols to facilitate cross-chain token transfers. It allows you to incorporate asset bridges and transfers into your interchain dApp and [explore many other use cases](https://community.axelar.network/t/expanding-the-axelar-ecosystem-ideas-for-infrastructure-projects/2583/2).

[Moralis](https://moralis.io/) offers industry-leading tools that make interchain Web3 development more accessible for millions around the world. Let's build a Moralis dapp with our [Ethereum Boilerplate](https://github.com/ethereum-boilerplate/ethereum-boilerplate) that integrates Axelar Interchain Token Service to build multichain tokens. It's effortless!

:::tip
💡 You can find the complete code for this tutorial on [GitHub](https://github.com/Olanetsoft/multichain-token-example-with-interchain-token-service/tree/main).
:::

## Prerequisites

You will need:

- A basic understanding of [JavaScript](https://www.w3schools.com/js/) and [React](https://react.dev/).
- A [MetaMask wallet](https://metamask.io/) with FTM and Celo funds for testing. If you don't have these funds, you can get FTM from the [Fantom faucet](https://faucet.fantom.network/) and CELO from the Celo Alfajores faucets ([1](https://faucet.polygon.technology/), [2](https://faucet.celo.org/alfajores)).

## Project setup and installation

To quickly set up your development environment, clone this [project on GitHub](https://github.com/Olanetsoft/multichain-token-example-with-interchain-token-service/tree/starter) using the following command:

```bash
git clone https://github.com/Olanetsoft/multichain-token-example-with-interchain-token-service.git
```

💡 Make sure you're on the starter branch.

### Install dependencies

Next, change the directory into the cloned folder and install the project dependencies locally using yarn with the following command:

```bash
    cd  multichain-token-example-with-interchain-token-service  &&  yarn  install
```

```bash
    yarn  run  dev
```

yarn run dev will start a Next.js hot-reloading development environment accessible by default at [http://localhost:3000](http://localhost:3000).

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfnW2uSAq5O7E-XeJPzHp016irAgo3YgSMy-tBPOadnLjSSSSI2FP5I2NwwVfLtbRk55r5nyvbR5zx6ZpShezAyoTzamwh52p18xooADKQdo78TAw7GS6sygmMD6qk3IqJuBf0vOY36U5_bBo8NpmqkSlM?key=sYXI-RHo-Dm4bPXTRdCfwQ)

The cloned project includes several folders:

- contracts: This folder contains the contract ABIs that we'll use in this project to interact with the Interchain Token Service contract.
- src: This folder contains component templates that you'll use to implement the creation of the Interchain Token, its remote deployment, and the cross-chain token transfer.
- pages: This folder contains different pages within the application.
- cypress: This folder contains basic Cypress tests.

Rename .env.local.example to .env.local and provide required data. Get your Web3 API Key from the [Moralis dashboard](https://admin.moralis.com/).

Fill the environment variables in your .env.local file in the app root:

    -   MORALIS_API_KEY: You can get it [here](https://admin.moralis.com/web3apis).

    -   NEXTAUTH_URL: Your app address. In the development stage, use [http://localhost:3000](http://localhost:3000).

    -   NEXTAUTH_SECRET: Used for encrypting JWT tokens of users. You can put any value here or generate it on [https://generate-secret.now.sh/32](https://generate-secret.now.sh/32).

Example:

    MORALIS_API_KEY=xxxx

    NEXTAUTH_URL=http://localhost:3000

    NEXTAUTH_SECRET=7197b3e8dbee5ea6274cab37245eec212

## Register and deploy a new Interchain Token

Now that you are fully set up, you can begin implementing the registration and deployment of a new Multichain Token, also known as an Interchain Token. On the navigation bar, you'll see an option for Interchain Tokens. Clicking on it will display a UI similar to the following, but it won’t be functional yet. You will add functionality in this section of the tutorial.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXesc3X2qKB2346hTmHYns4aUtUwTtLMIZVDhlU070BF02SVjz4S9L9NFUvs5TzyT9-HROKmv8rmCGKz9mLwk20aJ20IlIB3QQpVWTslsFt-50k_CbvxrNjz0YE1th0Bs1RolDisZ_IC7yvMispNUTs1IuI?key=sYXI-RHo-Dm4bPXTRdCfwQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe1DjYWxytlO6YPdBQqAB_1_IbJCRCiDKE4kqUgOwKoWY-iMppcgNjK4qHNrKV5C13EqxdGH92p_cyidZ8gdO8NKPM685FZyw9wRP40EyNNnYXhh4IUEJKb16EsZOe_hjVglH_imI2yGJqwjh4ff5LTLoae?key=sYXI-RHo-Dm4bPXTRdCfwQ)

### Import the Interchain Token Factory ABI and contract addresses

Navigate to the src/components/interchain/create-token folder and open the create-token.tsx file, then add the following code:

```javascript
//...

import interchainTokenFactoryContractABI from "../../../../../contracts/InterchainTokenFactoryABI.json";

const interchainTokenFactoryContractAddress =
  "0x83a93500d23Fbc3e82B410aD07A6a9F7A0670D66";

const NewInterchainToken: React.FC = () => {
  //...
};
```

### Create state variables to save the token info from the UI

Add the following code to set up state variables to collect token information from the UI. This data will be used to interact with the contract.

```javascript
//...
const NewInterchainToken: React.FC = () = >{
  //...
  const[tokenName, setTokenName] = useState < string > "";
  const[tokenSymbol, setTokenSymbol] = useState < string > "";
  const[tokenDecimals, setTokenDecimals] = useState < number > 18;
  const[initialSupply, setInitialSupply] = useState < number > 0;
  const[saltValue, setSaltValue] = useState < string > "";
  //...
};
```

### Implement create token functionality

wagmi is already installed in the cloned project. Use useContractWrite() and useWaitForTransaction() to interact with the InterchainTokenFactory contract:

```javascript
//...
const NewInterchainToken: React.FC = () = >{
  //...
  // Create a new token
  const {
    data: createNewToken,
    write
  } = useContractWrite({
    address: interchainTokenFactoryContractAddress,
    abi: interchainTokenFactoryContractABI,
    functionName: 'deployInterchainToken',
    args: [saltValue, // unique salt value
    tokenName, // token name
    tokenSymbol, // token symbol
    tokenDecimals, ethers.utils.parseEther(initialSupply.toString()), // Initial token supply
    address, // signer address
    ],
    mode: 'recklesslyUnprepared',
  });
  const {
    data: useWaitForDeployTokenTransactionData,
    isSuccess,
    isError,
    isLoading,
  } = useWaitForTransaction({
    hash: createNewToken ? .hash,
  });
  // Method to handle token creation to be used in the 'create' button
  // onClick event
  const handleCreateToken = async() = >{
    if (!tokenName || !tokenSymbol || tokenDecimals < 0 || initialSupply <= 0) {
      toast({
        title: 'Invalid Input',
        description: 'Please fill all the fields correctly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    write();
    toast({
      title: 'Transaction Submitted',
      description: 'Please confirm the transaction in MetaMask.',
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  };
  return (
  //...
  )
}
```

### Implement unique generated value for salt

A unique salt value is required when creating a new Interchain Token. This value should be unique across different tokens on different chains. As this value needs to be unique, it should be generated only once when the page mounts.

```javascript
//...
const NewInterchainToken: React.FC = () = >{
  //...
  useEffect(() = >{
    const localSaltValue = `0x$ {
      crypto.randomBytes(32).toString('hex')
    }`;
    setSaltValue(localSaltValue);
  },
  []);
  return (
  //...
  )
}
```

### Track transaction status and update the UI

Add the following code to track the transaction status after triggering the deployInterchainToken() method. To do this, you will need to add the following code in another useEffect hook:

```javascript
//...
const[displayTransactionHash, setDisplayTransactionHash] = useState < string > ('');
const NewInterchainToken: React.FC = () = >{
  //...
  useEffect(() = >{
    if (isSuccess) {
      setDisplayTransactionHash(createNewToken ? .hash ? ?'');
      toast({
        title: 'New Interchain Token Created',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // Clear only the input fields
      setTokenName('');
      setTokenSymbol('');
      setTokenDecimals(18);
      setInitialSupply(0);
      setShowNextStep(true);
    }
    if (isError) {
      toast({
        title: 'Transaction Error',
        description: 'There was an error submitting your transaction.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    if (isLoading) {
      toast({
        title: 'Transaction Pending',
        description: 'Your transaction is pending.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
  },
  [createNewToken, isSuccess, isError, isLoading, useWaitForDeployTokenTransactionData]);
  return (
  //...
  )
}
```

### Update UI to implement the create token functionality

Thus far, you have successfully implemented the interaction to the deployInterchainToken()function on the InterchainTokenFactory contract. The next step is to connect this function to the user interface you cloned earlier by updating the code with the following snippet:

```javascript
//...

const NewInterchainToken: React.FC = () => {
  //...

  return (
    <Box
      padding="7"
      maxW="xxl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="auto"
      marginTop="-20"
    >
      <Heading size="lg" marginBottom="6" textAlign="center">
        Create a New Interchain Token
      </Heading>

      <VStack spacing={5} align="stretch">
        <FormControl>
          <FormLabel>Token Name</FormLabel>

          <Input
            placeholder="Enter token name"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
          />

          <FormHelperText>Unique name for your token.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Token Symbol</FormLabel>

          <Input
            placeholder="Enter token symbol"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
          />

          <FormHelperText>
            Short symbol for your token, like ETH or BTC.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Token Decimals</FormLabel>

          <Input
            type="number"
            placeholder="Enter token decimals"
            value={tokenDecimals.toString()}
            onChange={(e) => setTokenDecimals(Number(e.target.value))}
          />

          <FormHelperText>
            Number of decimal places for your token.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Initial Supply</FormLabel>

          <Input
            type="number"
            placeholder="Enter initial supply"
            value={initialSupply.toString()}
            onChange={(e) => setInitialSupply(Number(e.target.value))}
          />

          <FormHelperText>Total initial supply of tokens.</FormHelperText>
        </FormControl>

        <Text fontSize="sm" color="gray.500">
          Unique Salt: {saltValue}
        </Text>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            colorScheme="cyan"
            onClick={handleCreateToken}
            isLoading={isLoading}
            loadingText="Creating Token"
            w="sm"
            variant="solid"
            disabled={isLoading}
          >
            Create Token
          </Button>

          {/*  ...  */}
        </div>

        {/*  ...  */}
      </VStack>
    </Box>
  );
};
```

Ensure you replace {/_ ... _/} with the actual code. This placeholder is used to prevent the repetition of existing code in the codebase.

### Test the application to create a new Interchain token

The example below demonstrates how to create a new token named "My New Token" with the symbol "MNT" and an initial supply of 20,000.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeDtn7pTrQjkQFRBo-v25IH1Qc3nzOjfn5P3LGof8pmUuQ1J9g5LSHGJmjv9IuVurN_R1R6JI33XemhsBBegiOerjXr-knnXDdy4sQX02Mf5x5hJ7Ef9OuuIJlKEf55rKQ6opILDjeHXiXxT7PwS5U26AzH?key=sYXI-RHo-Dm4bPXTRdCfwQ)

### Check the transaction on the Fantom testnet scanner

Check the [Fantom testnet scanner](https://testnet.ftmscan.com/) to see if you have successfully [created](https://testnet.ftmscan.com/token/0x4990264144fd455dc21a123eb12687fe2eb716ae) and [locally deployed](https://testnet.ftmscan.com/tx/0x0c2eef18bc5142c7669f509f654a38d6dd3d175820061e55531dcea64060f9ae) a new Interchain Token on the Fantom testnet.

💡 Remember to save the unique salt value. You will need it later in this tutorial.

## Deploy an Interchain Token to a remote chain

You've successfully deployed an Interchain Token to Fantom. Next, deploy it to Celo, which will serve as the remote chain in this tutorial.

💡 Any two chains can be specified as your local and remote chains.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdZmlInTuz_49_cuGSpLzy6EaTE9zupy2R-RdUs10gYItf8V6yhFKKpSMa3xIsw_phhh4m5xsZRYJgZh1j5l0dwHLd1rQ1q_er4kI0N2cVQhZwJLw5aqNWWGg-0agsENj8NVMNxfuzAWIdseKd0ITT9jIo?key=sYXI-RHo-Dm4bPXTRdCfwQ)

Navigate to the src/components/interchain/deploy-token folder and open the deploy-token.tsx file. This is where you will implement the remote token deployment functionality.

### Create state variables to save the token info from the UI

You need to create state variables to collect token information from the UI. This data will be used to interact with the contract and deploy your token remotely. Use the following code to create these variables:

```javascript
//...
const DeployTokenRemotely = () = >{
  //...
  const[sourceChain, setSourceChain] = useState < string > ('');
  const[destinationChain, setDestinationChain] = useState < string > ('');
  const[saltValue, setSaltValue] = useState < string > ('');
  //...
}
```

    ### Estimate gas fees

    To remotely deploy the new Interchain Token, you need to [estimate the gas fee](https://docs.axelar.dev/dev/axelarjs-sdk/axelar-query-api#estimategasfee) for the cross-chain call. You can use the Axelar JS SDK to estimate this fee in your React application.

    Update the deploy-token.js file:

```javascript
  //...
const DeployTokenRemotely = () = >{
  //...
  const api: AxelarQueryAPI = new AxelarQueryAPI({
    environment: Environment.TESTNET
  });
  const[gasAmount, setGasAmount] = useState < number > (0);
  // Estimate Gas
  const gasEstimator = async() = >{
    try {
      const gas = await api.estimateGasFee(sourceChain, destinationChain, GasToken.FTM, 700000, 2);
      setGasAmount(Number(gas));
    } catch(error) {
      console.error('Error estimating gas fee: ', error);
    }
  };
  return (
  //..
  )
}
```

### Implement remote token deployment

Next, implement the remote token deployment functionality. Do this by invoking the deployRemoteInterchainToken() function on the InterchainTokenFactory contract. Use the following code and specify the required parameters: sourceChain, saltValue, address, destinationChain, gasValue, and the cross-chain gas value:

```javascript
//...
const DeployTokenRemotely = () = >{
  //...
  // Deploy a token remotely
  const {
    data: deployTokenRemotely,
    write
  } = useContractWrite({
    address: interchainTokenFactoryContractAddress,
    abi: interchainTokenFactoryContractABI,
    functionName: 'deployRemoteInterchainToken',
    args: [sourceChain, saltValue, address, destinationChain, ethers.BigNumber.from(gasAmount.toString())],
    overrides: {
      value: ethers.BigNumber.from(gasAmount.toString()),
    },
    mode: 'recklesslyUnprepared',
  });
  const {
    data: useWaitForDeployTokenRemotelyTransactionData,
    isSuccess,
    isError,
    isLoading,
  } = useWaitForTransaction({
    // Calling a hook to wait for the transaction to be mined
    hash: deployTokenRemotely ? .hash,
  });
  const handleDeployToken = async() = >{
    if (write) {
      write();
      toast({
        title: 'Transaction Submitted',
        description: 'Please confirm the transaction in MetaMask.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
    if (isError) {
      toast({
        title: 'Transaction Error',
        description: 'There was an error submitting your transaction.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
  //..
  )
}
```

### Track transaction status and update the UI

Add the following code to track the transaction status after triggering the deployRemoteInterchainToken() method. To do this, you will need to add the following code in useEffect hook:

```javascript
//...
const DeployTokenRemotely = () = >{
  //...
  useEffect(() = >{
    gasEstimator();
    if (isSuccess) {
      setDisplayTransactionHash(deployTokenRemotely ? .hash ? ?'');
      toast({
        title: 'Token Deployed Remotely',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setShowNextStep(true);
    }
    if (isError) {
      toast({
        title: 'Transaction Error',
        description: 'There was an error submitting your transaction.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    if (isLoading) {
      toast({
        title: 'Transaction Pending',
        description: 'Your transaction is pending.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
  },
  [deployTokenRemotely, isSuccess, isError, isLoading, useWaitForDeployTokenRemotelyTransactionData]);
  return (
  //..
  )
}
```

### Update the UI to implement the remote token deployment functionality

So far, you have successfully implemented the interaction for the deployRemoteInterchainToken() function on the InterchainTokenFactory contract. Now connect this function to the user interface you cloned earlier by updating your code with the following snippet:

```javascript
//...

const DeployTokenRemotely = () => {
  //...

  return (
    <Box
      padding="7"
      maxW="xxl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="auto"
      marginTop="-20"
    >
      {/*  ...  */}

      <VStack spacing={5} align="stretch">
        <FormControl>
          <FormLabel>Your unique salt value</FormLabel>

          <Input
            placeholder="Enter Salt Value"
            value={saltValue}
            onChange={(e) => setSaltValue(e.target.value)}
          />

          <FormHelperText>Unique salt value for your token.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Source chain</FormLabel>

          <Stack spacing={3}>
            <Select
              placeholder="Select source chain"
              value={sourceChain}
              onChange={(e) => setSourceChain(e.target.value)}
              size="md"
            >
              {/*  ...  */}
            </Select>
          </Stack>

          <FormHelperText>
            Source chain for your token eg. Fantom, binance, Polygon etc.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Destination chain</FormLabel>

          <Stack spacing={3}>
            <Select
              placeholder="Select Destination chain"
              value={destinationChain}
              onChange={(e) => setDestinationChain(e.target.value)}
              size="md"
            >
              {/*  ...  */}
            </Select>
          </Stack>

          <FormHelperText>
            Destination chain for your token eg. Fantom, binance, Polygon etc.
          </FormHelperText>
        </FormControl>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            colorScheme="cyan"
            onClick={handleDeployToken}
            isLoading={isLoading}
            loadingText="Deploying Token Remotely..."
            w="sm"
            variant="solid"
            disabled={isLoading}
          >
            Deploy Token Remotely
          </Button>

          {/*  ...  */}
        </div>

        {/*  ...  */}
      </VStack>
    </Box>
  );
};
```

💡 Make sure to replace {/_ ... _/} with the actual code. This placeholder is used to prevent the repetition of existing code in the codebase.

Test the application to deploy the Interchain Token remotely

Add the salt value you saved from the previous step. Then, select Fantom as the source chain and Celo as the destination chain:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcWPisSNxz8tUuXquzF15B5imp3U91_xh3rweYrcEF-wEUAFSrD4OrZknnashsicNMSpF-3wdouANfJIdBu0bJBfDas2LbZ__aYc8Ogh_eOSTq3NtsAMm8l0ZqDDH6taFVlRL2ZpkCWFGEZp2ryW34ZDbJN?key=sYXI-RHo-Dm4bPXTRdCfwQ)

### Check the transaction on the Axelar testnet scanner

Check the [Axelarscan testnet scanner](https://testnet.axelarscan.io/) to see if you have successfully created and remotely deployed MNT on the Celo testnet. It should look something like [this](https://testnet.axelarscan.io/gmp/0x667caa6b8f29e97c5df36cf582b57e5ffb6e82ececd8c66c6a11ffc70c3be8bc). Ensure that Axelar shows a successful transaction before continuing to the next step.

If you got this far, good job! You are almost done with the tutorial.

## Transfer your token between chains

Now that you've successfully created and deployed your new Interchain Token on both the Fantom and Celo testnets, you can transfer tokens between chains seamlessly via the user interface.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfCHNLAEbmNVgQTzIsM93IpoH437lM5UMbw8tGsSrU-AzqDDndr7EsaLYBPqjJk8g8kqO4yCeKOjZCNHfh8DYY1b1FS2wXm94Stq7zyMYl9XGadzIxuBmihkZRpmcOb22FYxE8pweNN-9I14eoWeeWkYEI?key=sYXI-RHo-Dm4bPXTRdCfwQ)

Navigate to the src/components/interchain/transfer-token folder and open the transfer-token.tsx file, where you will implement the token transfer functionality.

### Create state variables to save the token info from the UI

You need to create state variables to collect token information from the UI:

```javascript
//...
const TransferToken = () = >{
  //...
  const[sourceChain, setSourceChain] = useState < string > ('');
  const[destinationChain, setDestinationChain] = useState < string > ('');
  const[receiverAddress, setReceiverAddress] = useState < string > ('');
  const[amountToTransfer, setAmountToTransfer] = useState < number > (0);
  const[interchainTokenContractAddress, setInterchainTokenContractAddress] = useState < string > ('');
  return (
  //...
  )
}
```

### Estimate gas fees

You’ll need to estimate the gas fee for the cross-chain call to transfer tokens remotely. You can use the Axelar JS SDK to estimate this fee. Update the transfer-token.js file using the following:

```javascript
//...
const TransferToken = () = >{
  //...
  const api: AxelarQueryAPI = new AxelarQueryAPI({
    environment: Environment.TESTNET
  });
  const[gasAmount, setGasAmount] = useState < number > (0);
  //  Estimate  Gas
  const gasEstimator = async() = >{
    try {
      const gas = await api.estimateGasFee(sourceChain, destinationChain, GasToken.FTM, 700000, 2);
      setGasAmount(Number(gas));
    } catch(error) {
      console.error('Error  estimating  gas  fee:  ', error);
    }
  };
  return (
  //..
  )
}
```

### Implement token transfer

To implement the token transfer, invoke the interchainTransfer() function on the created Interchain Token contract. Use the following code and specify the necessary parameters: destinationChain, receiverAddress, amount, gasValue, '0x', and the cross-chain gas value.

```javascript
//...
const TransferToken = () = >{
  //...
  //  Token  Transfer
  const {
    data: tokenTransfer,
    write
  } = useContractWrite({
    address: interchainTokenContractAddress,
    abi: interchainTokenContractABI,
    functionName: 'interchainTransfer',
    args: [destinationChain, receiverAddress, ethers.utils.parseEther(amountToTransfer.toString()), '0x'],
    overrides: {
      value: ethers.BigNumber.from(gasAmount.toString()),
    },
    mode: 'recklesslyUnprepared',
  });
  const {
    data: useWaitForTokenTransferTransactionData,
    isSuccess,
    isError,
    isLoading,
  } = useWaitForTransaction({
    //  Call  a  hook  to  wait  for  the  transaction  to  be  mined
    hash: tokenTransfer ? .hash,
  });
  //  token  transfer
  const handleTokenTransfer = async() = >{
    if (!sourceChain || !destinationChain || !receiverAddress || !amountToTransfer) {
      toast({
        title: 'Invalid  Input',
        description: 'Please  fill  all  the  fields  correctly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (write) {
      write();
      toast({
        title: 'Transaction  Submitted',
        description: 'Please  confirm  the  transaction  in  Metamask.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
    if (isError) {
      toast({
        title: 'Transaction  Error',
        description: 'There  was  an  error  submitting  your  transaction.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
  //...
  );
};
```

### Track transaction status and update the UI

Add the following code to track the transaction status after triggering the interchainTransfer() method. To do this, you will need to add the following code in useEffect hook:

```javascript
//...
const TransferToken = () = >{
  //...
  useEffect(() = >{
    gasEstimator();
    if (isSuccess) {
      setDisplayTransactionHash(tokenTransfer ? .hash ? ?'');
      toast({
        title: 'Token  Transfer  Initiated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
    if (isError) {
      toast({
        title: 'Transaction  Error',
        description: 'There  was  an  error  submitting  your  transaction.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    if (isLoading) {
      toast({
        title: 'Transaction  Pending',
        description: 'Your  transaction  is  pending.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
  },
  [tokenTransfer, isSuccess, isError, isLoading, useWaitForTokenTransferTransactionData]);
  return (
  //..
  )
}
```

### Update the UI to implement the token transfer functionality

To connect the token transfer implementation to the UI, update the code using the following snippet:

```javascript
//...

const TransferToken = () => {
  //...

  return (
    <Box
      padding="7"
      maxW="xxl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="auto"
      marginTop="-20"
    >
      {/*  ...  */}

      <VStack spacing={5} align="stretch">
        <FormControl>
          <FormLabel>Source Chain Name</FormLabel>

          <Stack spacing={3}>
            <Select
              placeholder="Select  source  chain"
              value={sourceChain}
              onChange={(e) => setSourceChain(e.target.value)}
              size="md"
            >
              {/*  ...  */}
            </Select>
          </Stack>

          <FormHelperText>
            Source chain for your token eg. Fantom, binance, Polygon etc.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Token Contract Address</FormLabel>

          <Input
            placeholder="Enter  Token  Contract  Address"
            value={interchainTokenContractAddress}
            onChange={(e) => setInterchainTokenContractAddress(e.target.value)}
          />

          <FormHelperText>
            Contract address of the token you want to transfer.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Destination Chain</FormLabel>

          <Stack spacing={3}>
            <Select
              placeholder="Select  Destination  chain"
              value={destinationChain}
              onChange={(e) => setDestinationChain(e.target.value)}
              size="md"
            >
              {/*  ...  */}
            </Select>
          </Stack>

          <FormHelperText>
            Destination chain for your token eg. Fantom, binance, Polygon etc.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Receiver Address</FormLabel>

          <Input
            placeholder="Enter  Receiver  Address"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
          />

          <FormHelperText>Receiver address for your token.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Amount to Transfer</FormLabel>

          <Input
            placeholder="Enter  Amount  to  Transfer"
            value={amountToTransfer}
            onChange={(e) => setAmountToTransfer(Number(e.target.value))}
          />

          <FormHelperText>
            Amount to transfer to the receiver address.
          </FormHelperText>
        </FormControl>

        <Button
          colorScheme="cyan"
          onClick={handleTokenTransfer}
          isLoading={isLoading}
          loadingText="Transferring  Token..."
          w="sm"
          variant="solid"
          disabled={isLoading}
        >
          Transfer Token
        </Button>

        {/*  ...  */}
      </VStack>
    </Box>
  );
};
```

Ensure you replace {/_ ... _/} with the actual code. This placeholder prevents the repetition of existing code in the codebase.

### Test the application to transfer tokens between chains

Add all the required information below, including the amount you want to transfer.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfCmYgGA4qshPV4oU_8p8_PR7mNE2GYwB5l1d-ItrgSmIXAUV5_KP2tnfX11rsWOF_Nlht7F2cWU_8omxE0rAPNwz70J26dcu5nu_Lynl6f4ZXmG4hxTNi5LQP0nU5IvVf4MD64NAMpUlr9uE-SIOOCXudV?key=sYXI-RHo-Dm4bPXTRdCfwQ)

You can also check the transactions directly from your application. Navigate to the Transactions tab on the menu. You should see a list of transactions done by the connected wallet address, which was implemented using the useEvmWalletTransactions hook from Moralis inside the `Transactions.tsx` page. You can learn more about [getting transactions by user address here](https://moralis.io/get-transactions-how-to-fetch-evm-transactional-history/).

## Check the transactions using Moralis API

You can also check the transactions directly from your application. Navigate to the Transactions tab on the menu. You should see a list of transactions done by the connected wallet address so far, which was implemented using the useEvmWalletTransactions hook from Moralis inside the Transactions.tsx page.

When you navigate to the transactions page on your browser, you should see a table similar to the one below.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfy_RSg0mvL20wj2OKcDtC63pL79CbLOXFb3cNyNGrKsnOoJ1AHPqsp1wt7Ye0jfHLEHgscn_MeARlp33cpMCUjT_rEA_SgOG58KbfiN_x2CPrLZXvjyA-R2qJuHynDT41lBnpipyMjEwZCKhKfV6-2yEY?key=sYXI-RHo-Dm4bPXTRdCfwQ)

## Check the ERC-20 asset balance with Moralis API

You successfully created and transferred a new ERC-20 token from the Fantom testnet to the Celo testnet. To track the asset balance of the address you transferred to, you can connect the address, navigate to the Balances tab, and click ERC20, which was implemented using the useEvmWalletTokenBalances hook from Moralis.

useEvmWalletTokenBalances is a function that comes with the imported Moralis package and queries all of a user’s ERC-20 tokens for a specific wallet address at a given chain ID.

Learn more about retrieving ERC20 programmatically in dapp [here](https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-token-balances-price?address=0xcB1C1FdE09f811B294172696404e88E658659905&chain=eth&token_addresses=%5B%5D).

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMd1JRfbT6YKMyFpMlqFOAJ5WdGXDasFkk7r8t2PQiyf2enyu_Us_qKg5jaJz5pwJVEp0c-k1VCEVnGOD3JtTgLohVK4qApZvSMfQJ_B_FHusXfeXYpZwuIdn0w95PDetfwFQKYQWwNpVP3tUSp3TytvTw?key=sYXI-RHo-Dm4bPXTRdCfwQ)

When you navigate to the balances page on your browser, you should see a table similar to the one below.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-Zc87DM0-JBawjAkpYbALaIamcV3pwfivyWkz5NpQfwdVX3O47S-O8zmm8RL4CeUhm2dRb-_Te4_4GNAUuZQlY1mGFDNZI42yk7md1axlxipMATYajTOuwS6Jr-ck7_Nafka4KBhcbVl5p4r9zAfJBatD?key=sYXI-RHo-Dm4bPXTRdCfwQ)

Woohoo! Congratulations, you have just completely built and deployed a multichain token across two blockchains using the Moralis Ethereum Boilerplate. Great job making it this far!

## What's next

You can also explore other functionalities of the Interchain Token Service, such as:

<ul>
  <li><a href="https://docs.axelar.dev/dev/send-tokens/interchain-tokens/create-token#create-a-custom-interchain-token">Creating a new custom Interchain Token</a></li>
  <li><a href="https://docs.axelar.dev/dev/send-tokens/interchain-tokens/upgrade-tokens#canonical-tokens-simple-wrappers">Transforming an existing token into an Interchain token</a></li>
  <li><a href="https://docs.axelar.dev/dev/send-tokens/interchain-tokens/upgrade-tokens#link-deployed-tokens-on-multiple-chains-into-interchain-tokens">Turn deployed tokens on multiple chains into Interchain Tokens</a></li>
</ul>

## References

<ul>
  <li><a href="https://moralis.io/">Moralis</a></li>
  <li><a href="https://docs.moralis.io">Moralis Docs</a></li>
  <li><a href="https://github.com/ethereum-boilerplate/ethereum-boilerplate">Ethereum Boilerplate</a></li>
  <li><a href="https://docs.axelar.dev/dev/send-tokens/interchain-tokens/intro">Interchain Token Service Documentation</a></li>
  <li><a href="https://github.com/axelarnetwork/interchain-token-service/tree/main">Interchain Tokens GitHub Repository</a></li>
  <li><a href="https://github.com/axelar-network/axelarjs-sdk">AxelarJS SDK</a></li>
</ul>
