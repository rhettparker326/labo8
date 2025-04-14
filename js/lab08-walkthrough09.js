// Function to calculate total with tax
function calcTotal(price, taxRate) {
    var total = price * (1 + taxRate);
    return total.toFixed(2); // formats to 2 decimal places
}

// Function to output result to the page
function outputResults(price, taxRate) {
    var total = calcTotal(price, taxRate);
    document.write("<p>Price: $" + price.toFixed(2) + "</p>");
    document.write("<p>Tax Rate: " + (taxRate * 100) + "%</p>");
    document.write("<p>Total Price: $" + total + "</p>");
}
