const db = {};

function getData(accountNumber) {
  return db[accountNumber];
}

function getAll() {
  return Object.values(db);
}

function writeData(data) {
  db[data.accountNumber] = data;
}

export { writeData, getAll, getData };
