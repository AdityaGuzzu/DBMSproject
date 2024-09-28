// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 100, stock: 50 },
    { id: 2, name: "Product 2", price: 150, stock: 30 },
    { id: 3, name: "Product 3", price: 200, stock: 20 },
];

// Sample past order data
const orders = [
    { id: 1, productName: "Product 1", quantity: 3, date: "2024-09-15" },
    { id: 2, productName: "Product 2", quantity: 2, date: "2024-09-16" },
    { id: 3, productName: "Product 3", quantity: 5, date: "2024-09-17" },
];

// Function to display inventory
function displayInventory() {
    const inventoryContainer = document.getElementById("inventory-container");
    inventoryContainer.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <span>${product.name} - $${product.price} - Stock: ${product.stock}</span>
            <button onclick="viewProductInfo(${product.id})">View Info</button>
        `;
        inventoryContainer.appendChild(productElement);
    });
}

// Function to view product information
function viewProductInfo(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Product: ${product.name}\nPrice: $${product.price}\nStock: ${product.stock}`);
}

// Function to display order history
function displayOrderHistory() {
    const orderHistoryContainer = document.getElementById("order-history-container");
    orderHistoryContainer.innerHTML = "";

    orders.forEach(order => {
        const orderElement = document.createElement("div");
        orderElement.className = "order";
        orderElement.innerHTML = `
            <span>Product: ${order.productName} | Quantity: ${order.quantity} | Date: ${order.date}</span>
            <button onclick="viewOrderDetails(${order.id})">View Details</button>
        `;
        orderHistoryContainer.appendChild(orderElement);
    });
}

// Function to view order details
function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    alert(`Order Details\nProduct: ${order.productName}\nQuantity: ${order.quantity}\nDate: ${order.date}`);
}


function addProductDetails(){
    window.location.href = "http://127.0.0.1:5500/add_data.html";
}

// Initial display
displayInventory();
displayOrderHistory();
