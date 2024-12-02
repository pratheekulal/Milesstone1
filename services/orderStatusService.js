

const menuItems = require('../models/menu');
const orders = require('../models/order');

// This could be a cron job, but for simplicity, we log it here
function updateOrderStatus() {
  console.log('Checking order statuses...');
  orders.forEach((order) => {
    if (order.status === 'Preparing') {
      console.log(`Order ${order.id} is now Out for Delivery`);
      order.status = 'Out for Delivery';
    } else if (order.status === 'Out for Delivery') {
      console.log(`Order ${order.id} has been Delivered`);
      order.status = 'Delivered';
    }
  });
}



// Simulate a cron job by calling this function periodically
setInterval(updateOrderStatus, 5000);  // Update status every 5 seconds for example
