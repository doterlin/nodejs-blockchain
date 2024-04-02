import { BlockData, Transaction } from './interface';
import sha256 from 'crypto-js/sha256';

// 区块链类
export class Blockchain {
  // 链
  chain: Array<BlockData>;

  // 当前交易
  currentTransactions: Array<any>;

  // 构造函数
  constructor() {
    this.chain = []
    this.currentTransactions = []

    // 创世模块
    this.addBlock(100, '0')
  }

  //  添加区块 
  public addBlock(proof: Number, previousHash? : String) {
    const block:BlockData = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.currentTransactions,
      proof,
      previousHash: previousHash || Blockchain.hash(JSON.stringify(this.lastBlock))
    }
    this.currentTransactions = []
    this.chain.push(block)
  }

  // 工作量证明
  public proofOfWork(lastProof: Number) : Number {
    let proof = 0
    while (!this.validProof(lastProof, proof)) {
      proof++
    }
    console.log('proof valid success: ', proof)
    return proof
  }

  // 验证工作量证明
  public validProof(lastProof: Number, proof: Number) : Boolean {
    const hashString: String = Blockchain.hash(lastProof.toString() + proof.toString())
    console.log('hashString: ', hashString)
    return hashString.substring(0, 4) === '0000'
  }

  // 添加交易
  public addTransaction (transaction: Transaction) : Number {
    this.currentTransactions.push(transaction)
    return this.lastBlock.index + 1
  }

  // 哈希方法
  static hash(str: string) : String {
    return sha256(JSON.stringify(str)).toString()
  }

  // 获取最后一个块
  public get lastBlock(): BlockData {
    return this.chain[this.chain.length - 1]
  }
}
