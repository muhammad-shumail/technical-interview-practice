
function checkAccountWithdrawal(withdrawalAmount) {
  let accountName = `Ben Stokes`;
  let availableAccountAmount = 5000;

  function encapsulationFunc() {
    if (availableAccountAmount >= withdrawalAmount) {
      console.log(`${accountName} debited amount successfully. ${withdrawalAmount} remaining balance is ${availableAccountAmount - withdrawalAmount}`);
    } else {
      console.log(`The amount is not sufficient to proceed with this transaction.`);
    }
  }

  return encapsulationFunc;  // Return the function without invoking it
}

checkAccountWithdrawal(4000)()
checkAccountWithdrawal(100)()

const person1 = checkAccountWithdrawal(3000)
person1()


