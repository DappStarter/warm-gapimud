require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food invite return pizza push goddess light army ghost'; 
let testAccounts = [
"0x2cbe5d94028c274a6ee218ab98ac3c5f1df743e09242b6e72531fb7a8a89c349",
"0xf02c0f953eb8f8ad346e67beb28a627f63187a09aa4e3537722a9901fe59f781",
"0xd44a63af77b52a98d5a8ee241711cefbeb95d6468b2675a970996329fc493cfd",
"0x40a3150650aaf74db0120df62c3591418671a5fae0790c2b7dbe278f54f7f9cf",
"0x56077b338e478ea95dd6bb911686118f84678fa611c8b5406796a74a19e672e4",
"0xd335f42ce72e8c4ad57422208bd26b628f15f9877fe419999e7b172ae3d45fc9",
"0x4427d1092aae803580ca3a459452e7d55d0b298823e2737f8c109f82399f001b",
"0x420af0f31ad132a95e55b3294c180f9486d505fee6b2288ed2e9b2030f3a5e68",
"0x56978bb498b4e33f63865caa1e6f59f8284026335a6682699d1fbf4342bc5c7b",
"0x1a7118124fcf8b0e6556accd5887c3c025c587cac7a938052d10f7ca53fbe512"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
