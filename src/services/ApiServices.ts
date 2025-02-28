import { ethers } from "ethers";

class ApiServes {
  constructor() {
    this.getBalance = this.getBalance.bind(this);
  }

  async getBalance(address: string) {
    const projectId = process.env.PROVIDER;
    const provider = new ethers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${projectId}`
    );
    const balance = await provider.getBalance(address);
    const formattedBalance = ethers.formatEther(balance);
    return formattedBalance;
  }

  async getTransaction(address: string) {
    const projectId = process.env.PROVIDER;
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${projectId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  fetchData(type: string) {
    return `Data fetched for ${type}`;
  }
}

export default ApiServes;
