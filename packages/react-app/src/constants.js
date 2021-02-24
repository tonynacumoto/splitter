// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

// MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey
export const ETHERSCAN_KEY = "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8";

// EXTERNAL CONTRACTS

export const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

export const DAI_ABI = [
  {
    inputs: [{ internalType: "uint256", name: "chainId_", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "src", type: "address" },
      { indexed: true, internalType: "address", name: "guy", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      { indexed: true, internalType: "bytes4", name: "sig", type: "bytes4" },
      { indexed: true, internalType: "address", name: "usr", type: "address" },
      { indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32" },
      { indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32" },
      { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "src", type: "address" },
      { indexed: true, internalType: "address", name: "dst", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "guy", type: "address" }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "src", type: "address" },
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "move",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
      { internalType: "bool", name: "allowed", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "pull",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "push",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "guy", type: "address" }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "src", type: "address" },
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "wards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export const NETWORK = chainId => {
  for (const n in NETWORKS) {
    if (NETWORKS[n].chainId == chainId) {
      return NETWORKS[n];
    }
  }
};

export const NETWORKS = {
  localhost: {
    name: "localhost",
    color: "#666666",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":8545",
  },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://etherscan.io/",
  },
  kovan: {
    name: "kovan",
    color: "#7003DD",
    chainId: 42,
    rpcUrl: `https://kovan.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://kovan.etherscan.io/",
    faucet: "https://gitter.im/kovan-testnet/faucet", // https://faucet.kovan.network/
  },
  rinkeby: {
    name: "rinkeby",
    color: "#e0d068",
    chainId: 4,
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
    faucet: "https://faucet.rinkeby.io/",
    blockExplorer: "https://rinkeby.etherscan.io/",
  },
  ropsten: {
    name: "ropsten",
    color: "#F60D09",
    chainId: 3,
    faucet: "https://faucet.ropsten.be/",
    blockExplorer: "https://ropsten.etherscan.io/",
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  },
  goerli: {
    name: "goerli",
    color: "#0975F6",
    chainId: 5,
    faucet: "https://goerli-faucet.slock.it/",
    blockExplorer: "https://goerli.etherscan.io/",
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
  },
  xdai: {
    name: "xdai",
    color: "#48a9a6",
    chainId: 100,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://dai.poa.network",
    faucet: "https://xdai-faucet.top/",
    blockExplorer: "https://blockscout.com/poa/xdai/",
  },
  matic: {
    name: "matic",
    color: "#2bbdf7",
    chainId: 137,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mainnet.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://explorer-mainnet.maticvigil.com//",
  },
  mumbai: {
    name: "mumbai",
    color: "#92D9FA",
    chainId: 80001,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://mumbai-explorer.matic.today/",
  },
  accounts: [
    {
      pub: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
      private: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    },
    {
      pub: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
      private: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
    },
    {
      pub: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
      private: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
    },
    {
      pub: "0x90f79bf6eb2c4f870365e785982e1f101e93b906",
      private: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
    },
    {
      pub: "0x15d34aaf54267db7d7c367839aaf71a00a2c6a65",
      private: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",
    },
    {
      pub: "0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc",
      private: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba",
    },
    {
      pub: "0x976ea74026e726554db657fa54763abd0c3a0aa9",
      private: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e",
    },
    {
      pub: "0x14dc79964da2c08b23698b3d3cc7ca32193d9955",
      private: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
    },
    {
      pub: "0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f",
      private: "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97",
    },
    {
      pub: "0xa0ee7a142d267c1f36714e4a8f75612f20a79720",
      private: "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",
    },
    {
      pub: "0xbcd4042de499d14e55001ccbb24a551f3b954096",
      private: "0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897",
    },
    {
      pub: "0x71be63f3384f5fb98995898a86b02fb2426c5788",
      private: "0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82",
    },
    {
      pub: "0xfabb0ac9d68b0b445fb7357272ff202c5651694a",
      private: "0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1",
    },
    {
      pub: "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec",
      private: "0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd",
    },
    {
      pub: "0xdf3e18d64bc6a983f673ab319ccae4f1a57c7097",
      private: "0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa",
    },
    {
      pub: "0xcd3b766ccdd6ae721141f452c550ca635964ce71",
      private: "0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61",
    },
    {
      pub: "0x2546bcd3c84621e976d8185a91a922ae77ecec30",
      private: "0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0",
    },
    {
      pub: "0xbda5747bfd65f08deb54cb465eb87d40e51b197e",
      private: "0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd",
    },
    {
      pub: "0xdd2fd4581271e230360230f9337d5c0430bf44c0",
      private: "0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0",
    },
    {
      pub: "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
      private: "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
    },
  ],
};
