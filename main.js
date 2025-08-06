// main.js

import { addItem, calculateSubtotal, applyBusinessRules } from './cartUtils.js';

function main() {
  const cart = [];

  // Step 1: Add items to cart
  addItem(cart, { name: 'Phone', price: 499, quantity: 1 });
  addItem(cart, { name: 'Charger', price: 25, quantity: 2 });

  // Step 2: Calculate subtotal
  const subtotal = calculateSubtotal(cart);

  // Step 3: Apply business rules (discount, tax)
  const { discount, tax, total } = applyBusinessRules(subtotal);

  // Step 4: Output results
  console.log('--- Invoice Summary ---');
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Discount: $${discount.toFixed(2)}`);
  console.log(`Tax: $${tax.toFixed(2)}`);
  console.log(`Total: $${total.toFixed(2)}`);
}

// Run the main function
main();
