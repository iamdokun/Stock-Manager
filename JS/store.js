let productAvailableInStore = localStorage.getItem('addToStore');
productAvailableInStore = JSON.parse(productAvailableInStore)

console.log(productAvailableInStore);

let productID;
let productNAME;
let productCATEGORY;
let productPRICE;
let productQTY;
let productDISCOUNT;

productAvailableInStore.forEach(product => {
    productID = product.Id;
    productNAME = product.name;
    productCATEGORY = product.category;
    productPRICE = product.price;
    productQTY = product.qty;
    productDISCOUNT = product.discount;

    createStoreTable(productID, productNAME, productCATEGORY, productPRICE, productQTY, productDISCOUNT);
});

function createStoreTable(id, name, category, price, qty, discount) {

    const tableBody = document.querySelector('tbody')
    const tableRow = document.createElement('tr');
    const pdtID = document.createElement('td');
    const pdtName = document.createElement('td');
    const pdtCategory = document.createElement('td');
    const pdtPrice = document.createElement('td');
    const pdtQty = document.createElement('td');
    const pdtDiscount = document.createElement('td');

    pdtID.appendChild(document.createTextNode(id));
    pdtName.appendChild(document.createTextNode(name));
    pdtCategory .appendChild(document.createTextNode(category));
    pdtPrice .appendChild(document.createTextNode(`N${price}`));
    pdtQty .appendChild(document.createTextNode(qty));
    pdtDiscount .appendChild(document.createTextNode(`${discount}%`));

    tableBody.appendChild(tableRow)
    tableRow.appendChild(pdtID);
    tableRow.appendChild(pdtName);
    tableRow.appendChild(pdtCategory);
    tableRow.appendChild(pdtPrice);
    tableRow.appendChild(pdtQty);
    tableRow.appendChild(pdtDiscount);
    
}