// ========================[Smart Resturant Order System]========================
const menu = [
  { id: 1, name: "Burger", category: "Food", price: 35, available: true },
  { id: 2, name: "Pizza", category: "Food", price: 40, available: true },
  { id: 3, name: "Cola", category: "Drink", price: 10, available: true },
  { id: 4, name: "Soda", category: "Drink", price: 8, available: true },
  { id: 5, name: "Water", category: "Drink", price: 5, available: false },
  { id: 6, name: "Oreo", category: "Dessert", price: 5, available: false },
  { id: 7, name: "Cake", category: "Dessert", price: 20, available: true },
  { id: 8, name: "Sandwich", category: "Food", price: 12, available: false },
  { id: 9, name: "Olive Bread", category: "Food", price: 12, available: true },
  { id: 10, name: "Salad", category: "Food", price: 30, available: true },
];

const customer = {
  name: "Ameer",
  budget: 120,
  isStudent: true,
};

const order1 = [1, 3, 5, 11];

// Task B3
const order = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
  { id: 5, quantity: 1 },
  { id: 11, quantity: 2 },
];

// Task B4
let orderStatus = "Pending";

// ========================[Task 2: Menu & Lookups]========================

function displayMenu(onlyAvailable = false) {
  let displayIndex = 1;
  for (let item of menu) {
    if (onlyAvailable && !item.available) continue;

    console.log(
      `${displayIndex++} - ${item.name} - ${item.category} - ${item.price} NIS - ${item.available ? "Available" : "Not Available"}`,
    );
  }
}

function findItemById(lookForTheID) {
  return menu.find((item) => item.id === lookForTheID.id);
}

// combined getOrderItems and validateOrder()
function validateAndGetOrderItems(orderList) {
  console.log(`\n--- Validating Order List ---`);

  return orderList
    .map((id) => {
      const item = findItemById(id);
      if (!item) {
        console.log(`❌ Error: Item ID ${id.id} does not exist in our menu.`);
        return undefined;
      }
      console.log(
        `Checking (${item.name}): ${item.available ? "✅ Available" : "⚠️ Out of Stock"}`,
      );
      item.quantity = id.quantity;

      return item;
    })
    .filter((item) => item !== undefined) // Prevents "undefined" leakage into our array
    .filter((item) => item.available); // Remove any unavaiable items.
}

function calculateTotal(orderItems) {
  orderItems.forEach((item) =>
    console.log(
      `- ${item.name} X${item.quantity} : ${item.price * item.quantity} NIS`,
    ),
  );

  const total = orderItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );
  console.log(`Total: ${total} NIS`);
  return total;
}

function applyDiscounts(sum, isStudent) {
  console.log("\n--- Applying Discounts ---");
  let discountPerc = 0;

  if (sum > 150) discountPerc = 0.2;
  else if (sum > 100) discountPerc = 0.15;
  else if (isStudent) discountPerc = 0.1;

  if (discountPerc === 0) console.log("No discount rules applied.");

  const discountAmount = sum * discountPerc;

  return {
    originalTotal: sum,
    discountPercentage: `${discountPerc * 100}%`, // convert fractions to full
    discountAmount: discountAmount,
    finalTotal: sum - discountAmount,
  };
}

function canCustomerPay(customerBudget, finalTotal) {
  console.log(`\n--- Checkout Verification ---`);
  console.log(`Customer Budget: ${customerBudget} NIS`);
  console.log(`Final Order Cost: ${finalTotal} NIS`);

  if (customerBudget >= finalTotal) {
    console.log(
      `✅ Transaction Approved! Remaining balance: ${customerBudget - finalTotal} NIS.`,
    );
    return true;
  } else {
    console.log(
      `❌ Transaction Denied. Short by ${finalTotal - customerBudget} NIS.`,
    );
    return false;
  }
}

function printReceipt(orderItems, finalReceipt) {
  console.log(`\n========== RECEIPT ==========`);
  console.log(`Restaurant: JavaScript Burger House`);
  console.log(`Customer: ${customer.name}`);
  console.log(`\nItems: `);
  calculateTotal(orderItems);

  console.log(`\nDiscount: ${finalReceipt.discountPercentage}`);
  console.log(`Discount Amount: ${finalReceipt.discountAmount} NIS`);
  console.log(`Final Total: ${finalReceipt.finalTotal} NIS`);

  console.log(`\nCustomer budget: ${customer.budget}`);

  if (customer.budget >= finalReceipt.finalTotal) {
    orderStatus = "paid";
    console.log(`Payment Status: Paid Successfully`);
  } else {
    orderStatus = "Rejected";
    console.log(`Payment Status: Rejected, Not Enough Money`);
  }

  console.log(`\n=============================`);
}

// ========================[ Main Program Flow ]========================

console.log("ALL ITEMS:");
displayMenu();

console.log("\nALL AVAILABLE ITEMS:");
displayMenu(true);

const verifiedItems = validateAndGetOrderItems(order);

const isEmpty = (obj) => verifiedItems.keys(obj).length === 0;
if (isEmpty === false) {
  orderStatus = "Rejected";
  console.log("The order is invalid.");
}

if (orderStatus == "Pending") {
  console.log("\n--- Order Pricing Summary ---");
  const rawTotal = calculateTotal(verifiedItems);

  const finalReceipt = applyDiscounts(rawTotal, customer.isStudent);
  console.log("Generated Receipt: ", finalReceipt);

  canCustomerPay(customer.budget, finalReceipt.finalTotal);

  printReceipt(verifiedItems, finalReceipt);
}

// ========================[ BONUS CHALLENGES ]========================

// Task B1
function countItemsByCategory() {
  const catItemCount = menu.reduce((totals, item) => {
    if (!totals[item.category]) {
      totals[item.category] = 0;
    }

    totals[item.category] += 1;

    return totals;
  }, {});

  console.log(catItemCount);
}

countItemsByCategory();

// Task B2
function getMostExpensiveItem() {
  let mostExpItem = null;
  let expPrice = 0;

  //verifiedItems
  for (let item of verifiedItems) {
    if (item.price > expPrice) {
      mostExpItem = item.name;
      expPrice = item.price;
    }
  }
  console.log(`Most expensive item: ${mostExpItem} - ${expPrice} NIS`);
}

getMostExpensiveItem();
