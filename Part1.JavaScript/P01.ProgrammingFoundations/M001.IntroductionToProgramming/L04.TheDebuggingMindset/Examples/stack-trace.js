// Read the stack trace like a detective.   Run me:  node stack-trace.js
// Questions: Which LINE failed? In which FUNCTION? Called by whom? WHICH value was undefined?

function customerLabel(order) {
  return order.customer.name.toUpperCase();
}

function printInvoice(order) {
  console.log('Invoice for', customerLabel(order));
}

printInvoice({ id: 17, items: ['book'] }); // oops: this order has no customer
