function AccountConstructor(accName, Balance = 0, bankName = "SBI") {
  this.accName = accName;
  this.balance = Balance;
  this.accNumber = Date.now();
  this.bankName = bankName;
  this.deposit = (amount) => {
    this.balance += amount;
    return this.balance;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
    return this.balance;
  };
}

const acc1 = new AccountConstructor("Abdulla", 500);
const acc2 = new AccountConstructor("Fatima", 500);

console.log(acc2.deposit(2000));
console.log(acc2.accNumber);
