const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

var valueMd = 0;
var divider = 0;
var credit = 0;
var debit = 0;
function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type === "credit") {
    user.balance += transaction.value;
  } else {
    user.balance -= transaction.value;
  }

  divider = user.transactions.length;
}

function getHigherTransactionByType(type) {
  for (transaction of user.transactions) {
    if (transaction["type"] === type) {
      console.log(transaction);
    }
  }
}

function getAverageTransactionValue() {
  for (transaction of user.transactions) {
    valueMd += transaction.value;
  }
  var result = valueMd / divider;

  console.log(result);
}

function getTransactionsCount() {
  for (transaction of user.transactions) {
    if (transaction.type === "credit") {
      credit++;
    } else {
      debit++;
    }
  }
  console.log(`credito: ${credit}, debito: ${debit}`);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(`balance: ${user.balance}`); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount();
