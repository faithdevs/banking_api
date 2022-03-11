const db = require("../config/Database");

exports.updateSaldo = (id_account, nominal) => {
  return db("accounts")
    .where("id_account", id_account)
    .update("saldo", nominal);
};
