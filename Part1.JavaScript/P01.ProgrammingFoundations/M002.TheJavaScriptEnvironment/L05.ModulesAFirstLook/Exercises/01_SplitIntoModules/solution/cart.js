export default function createCart() {
  return { items: [] };
}

export function addItem(cart, item) {
  // New object and new array: the caller's cart is never touched.
  return { ...cart, items: [...cart.items, item] };
}

export function cartTotal(cart) {
  let total = 0;
  for (const item of cart.items) total += item.price * item.quantity;
  return total;
}
