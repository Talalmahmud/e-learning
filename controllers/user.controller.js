const prisma = require("../db/prisma");

const userRegister = async (req, res, next) => {
  const r = req.body;
  console.log(r);
  res.status(200).json({
    success: true,
  });
};

module.exports = { userRegister };
