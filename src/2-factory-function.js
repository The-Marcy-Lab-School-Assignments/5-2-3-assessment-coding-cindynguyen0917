const bankAccountFactory = (balance) => ({
  checkBalance: function () {
    if (!balance) {
      return 0
    } else
      return Number(balance)
  },
  add: function (amount) {
    balance += amount
    console.log(`$${amount} added.`)
  },
  subtract: function (amount) {
    balance -= amount
    console.log(`$${amount} subtracted.`)
  }

});

module.exports = {
  bankAccountFactory,
};
