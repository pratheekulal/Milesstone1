


const menuItems = require('../models/menu');
const orders = [];

// Place an order
exports.placeOrder = (req, res) => {
  const { items } = req.body;

  // Validate if all item IDs exist in the menu
  const isValid = items.every((id) => menuItems.some((item) => item.id === id));

  if (!isValid) {
    console.log('Invalid order items:', items);
    return res.status(400).json({ message: 'Invalid order items.' });
  }

  // Create a new order
  const newOrder = {
    id: orders.length + 1,
    items,
    status: 'Preparing',
  };

  orders.push(newOrder);

  // Log order creation in the terminal
  console.log('Order placed successfully:', newOrder);
  res.status(201).json({ message: 'Order placed successfully.', order: newOrder });
};

// Get order by ID
exports.getOrder = (req, res) => {
  const { id } = req.params;
  const order = orders.find((order) => order.id === parseInt(id));

  if (!order) {
    console.log('Order not found:', id);
    return res.status(404).json({ message: 'Order not found' });
  }

  console.log('Fetching order details:', order);
  res.status(200).json(order);
};

