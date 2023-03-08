---
title: "Solana Multiplayer Game - TicTacToe"
slug: "solana-multiplayer-game-tictactoe"
description: "This tutorial teaches you how to create your very own Multiplayer Tic Tac Toe game powered by Solana Smart contract and Moralis"
---
## Introduction

This tutorial teaches you how to create your very own Multiplayer Tic Tac Toe game powered by Solana Smart contract and [Moralis Auth API](/authentication-api).

Once complete, you can use this dapp to create new games with other players and play the game in real-time.

This is what the final application looks like. 

![Tic Tac Toe Board](/img/content/3901379-image.webp)

You can find the repository with the final code here: [Tic-Tac-Toe](https://github.com/JohnVersus/solana-dapp-tic-tac-toe).

## Step 1: Deploy Contract

Start a new rust library project named micro_blog

```shell
cargo init tic_tac_toe --lib

cd tic_tac_toe
```



Update `Cargo.toml` file with required rust library configurations

```toml
[lib]
name = "tic_tac_toe"
crate-type = ["cdylib", "lib"]
```



Install the `solana_program` and `borsh` package using

```shell
cargo add solana_program
cargo add borsh
```



This is the code for the Tic Tac Toe solana program. With this code, we can create new games between the user, play games, and store the game data on the blockchain. Paste the below code in `lib.rs` file.

```rs lib.rs
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

pub fn win_check(moves: [u32; 9]) -> u32 {
    // Player 1 move will be marked as 1 and player 2 as 2
    let [m1, m2, m3, m4, m5, m6, m7, m8, m9] = moves;
    if (m1 == 1 && m2 == 1 && m3 == 1)
        || (m1 == 1 && m4 == 1 && m7 == 1)
        || (m7 == 1 && m8 == 1 && m9 == 1)
        || (m3 == 1 && m6 == 1 && m9 == 1)
        || (m1 == 1 && m5 == 1 && m9 == 1)
        || (m3 == 1 && m5 == 1 && m7 == 1)
        || (m2 == 1 && m5 == 1 && m8 == 1)
        || (m4 == 1 && m5 == 1 && m6 == 1)
    {
        // Condition for Player 1 Win
        return 1;
    } else if (m1 == 2 && m2 == 2 && m3 == 2)
        || (m1 == 2 && m4 == 2 && m7 == 2)
        || (m7 == 2 && m8 == 2 && m9 == 2)
        || (m3 == 2 && m6 == 2 && m9 == 2)
        || (m1 == 2 && m5 == 2 && m9 == 2)
        || (m3 == 2 && m5 == 2 && m7 == 2)
        || (m2 == 2 && m5 == 2 && m8 == 2)
        || (m4 == 2 && m5 == 2 && m6 == 2)
    {
        // Condition for Player 2 Win
        return 2;
    } else if (m1 == 1 || m1 == 2)
        && (m2 == 1 || m2 == 2)
        && (m3 == 1 || m3 == 2)
        && (m4 == 1 || m4 == 2)
        && (m5 == 1 || m5 == 2)
        && (m6 == 1 || m6 == 2)
        && (m7 == 1 || m7 == 2)
        && (m8 == 1 || m8 == 2)
        && (m9 == 1 || m9 == 2)
    {
        // Condition for Draw
        return 3;
    } else {
        return 0;
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct GameAccount {
    pub player1: String,
    pub player2: String,
    pub moves: [u32; 9],
    pub game_status: u32,
    pub next_move: u32,
}

entrypoint!(tic_tac_toe);

pub fn tic_tac_toe(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let game_account = &accounts[0];
    let player1 = accounts[1].key.to_string();
    let player2 = accounts[2].key.to_string();

    let instruction: u32 = instruction_data[0].into();
    let played_by: u32 = instruction_data[1].into();
    let move_positon: usize = instruction_data[2].into();

    match instruction {
        // Create New Game or Reset the Game Data
        0 => {
            msg!("Instruction 0 Start");
            let game_data = GameAccount {
                player1,
                player2,
                moves: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                game_status: 0,
                next_move: 1,
            };
            msg!("Game Creation Successful!!");
            msg!("Player 1: {:?}", game_data.player1);
            msg!("Player 2: {:?}", game_data.player2);
            game_data.serialize(&mut &mut game_account.data.borrow_mut()[..])?;
            msg!("Instruction 0 End");
        }
        // Play game!!
        1 => {
            msg!("Instruction 1 Start");
            let mut game_data = GameAccount::try_from_slice(&game_account.data.borrow())?;
            if game_data.game_status == 0 {
                msg!("Player 1: {:?}", game_data.player1);
                msg!("Player 2: {:?}", game_data.player2);

                // Verify and updating moves in Game Account
                if (game_data.moves[move_positon] == 0) && (game_data.next_move == played_by) {
                    if game_data.next_move == 1 {
                        game_data.moves[move_positon] = 1;
                        game_data.next_move = 2
                    } else if game_data.next_move == 2 {
                        game_data.moves[move_positon] = 2;
                        game_data.next_move = 1
                    }
                } else {
                    msg!(" Wrong Move");
                }

                let game_status = win_check(game_data.moves);

                match game_status {
                    0 => {
                        // Log the next player to move
                        msg!("Next move: Player {}", game_data.next_move);
                    }
                    1 => {
                        game_data.game_status = 1;
                        msg!("Player 1 won the game.");
                    }
                    2 => {
                        game_data.game_status = 2;
                        msg!("Player 2 won the game.");
                    }
                    3 => {
                        game_data.game_status = 3;
                        msg!("It's a Draw.");
                    }
                    _ => {
                        msg!("Game Error!!");
                    }
                }
                // Write the updated data to account.
                game_data.serialize(&mut &mut game_account.data.borrow_mut()[..])?;
                msg!("Instruction 1 End");
            } else {
                msg!(" Wrong Move.");
            }
        }
        // Invalid Instruction
        _ => {
            msg!("Invalid Instruction");
        }
    }

    Ok(())
}
```



Build the Solana Rust Program using

```bash
cargo build-bpf
```



Once built successfully without any error `.so` of the program will be added to the `/target/deploy` folder. You can deploy this to the solana cluster using.

```shell
solana program deploy ./target/deploy/tic_tac_toe.so
```



Once successfully deployed it will return the program Id of the Solana Program.

![Console with Program Id](/img/content/5d366aa-image.webp)

Store the Program Id somewhere accessible, as we will need this to call the smart contract function from the client side.

## Step 2: Frontend Setup

Follow these steps to run the project in your local environment.

- Clone the project from [GitHub](https://github.com/JohnVersus/solana-dapp-tic-tac-toe) using the`git clone` command and `cd` into the project

```shell
git clone https://github.com/JohnVersus/solana-dapp-tic-tac-toe.git

cd solana-dapp-tic-tac-toe
```



- Install the dependencies using the`yarn` or `npm` package manager.

```shell
yarn install
```



- Rename `.env.local.example` file to `.env.local` and add the required environment secrets.

```shell .env.local
APP_CHAIN_ID=devnet
APP_DOMAIN=ethereum.boilerplate 
MORALIS_API_KEY= xxx
NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/64
NEXTAUTH_URL=http://localhost:3000

# Required for signing game transactions
OWNER_PRIVATE_KEY= xxx

NEXT_PUBLIC_PROGRAM_ID = xxx 
```



- Start the app in localhost port 3000.

```shell
yarn run dev
```



Once the command has been run successfully, you should be able to view the app in localhost port 3000, or click [here](http://localhost:3000) to open the page directly.

In the app, you'll find multiple tabs, but for this tutorial, we only need to access the `/tic-tac-toe` page. 

![Nav Bar](/img/content/2e9d40f-image.webp)

To use the app, we must first connect to the Solana wallet. This can be done by clicking the "Select Wallet" button on the top right. You can then connect to the wallet of your choice. 

![Select Wallet Button](/img/content/5e9b822-image.webp)

Authenticating the wallet is important for this dapp so that we can prevent unauthorized gameplay.

The code related to authentication can be found in the `src/components/modules/ConnectButton` folder, although we won't be looking at the authentication code in this tutorial. 

If you want to know how authentication works, you can take a look at this [video](https://www.youtube.com/watch?v=0fuevxebv_E). 

## Step 3: Calling the Smart Contract

In this project, we are signing all the transactions in the backend using the owner's private key, so that players don't have to sign transactions on every move.

The code related to this can be found in the `pages/api/TicTacToe` folder.

Using the `newgame.ts` API route we can sign transactions required to create a new game by taking the player address as input and with `playGame.ts` we can sign transactions required to play the game by taking the player's move as input. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="newGame.ts" label="newGame.ts">

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  TransactionInstruction,
} from '@solana/web3.js';
import base58 from 'bs58';
import * as borsh from 'borsh';
import { GameAccount, GameAccountSchema } from 'components/templates/TicTacToe/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { OWNER_PRIVATE_KEY } = process.env;
  const { player1, player2 } = req.body;

  if (!OWNER_PRIVATE_KEY) {
    throw new Error('Add Owner private key in env file.');
  }
  const key = Uint8Array.from(base58.decode(OWNER_PRIVATE_KEY));
  const keypair = Keypair.fromSecretKey(key);
  const { publicKey } = keypair;

  const Player1 = player1;
  const Player2 = player2;
  const programId = process.env.NEXT_PUBLIC_PROGRAM_ID;
  if (!programId) {
    throw new Error('Add Program Id in env file.');
  }
  const connection = new Connection(clusterApiUrl('devnet'));

  // Account Creation --- Start
  const GAME_ACCOUNT_SECRET = `${player1.substring(0, 5)}${player2.substring(0, 5)}`;

  const DATA_SIZE = borsh.serialize(GameAccountSchema, new GameAccount()).length;
  console.log(DATA_SIZE);

  const GameDataAccountPubkey = await PublicKey.createWithSeed(
    publicKey,
    GAME_ACCOUNT_SECRET,
    new PublicKey(programId),
  );

  const GameDataAccount = await connection.getAccountInfo(GameDataAccountPubkey);

  if (GameDataAccount === null) {
    console.log('Creating account', GameDataAccountPubkey.toBase58(), 'to play Tic-Tac-Toe');

    const lamports = await connection.getMinimumBalanceForRentExemption(DATA_SIZE);

    const AccountCreation = new Transaction();
    AccountCreation.add(
      SystemProgram.createAccountWithSeed({
        fromPubkey: publicKey,
        basePubkey: publicKey,
        seed: GAME_ACCOUNT_SECRET,
        newAccountPubkey: GameDataAccountPubkey,
        lamports,
        space: DATA_SIZE,
        programId: new PublicKey(programId),
      }),
    );
    console.log('created AccountWithSeed', AccountCreation);
    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext();

    const signature = await sendAndConfirmTransaction(connection, AccountCreation, [keypair], {
      minContextSlot,
      skipPreflight: true,
      preflightCommitment: 'processed',
    });
    const confirmtx = await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    console.log({ signature, confirmtx });
  }
  // Account Creation --- END

  const transaction = new Transaction();
  transaction.add(
    new TransactionInstruction({
      keys: [
        {
          pubkey: GameDataAccountPubkey,
          isSigner: false,
          isWritable: true,
        },
        {
          pubkey: new PublicKey(Player1),
          isSigner: false,
          isWritable: false,
        },
        {
          pubkey: new PublicKey(Player2),
          isSigner: false,
          isWritable: false,
        },
        {
          pubkey: publicKey,
          isSigner: true,
          isWritable: false,
        },
        {
          pubkey: SystemProgram.programId,
          isSigner: false,
          isWritable: false,
        },
      ],
      programId: new PublicKey(programId),
      data: Buffer.from([0, 0, 0]),
    }),
  );

  const {
    context: { slot: minContextSlot },
    value: { blockhash, lastValidBlockHeight },
  } = await connection.getLatestBlockhashAndContext();

  try {
    const signature = await sendAndConfirmTransaction(connection, transaction, [keypair], {
      minContextSlot,
      skipPreflight: true,
      preflightCommitment: 'processed',
    });

    const confirmtx = await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    console.log({ signature, confirmtx });
    const data = await connection.getParsedTransaction(signature);

    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
      console.error(error.message);
    }
  }
}

```

</TabItem>
<TabItem value="playGame.ts" label="playGame.ts">

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  TransactionInstruction,
} from '@solana/web3.js';
import base58 from 'bs58';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { OWNER_PRIVATE_KEY } = process.env;
  const { player1, player2, gamePlayer, move } = req.body;
  if (!OWNER_PRIVATE_KEY) {
    throw new Error('Add Owner private key in env file.');
  }
  const key = Uint8Array.from(base58.decode(OWNER_PRIVATE_KEY));
  const keypair = Keypair.fromSecretKey(key);
  const { publicKey } = keypair;

  const Player1 = player1;
  const Player2 = player2;
  const programId = process.env.NEXT_PUBLIC_PROGRAM_ID;
  if (!programId) {
    throw new Error('Add Program Id in env file.');
  }
  const connection = new Connection(clusterApiUrl('devnet'));

  const GAME_ACCOUNT_SECRET = `${player1.substring(0, 5)}${player2.substring(0, 5)}`;

  const GameDataAccountPubkey = await PublicKey.createWithSeed(
    publicKey,
    GAME_ACCOUNT_SECRET,
    new PublicKey(programId),
  );

  const transaction = new Transaction();
  transaction.add(
    new TransactionInstruction({
      keys: [
        {
          pubkey: GameDataAccountPubkey,
          isSigner: false,
          isWritable: true,
        },
        {
          pubkey: new PublicKey(Player1),
          isSigner: false,
          isWritable: false,
        },
        {
          pubkey: new PublicKey(Player2),
          isSigner: false,
          isWritable: false,
        },
        {
          pubkey: publicKey,
          isSigner: true,
          isWritable: false,
        },
        {
          pubkey: SystemProgram.programId,
          isSigner: false,
          isWritable: false,
        },
      ],
      programId: new PublicKey(programId),
      data: Buffer.from([1, gamePlayer, move]),
    }),
  );

  const {
    context: { slot: minContextSlot },
    value: { blockhash, lastValidBlockHeight },
  } = await connection.getLatestBlockhashAndContext();

  try {
    const signature = await sendAndConfirmTransaction(connection, transaction, [keypair], {
      minContextSlot,
      skipPreflight: true,
      preflightCommitment: 'processed',
    });
    const confirmtx = await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    const data = await connection.getParsedTransaction(signature);

    res.status(200).json(data?.meta?.logMessages);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
      console.error(error.message);
    }
  }
}

```

</TabItem>
</Tabs>

Here is the code related to the frontend code.

> Only partial code is shown here to keep it clean. Visit `src/components/templates/TicTacToe` to view the entire code.

The first step of the game is to create a new game to play using this `Create Game` tab.

![](/img/content/1e15cd8-image.webp)

The code in `NewGameForm.tsx` files are responsible for reading the data from new game inputs and sending the data to the backend `newGame` API route for signing the transaction. 

```typescript NewGameForm.tsx
// Refer full code in `src/components/templates/TicTacToe/NewGameForm.tsx`

const NewGameForm: FC = () => {
  // Player data from frontend is stored in state variables
  const [player2, setPlayer2] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer2(e.target.value);
  };
  const { publicKey } = useWallet();
  const createGame = async () => {
    if (!publicKey || !player2) {
    }
    if (publicKey?.toBase58() === player2) {
    }
    const players = {
      player1: publicKey,
      player2: new PublicKey(player2),
    };
    try {
      // Callign the `newGame` api route to create a new game with players data
      const data = await apiPost('/TicTacToe/newGame', players);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return (
    <>
      <FormControl>
        <Flex height={'300px'} direction={'column'} alignItems={'center'} justifyContent={'space-around'}>
          <Box width={'50%'}>
            <FormLabel>Player 1</FormLabel>
            <Input placeholder="Connect to Wallet" value={`${publicKey ? publicKey : ''}`} disabled />
          </Box>
          <Box width={'50%'}>
            <FormLabel>Player 2</FormLabel>
            <Input placeholder="Player 2 Address" onChange={handleInput} />
          </Box>
          <Button width={'50%'} mt={4} colorScheme="teal" isLoading={status ? true : false} onClick={createGame}>
            Create New Game
          </Button>
          <FormHelperText>{status && status}</FormHelperText>
        </Flex>
      </FormControl>
    </>
  );
};
```



When a transaction for the new game is successful. We can visit `Play Game` tab to play the game. Clicking the `Refresh Games` button will load the created games. 

![Play Game Tab](/img/content/e0e1bd3-image.webp)

![Play Game Tab with refreshed Games](/img/content/7166cee-image.webp)

The code related to getting the games from the blockchain can be found in the `src/components/templates/TicTacToe/TicTacToe.tsx`

```typescript TicTacToe.tsx
// Refer full code in `src/components/templates/TicTacToe/TicTacToe.tsx`

// Data of available game accounts are stored in state variable
const [gameAccounts, setGameAccounts] = useState<Array<gameData['data']>>([]);

// `getProgramAccounts` function is called when then Refresh games button is clicked
const getProgramAccounts = async () => {
    setGameAccounts([]);
    const data = await connection.getProgramAccounts(new PublicKey(programId));
    if (data.length) {
      data.forEach((e) => {
        console.log(e);
        const gameInput = deserializeUnchecked(GameAccountSchema, GameAccount, e.account.data);
        const accountId = e.pubkey;
        const game = { gameInput, accountId };
        console.log(data);
        setGameAccounts((existing) => [...existing, game]);
      });
  };

return (
  <Flex flexDirection={'column'} alignItems={'center'}>
    <Heading size="sm" marginBottom={6}>
      {gameAccounts.length ? 'Available Games!!' : 'Click to refresh games'}
    </Heading>
    <Flex overflow={'scroll'} maxWidth={'800px'} gap={'4px'}>
     // UI is rendered with the data from `gameAccounts` stae
      {gameAccounts &&
        gameAccounts.map((game, i) => {
          return (
            <Games
              key={i}
              data={{ gameInput: game.gameInput, accountId: game.accountId }}
              loadGame={() => {
                loadGame(game);
              }}
            />
          );
        })}
    </Flex>
    <Button
      maxWidth={'200px'}
      minWidth={'150px'}
      mt={4}
      colorScheme="gray"
      isLoading={status ? true : false}
      onClick={getProgramAccounts}
    >
      Refresh Games
    </Button>
  </Flex>
);
```



The next step of the game is to play the games that can be loaded by selecting one of the available games. And you can play the game by clicking on any of the boxes from Tic Tac Toe board. 

The below is code that handles the gameplay and signs the transaction of the gameplay. It has 3 important functions.

- `playGame` function - When a user clicks on any box. The play game function collects the data like which box is clicked and who clicked the box and send it to the backend `playGame` API route to sign the transactions. 
- `connection.onAccountChange()` function - listens to the change in-game account data. We pass a callback to this listener function to get the updated data and update our UI with the latest data. 
- `celebrateWin` function - Check the latest game data for a winner and shows a notification if there is a winner. 

These 3 functions are responsible for the gameplay on the frontend. 

```typescript GameBoard.tsx
// Refer full code in `src/components/templates/TicTacToe/GameBoard.tsx`

const GameBoard: FC<BoardInput> = ({ data, connection }) => {
  const { publicKey } = useWallet();
  const toast = useToast();
  const [currentgameData, setCurrentGameData] = useState<GameAccount>();
  const [subscriptions, SetSubscriptions] = useState<number[]>([]);
  const [spinner, setSpinner] = useState<number | null>();

  const accountPublicKey = data.accountId;

  useEffect(() => {
    setCurrentGameData(data.gameInput);
  }, [data]);

  // Listen to account changes
  useEffect(() => {
    const SubId = connection.onAccountChange(accountPublicKey, (e) => {
      console.log(e);
      const gameInput = deserializeUnchecked(GameAccountSchema, GameAccount, e.data);
      setCurrentGameData(gameInput);
    });
    SetSubscriptions((existing) => [...existing, SubId]);
    console.log(SubId);
  }, [accountPublicKey]);

  useEffect(() => {
    console.log(subscriptions);
    if (subscriptions.length > 1) {
      connection.removeAccountChangeListener(subscriptions[0]);
      deleteArrayElement(subscriptions[0]);
    }
  }, [subscriptions]);

  const celebrateWin = (winnerId: number) => {
    switch (winnerId) {
      case 1: {
        if (currentgameData?.player1 === publicKey?.toBase58()) {
          toast({
            title: 'You won the game!! ',
            status: 'success',
            position: 'bottom-right',
            isClosable: true,
          });
        } else {
          toast({
            title: 'Player 1 won the game!! ',
            status: 'error',
            position: 'bottom-right',
            isClosable: true,
          });
        }
        break;
      }
      case 2: {
        if (currentgameData?.player2 === publicKey?.toBase58()) {
          toast({
            title: 'You won the game!! ',
            status: 'success',
            position: 'bottom-right',
            isClosable: true,
          });
        } else {
          toast({
            title: 'Player 2 won the game!! ',
            status: 'error',
            position: 'bottom-right',
            isClosable: true,
          });
        }
        break;
      }
      case 3: {
        toast({
          title: 'Its a Draw!! ',
          status: 'success',
          position: 'bottom-right',
          isClosable: true,
        });

        break;
      }
    }
  };

  async function playGame(move: number) {
    if (currentgameData) {
      const gamePlayer =
        currentgameData.player1 === publicKey?.toBase58()
          ? 1
          : currentgameData.player2 === publicKey?.toBase58()
          ? 2
          : 0;
      if (gamePlayer) {
          const gameMove = { player1: currentgameData.player1, player2: currentgameData.player2, gamePlayer, move };
          await apiPost('/TicTacToe/playGame', gameMove);
    }
  }

  if (currentgameData) {
    return (
      <>
        <Flex>
          <Grid gridTemplateColumns={'repeat(3, 1fr)'} gridTemplateRows={'repeat(3, 1fr)'} justifyContent={'center'}>
            {currentgameData.moves.map((e, i) => {
              return (
                <Flex
                  onClick={() => { playGame(i);}
                  fontSize={'25px'}
                  color={'white'}
                  cursor={'pointer'}
                >
                  {(e === 1 && '🔴') || (e === 2 && '❌') || (e === 0 && (spinner === i ? <Spinner /> : ''))}
                </Flex>
              );
            })}
          </Grid>
        </Flex>
      </>
    );
  }
  return null;
};

```



Apart from the above code, you may find multiple `if` conditions in the `GameBoard.tsx` code. Those conditions are responsible for valid gameplay so that we don't send the unnecessary move to the backend to sign the gamePlay transactions, which results in failed transactions and costs unnecessary gas.

That's the end of it!! 

That's all the code required to create and play a Multi-player Tic-Tac-Toe game.

## Step 4: Testing

The game can be tested by first creating a new game in `Create Game` tab and then visit `Play Game` to refresh the games. Now by selecting the game you can start playing it with other players.

Congratulations! 🥳 

Now you know how to create your very own Multi-Player Tic Tac Toe game on the solana blockchain.

## YouTube Tutorial

https://www.youtube.com/watch?v=fa911cljnfQ


## Support

If you have any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.