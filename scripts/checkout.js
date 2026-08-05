import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js';

//promises are a better alternative to callbacks as they allow for less nesting (both let you run async code)

//promise.all lets you run multiple promises and wait for all to finish
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    })


]).then((values) =>{
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});




/*
new Promise((resolve) =>{ // resolve function that controls when to move to next step
    loadProducts(() =>{
        resolve('value1');//after loadProducts is loaded, resolve() allowes it to move onto the next step, then()
    });//promises allow for threading(?)

}).then((value) =>{//calls the rest of the code
    return new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
})*/


/*
loadProducts(() =>{
    loadCart(() =>{
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
    });
});*/

