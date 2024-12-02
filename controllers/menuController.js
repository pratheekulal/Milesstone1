

const menuItems = require('../models/menu');

// Add menu item
exports.addMenuItem = (req, res) => {
  const { name, price, category } = req.body;

  // Validation
  if (!name || typeof name !== 'string') {
    console.log('Invalid name');
    return res.status(400).json({ message: 'Invalid name' });
  }
  if (price <= 0 || typeof price !== 'number') {
    console.log('Invalid price');
    return res.status(400).json({ message: 'Invalid price' });
  }
  if (!['Starter', 'Main Course', 'Dessert'].includes(category)) {
    console.log('Invalid category');
    return res.status(400).json({ message: 'Invalid category' });
  }

  // Add menu item to the array
  const newItem = {
    id: menuItems.length + 1,
    name,
    price,
    category,
  };
  menuItems.push(newItem);

  // Log success message in the terminal
  console.log('Menu item added:', newItem);
  return res.status(201).json({ message: 'Menu item added successfully', item: newItem });
};

// Get menu
exports.getMenu = (req, res) => {
  console.log('Fetching menu items');
  res.status(200).json(menuItems);
};

