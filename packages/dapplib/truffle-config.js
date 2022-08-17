require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note museum coil grace hidden slot gate'; 
let testAccounts = [
"0x9eb2292bd618d4ffd3fb65227740dd6f61b8924ce4f576c8ce322b9afb0abbc8",
"0xd8aeb0da2c184430678b8f224e4273387d95fd992f12743d1045e67820376738",
"0x7c0cf92dcfbefc1e119bfab7211468c8d5bb5b68ca903b1bb0d1e790d192552f",
"0x643a13768d7876593d303d0c01b415017d72c48acb509615e82af1d716697633",
"0xd9dbb09b33f87ba50f2d2c0991eb094dd59583088c9ed6a6d2ce7d08ca949964",
"0xbfebd10e58c3127de71312533ef2a85de1faaff923660eff7412d1a45fa8641d",
"0xed51f0341ae9cc71f1457e5f3036dd81c301d522408e2f5bf847842e00c289f1",
"0x175571c7ef1c2948ac5e6e62864741359114a5dd1645f6105a0d9cd71ab980ad",
"0xd41f9e9de04c27d08ae72df15349cb24780d7dfa2427a88664983f1053174fa5",
"0x3e2e4e9c358a418d0cf3f10b759eb1ca2b10bf78513c821071447a5cac6cedc5"
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
            version: '^0.8.0'
        }
    }
};

