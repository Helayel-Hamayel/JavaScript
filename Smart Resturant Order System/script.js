
// ========================[Task 1]========================
const menu = [
{ id: 1, name: "Burger", category: "Food", price: 35, available: true},

{ id: 2, name: "Pizza", category: "Food", price: 40, available: true },

{ id: 3, name: "Cola", category: "Drink", price: 10, available: true },

{ id: 4, name: "Soda", category: "Drink", price: 8, available: true },

{ id: 5, name: "Water", category: "Drink", price: 5, available: false },

{ id: 6, name: "Oreo", category: "Desert", price: 5, available: false },

{ id: 7, name: "Cake", category: "Desert", price: 20, available: true },

{ id: 8, name: "Sandwich", category: "Food", price: 12, available: false },

{ id: 9, name: "Olive Bread", category: "Food", price: 12, available: true },

{ id: 10, name: "Salad", category: "Food", price: 30, available: true },

];


const customer = { name: "Ameer", budget: 120, isStudent: true }

const order1 = [1,3,5,11]

// ========================[Task 2]========================
// combined both displayMenu and getAvailableItems into one function

function displayMenu(filter = false){
    let index = 0
    for (let item of menu.filter((item) => item.available || !filter)) {
        index++;
        console.log(`${index} - ${item.name} - ${item.category} - ${item.price} - ${item.available ? "Available" : "Not Available" }`);
    }
}

console.log("\nALL ITEMS:");
displayMenu()

//============================================
function getAvailableItems(){
    console.log("\nALL AVAILABLE ITEMS:");
    
    displayMenu(true)
}

getAvailableItems()
//============================================
// combined both findItemById, getOrderItems AND validateData in one function

function findItemById(lookForTheID, returnData = false, validateOrder = false){
     
    const foundItem = menu.find((item) => item.id === lookForTheID)

    if (foundItem === undefined) {
        console.log(`This item id ${lookForTheID} does not exist.`)
        return
    }

    if (validateOrder) {
        console.log(`The item you are looking for (${foundItem.name}) is: ${foundItem.available ? "Available" : "Not Available" }`)
    }
        
    // If the caller wants the data, return the object
    if (returnData) {
        return foundItem;
    } 

    console.log(
        `The item you are looking for (${foundItem.name}) is: ${foundItem.available ? 
        "Available" : "Not Available" }`);


}

console.log(`\n`)
findItemById(2)
findItemById(6)

// ========================[Task 3]========================
console.log(`\nconverted the ORDER ID to ORDER OBJECT`)
function getOrderItems(OrderList, validateOrder = false, calTotal = false, discount = false){

    let mapped = OrderList.map((item) => 
    item = findItemById(item, true, validateOrder)
    );

    // remove the undefined cells in the array
    mapped = mapped.filter((item) => item !== undefined)

    console.log(mapped);

    const totalOrderPrice = []
    let sum = 0
    if (calTotal) {
        console.log("\nOrderd Item list with their prices:");
        for (let item of mapped) {
            console.log(`${item.name}: ${item.price}`);
            totalOrderPrice.push(item.price)
        }

        sum = totalOrderPrice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
        );

        console.log("\nThe total price of the order is: ",sum);
    }

    let totaldiscountPerc = 0
    if (discount) {
        if (sum > 150)              totaldiscountPerc = 0.20; 
        else if (sum > 100)              totaldiscountPerc = 0.15;
        else if (customer.isStudent)     totaldiscountPerc = 0.10; 
        if (!totaldiscountPerc)     console.log("No discount");
        
        receipt.originalTotal = sum;
        receipt.discountPercentage = totaldiscountPerc;
        receipt.discountAmount = (sum*totaldiscountPerc);
        receipt.finalTotal = (sum-(sum*totaldiscountPerc));
        console.log("The reciept: ",receipt)
    }


}

getOrderItems(order1)

//============================================

console.log(`\nValidated Order list`)
function validateOrder(passOrderList){
    getOrderItems(passOrderList, true)
}

validateOrder(order1)

// ========================[Task 4]========================

function calculateTotal(caltheOrder){
    getOrderItems(caltheOrder, true, true)
}

calculateTotal(order1)

//============================================

const receipt = {}
function applyDiscounts(discountTheOrder){
    getOrderItems(discountTheOrder, true, true, true)
}

applyDiscounts(order1)

//============================================
function canCustomerPay(){
    
}