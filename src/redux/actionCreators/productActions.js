const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actionTypes/actionTypes");

exports.addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
exports.removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
