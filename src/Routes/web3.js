import Web3 from 'web3';
let web3;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/1024443375bf4ed0bf7bb2095e8c6d66'
    );
    web3 = new Web3(provider);
}
export default web3