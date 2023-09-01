
import * as db from "../db/db.js";


const generateAccountNumber = () => {
  const randomAccounts = Math.floor(Math.random() * 9000000000) + 1000000000;
  return `${randomAccounts}`;
};

const createAccount = (req, res) => {
  const { name, dob, accountType, initialBalance } = req.body;

  if (!name || !dob || !accountType ||
    (initialBalance === undefined) || (initialBalance < 0))
  {
    return res.status(400).json({ error: "Invalid input data" });
  }

  var newAccountNumber;
  do{
    newAccountNumber = generateAccountNumber();
  }while(db.getData(newAccountNumber));

  const newAccount = {
    accountNumber: newAccountNumber,
    name,
    dob,
    accountType,
    balance: initialBalance,
  };

  db.writeData(newAccount);

  res.status(201).json(newAccount);
};

const resolveAccount = (req, res) => {
  const accountNumber = req.params.accountNumber;
  if (!accountNumber) {
    return res.status(400).json({ error: "Missing accountNumber" });
  }

  const account = db.getData(accountNumber);
  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }

  res.json(account);
};

const fetchAllAccounts = (req, res) => {
  const data = db.getAll();
  let response = {size: data.length, data};
  res.json(response);
};

export { createAccount, resolveAccount, fetchAllAccounts };
