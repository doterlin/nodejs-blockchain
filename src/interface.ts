export interface Transaction {
  sender: string,
  recipient: string,
  amount: number
}

export interface BlockData {
  "index": number,
  "timestamp": number,
  "transactions": Array<Transaction>,
  "proof": Number,
  "previousHash": String
}
