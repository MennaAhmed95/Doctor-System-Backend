const CustomError = require("../helpers/customError");
const Product = require("../models/product");
const Order = require("../models/order");
const Branch = require("../models/branch");

require("express-async-errors");

const productAuthorization = async (req, res, next) => {
  const id = req.params.id;
  const {
    user: { id: userId },
  } = req;
  const product = await Product.findById(id);
  if (!product.userId.equals(userId))
    throw CustomError("Not Authrized", 403, "you are not Authrized to do this");
  next();
};
const orderAuthorization = async (req, res, next) => {
  const id = req.params.id;
  const {
    user: { id: userId },
  } = req;
  const order = await Order.findById(id);
  if (!order.userId.equals(userId))
    throw CustomError("Not Authrized", 403, "you are not Authrized to do this");
  next();
};

module.exports = {
  productAuthorization,
  orderAuthorization,
};
