const stockProduct = document.querySelector('#stock-product');
const productCategory = document.querySelector('#product-category');
const productName = document.querySelector('#product-name');
const productPrice = document.querySelector('#Product-price');
const productInstock = document.querySelector('#product-instock');
const productDiscount = document.querySelector('#product-discount');
const productId = document.querySelector('#product-id');

stockProduct.addEventListener('click', stockFunction);

 function stockFunction (pdts) {
    pdts.preventDefault();

    let productStocked = {
        Id: productId.value,
        name: productName.value,
        category: productCategory.value,
        qty: productInstock.value,
        price: productPrice.value,
        discount: productDiscount.value
    }

    // return productStocked;
    console.log(productStocked);

    
    function (pdt) {
        
        if (localStorage.getItem('productStocked') === null) {
            productStocked = [];
        } else {
            productStocked = JSON.parse(localStorage.getItem('productStocked'));
        }
        productStocked.push(pdt);
    }

    localStorage.setItem('productStocked', JSON.stringify(productStocked))


    
}

