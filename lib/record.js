class Record {
  constructor(amount, type, balance) {
    this.amount = amount
    this.type = type
    this.timestamp = new Date()
    this.balance = balance
  }
}

module.exports = Record;
