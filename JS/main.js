const stockProduct = document.querySelector('#stock-product');
const productCategory = document.querySelector('#product-category');
const productName = document.querySelector('#product-name');
const productPrice = document.querySelector('#Product-price');
const productInstock = document.querySelector('#product-instock');
const productDiscount = document.querySelector('#product-discount');
const productId = document.querySelector('#product-id');



stockProduct.addEventListener('click', stockFunction);

let productStocked;

 function stockFunction (pdts) {

     productStocked = {
        Id: productId.value,
        name: productName.value,
        category: productCategory.value,
        qty: productInstock.value,
        price: productPrice.value,
        discount: productDiscount.value
    }

    addToStore()
    
}

let productObj;

function addToStore() {
    isProductAvailable = localStorage.getItem('addToStore');
    if (isProductAvailable !== null){
        productObj = JSON.parse(isProductAvailable)
         productObj.push(productStocked)
         localStorage.setItem('addToStore', JSON.stringify(productObj))
     } else {
         localStorage.setItem('addToStore', JSON.stringify([productStocked]));
     }
    
}




