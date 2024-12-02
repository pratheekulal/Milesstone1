

// // Start CRON job for order status updates
// cron.schedule('*/1 * * * *', orderStatusService.updateOrderStatuses);

const { updateOrderStatus } = require('./services/orderStatusService');

const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());  // For parsing JSON request bodies

// Routes
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

