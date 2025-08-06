// cartUtils.js

const TAX_RATE = 0.08;
const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_RATE = 0.1;

export function addItem(cart, item) {
  cart.push(item);
}

export function calculateSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function applyBusinessRules(subtotal) {
  const discount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0;
  const tax = (subtotal - discount) * TAX_RATE;
  const total = subtotal - discount + tax;

  return { subtotal, discount, tax, total };
}
