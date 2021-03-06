const accountModel = require("../models/AccountModel");

const checkStatus = async (req, res, next) => {
  if (req.cookies["x-wallet-token"]) {
    const checkIdAccount = await accountModel.accountInfoWithKey(
      req.cookies["x-wallet-token"]
    );
    if (checkIdAccount.length > 0) {
      if (checkIdAccount[0].status == 1) {
        next();
        return;
      } else {
        res.status(400).json({
          status: false,
          msg: "Your account is not activated, please activated your account.",
        });
      }
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
};

module.exports = checkStatus;
