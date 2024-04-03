import { Blockchain } from "../../blockchiain";
import { Transaction } from "../../interface";

class BlockchainController {
  blockchain: Blockchain;

  constructor() {
    this.blockchain = new Blockchain();
  }

  getFullChain() {
    return this.blockchain.chain;
  }

  addTransaction(transaction: Transaction) {
    return this.blockchain.addTransaction(transaction);
  }

  mine() {
    const proof = this.blockchain.proofOfWork(this.blockchain.lastBlock.proof);
    this.blockchain.addBlock(proof);
    return proof
  }
}

export default new BlockchainController();