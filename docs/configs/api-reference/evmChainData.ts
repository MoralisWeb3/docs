const chainData = [
  {
    "name": "Ethereum Mainnet",
    "logo": "/img/content/eth.png",
    "type": "Mainnet",
    "chainID": "0x1 (1)",
    "evmChain": "EvmChain.ETHEREUM",
    "isNew": false,
    "hasSpamDetection": true,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps":true,
      "nftTrades": true,
      "queryParams": ["eth", "0x1"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "12",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/eth/",
        "https://site2.moralis-nodes.com/eth/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Ethereum Sepolia",
    "logo": "/img/content/eth.png",
    "type": "Testnet",
    "chainID": "0xaa36a7 (11155111)",
    "evmChain": "EvmChain.SEPOLIA",
    "isNew": false,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps":false,
      "nftTrades": false,
      "queryParams": ["sepolia", "0xaa36a7"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "18",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
          "https://site1.moralis-nodes.com/sepolia/",
          "https://site2.moralis-nodes.com/sepolia/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Ethereum Holesky",
    "logo": "/img/content/eth.png",
    "type": "Testnet",
    "chainID": "0x4268 (17000)",
    "evmChain": "EvmChain.HOLESKY",
    "isNew": false,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps":false,
      "nftTrades": false,
      "queryParams": ["holesky", "0x4268"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "18",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/holesky/",
        "https://site2.moralis-nodes.com/holesky/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Polygon Mainnet",
    "logo": "/img/content/polygon.png",
    "chainID": "0x89 (137)",
    "evmChain": "EvmChain.POLYGON",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps":true,
      "nftTrades": true,
      "queryParams": ["polygon", "0x89"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/polygon/",
        "https://site2.moralis-nodes.com/polygon/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Polygon Amoy",
    "logo": "/img/content/polygon.png",
    "type": "Testnet",
    "chainID": "0x13882 (80002)",
    "evmChain": "EvmChain.POLYGON_AMOY",
    "isNew": false,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps":false,
      "nftTrades": false,
      "queryParams": ["amoy", "0x13882"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/amoy/",
        "https://site2.moralis-nodes.com/amoy/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Binance Smart Chain Mainnet",
    "logo": "/img/content/bsc.png",
    "chainID": "0x38 (56)",
    "evmChain": "EvmChain.BSC",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": true,
      "nftTrades": true,
      "queryParams": ["bsc", "0x38"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "18",
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/bsc/",
        "https://site2.moralis-nodes.com/bsc/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Binance Smart Chain Testnet",
    "logo": "/img/content/bsc.png",
    "chainID": "0x61 (97)",
    "evmChain": "EvmChain.BSC_TESTNET",
    "isNew": false,
    "type": "Testnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": ["bsc testnet", "0x61"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "18",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/bsc-testnet/",
        "https://site2.moralis-nodes.com/bsc-testnet/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Arbitrum",
    "logo": "/img/content/arbitrum.png",
    "chainID": "0xa4b1 (42161)",
    "evmChain": "EvmChain.ARBITRUM",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": true,
      "nftTrades": true,
      "queryParams": ["arbitrum", "0xa4b1"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "18",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/arbitrum/",
        "https://site2.moralis-nodes.com/arbitrum/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Arbitrum Sepolia",
    "logo": "/img/content/arbitrum.png",
    "type": "Testnet",
    "chainID": "0x66eee (421614)",
    "evmChain": "EvmChain.ARBITRUM_SEPOLIA",
    "isNew": false,
    "evmApi": {
        "supported": false,
        "reason": "Unsupported",
        "internalTxs": false,
        "erc20Swaps": false,
        "nftTrades": false,
        "queryParams": []
    },
    "streamsApi": {
        "supported": true,
        "blockConfirmations": "600",
        "internalTxs": true
    },
    "rpcNodes": {
        "supported": true,
        "urls": [
            "https://site1.moralis-nodes.com/arbitrum-sepolia/",
            "https://site2.moralis-nodes.com/arbitrum-sepolia/"
        ]
    },
    "authApi": {
        "supported": false,
        "reason": "Unsupported"
    }
  },
  {
    "name": "Base",
    "logo": "/img/content/base.png",
    "chainID": "0x2105 (8453)",
    "evmChain": "EvmChain.BASE",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": true,
      "nftTrades": true,
      "queryParams": ["base", "0x2105"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/base/",
        "https://site2.moralis-nodes.com/base/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Base Sepolia",
    "logo": "/img/content/base.png",
    "type": "Testnet",
    "chainID": "0x14a34 (84532)",
    "evmChain": "EvmChain.BASE_SEPOLIA",
    "isNew": false,
    "evmApi": {
        "supported": true,
        "internalTxs": true,
        "erc20Swaps": false,
        "nftTrades": false,
        "queryParams": ["base sepolia", "0x14a34"]
    },
    "streamsApi": {
        "supported": true,
        "blockConfirmations": "100",
        "internalTxs": true
    },
    "rpcNodes": {
        "supported": true,
        "urls": [
            "https://site1.moralis-nodes.com/base-sepolia/",
            "https://site2.moralis-nodes.com/base-sepolia/"
        ]
    },
    "authApi": {
        "supported": true
    }
  },
  {
    "name": "Optimism",
    "logo": "/img/content/optimism.png",
    "chainID": "0xa (10)",
    "evmChain": "EvmChain.OPTIMISM",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": true,
      "nftTrades": true,
      "queryParams": ["optimism", "0xa"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/optimism/",
        "https://site2.moralis-nodes.com/optimism/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Optimism Sepolia",
    "logo": "/img/content/optimism.png",
    "type": "Testnet",
    "chainID": "0xaa37dc (11155420)",
    "evmChain": "EvmChain.OPTIMISM_SEPOLIA",
    "isNew": false,
    "evmApi": {
        "supported": false,
        "reason": "Unsupported",
        "internalTxs": false,
        "erc20Swaps": false,
        "nftTrades": false,
        "queryParams": []
    },
    "streamsApi": {
        "supported": true,
        "blockConfirmations": "600",
        "internalTxs": true
    },
    "rpcNodes": {
        "supported": true,
        "urls": [
            "https://site1.moralis-nodes.com/optimism-sepolia/",
            "https://site2.moralis-nodes.com/optimism-sepolia/"
        ]
    },
    "authApi": {
        "supported": false,
        "reason": "Unsupported"
    }
  },
  {
    "name": "Linea",
    "logo": "/img/content/linea.png",
    "chainID": "0xe708 (59144)",
    "evmChain": "EvmChain.LINEA",
    "isNew": true,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": true,
      "nftTrades": false,
      "queryParams": ["linea", "0xe708"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/linea/",
        "https://site2.moralis-nodes.com/linea/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Linea Sepolia",
    "logo": "/img/content/linea.png",
    "type": "Testnet",
    "chainID": "0xe705 (59141)",
    "evmChain": "EvmChain.LINEA_SEPOLIA",
    "isNew": true,
    "evmApi": {
        "supported": true,
        "internalTxs": true,
        "erc20Swaps": false,
        "nftTrades": false,
        "queryParams": ["linea sepolia", "0xe705"]
    },
    "streamsApi": {
        "supported": true,
        "blockConfirmations": "100",
        "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/linea-sepolia/",
        "https://site2.moralis-nodes.com/linea-sepolia/"
      ]
    },
    "authApi": {
        "supported": true
    }
  },
  {
    "name": "Avalanche",
    "logo": "/img/content/avalanche.png",
    "type": "Mainnet",
    "chainID": "0xa86a (43114)",
    "evmChain": "EvmChain.AVALANCHE",
    "isNew": false,
    "evmApi": {
        "supported": true,
        "internalTxs": true,
        "erc20Swaps": true,
        "nftTrades": true,
        "queryParams": ["avalanche", "0xa86a"]
    },
    "streamsApi": {
        "supported": true,
        "blockConfirmations": "100",
        "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/avalanche/",
        "https://site2.moralis-nodes.com/avalanche/"
      ]
    },
    "authApi": {
        "supported": true
    }
  },
  {
    "name": "Fantom Mainnet",
    "logo": "/img/content/fantom.png",
    "type": "Mainnet",
    "chainID": "0xfa (250)",
    "evmChain": "EvmChain.FANTOM",
    "isNew": false,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": true,
      "nftTrades": false,
      "queryParams": ["fantom", "0xfa"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": false,
      "reason": "Unsupported",
      "urls": []
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Fantom Testnet",
    "logo": "/img/content/fantom.png",
    "type": "Mainnet",
    "chainID": "0xfa2 (4002)",
    "evmChain": "EvmChain.FANTOM_TESTNET",
    "isNew": false,
    "evmApi": {
      "supported": false,
      "reason": "Unsupported",
      "internalTxs": false,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": []
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": false,
      "reason": "Unsupported",
      "urls": []
    },
    "authApi": {
      "supported": false,
      "reason": "Unsupported"
    }
  },
  {
    "name": "Cronos Mainnet",
    "logo": "/img/content/cronos.png",
    "chainID": "0x19 (25)",
    "evmChain": "EvmChain.CRONOS",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": false,
      "queryParams": ["cronos", "0x19"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": false,
      "erc20Swaps": true,
      "nftTrades": false
    },
    "rpcNodes": {
      "supported": false,
      "reason": "Unsupported",
      "urls": []
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Palm",
    "logo": "/img/content/palm.png",
    "chainID": "0x2a15c308d (11297108109)",
    "evmChain": "EvmChain.PALM",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": false,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": ["palm", "0x2a15c308d"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "36",
      "internalTxs": false
    },
    "rpcNodes": {
      "supported": false,
      "reason": "Unsupported",
      "urls": []
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Gnosis",
    "logo": "/img/content/gnosis.png",
    "chainID": "0x64 (100)",
    "evmChain": "EvmChain.GNOSIS",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": false,
      "erc20Swaps": true,
      "nftTrades": false,
      "queryParams": ["gnosis", "0x64"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
          "https://site1.moralis-nodes.com/gnosis/",
          "https://site2.moralis-nodes.com/gnosis/"
      ]
  },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Gnosis Chiado",
    "logo": "/img/content/gnosis.png",
    "type": "Testnet",
    "chainID": "0x27d8 (10200)",
    "evmChain": "EvmChain.GNOSIS_TESTNET",
    "isNew": false,
    "evmApi": {
      "supported": true,
      "internalTxs": false,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": ["gnosis testnet", "0x27d8"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
          "https://site1.moralis-nodes.com/gnosis-testnet/",
          "https://site2.moralis-nodes.com/gnosis-testnet/"
      ]
  },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Chiliz Mainnet",
    "logo": "/img/content/chiliz.png",
    "chainID": "0x15b38 (88888)",
    "evmChain": "EvmChain.CHILIZ",
    "isNew": false,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": ["chiliz", "0x15b38"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100"
    },
    "rpcNodes": {
      "supported": false,
      "reason": "Unsupported",
      "urls": []
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Chiliz Testnet",
    "logo": "/img/content/chiliz.png",
    "type": "Testnet",
    "chainID": "0x15b32 (88882)",
    "evmChain": "EvmChain.CHILIZ_TESTNET",
    "isNew": false,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": ["chiliz testnet", "0x15b32"]
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100"
    },
    "rpcNodes": {
      "supported": false,
      "reason": "Unsupported",
      "urls": []
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Pulsechain",
    "logo": "/img/content/pulsechain.png",
    "type": "Mainnet",
    "chainID": "0x171 (369)",
    "evmChain": "EvmChain.PULSECHAIN",
    "isNew": false,
    "evmApi": {
      "supported": false,
      "internalTxs": false,
      "reason": "Unsupported",
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": []
    },
    "streamsApi": {
      "supported": true,
      "blockConfirmations": "100",
      "internalTxs": true
    },
    "rpcNodes": {
      "supported": false,
      "urls": [],
      "reason": "Unsupported"
    },
    "authApi": {
      "supported": false,
      "reason": "Unsupported"
    }
  },
  {
    "name": "Moonbeam",
    "logo": "/img/content/moonbeam.png",
    "chainID": "0x504 (1284)",
    "evmChain": "EvmChain.MOONBEAM",
    "isNew": true,
    "type": "Mainnet",
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": true,
      "nftTrades": false,
      "queryParams": ["moonbeam", "0x504"]
    },
    "streamsApi": {
      "supported": false,
      "reason": "Coming soon"
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/moonbeam/",
        "https://site2.moralis-nodes.com/moonbeam/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Moonriver",
    "logo": "/img/content/moonbeam.png",
    "type": "Testnet",
    "chainID": "0x505 (1285)",
    "evmChain": "EvmChain.MOONRIVER",
    "isNew": true,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": ["moonriver", "0x505"]
    },
    "streamsApi": {
      "supported": false,
      "reason": "Coming soon"
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/moonriver/",
        "https://site2.moralis-nodes.com/moonriver/"
      ]
    },
    "authApi": {
      "supported": true
    }
  },
  {
    "name": "Moonbase",
    "logo": "/img/content/moonbeam.png",
    "type": "Testnet",
    "chainID": "0x507 (1287)",
    "evmChain": "EvmChain.MOONBASE",
    "isNew": true,
    "evmApi": {
      "supported": true,
      "internalTxs": true,
      "erc20Swaps": false,
      "nftTrades": false,
      "queryParams": ["moonbase", "0x507"]
    },
    "streamsApi": {
      "supported": false,
      "reason": "Coming soon"
    },
    "rpcNodes": {
      "supported": true,
      "urls": [
        "https://site1.moralis-nodes.com/moonbase/",
        "https://site2.moralis-nodes.com/moonbase/"
      ]
    },
    "authApi": {
      "supported": true
    }
  }
]

export default chainData;