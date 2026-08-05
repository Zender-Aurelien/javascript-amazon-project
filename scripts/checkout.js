import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js';

//promises are a better alternative to callbacks as they allow for less nesting (both let you run async code)

//promise.all lets you run multiple promises and wait for all to finish

//async await is a shortcut for promises
//async keyword makes a function return a promise
//await waits for a promise to finish before going to next line
async function loadPage(){
    await loadProductsFetch(); //await basically replaces .then()
    //closest function has to be async, so await cannot be nested in a regular function that is nested inside an async
    const value = await new Promise((resolve) =>{
        loadCart(() =>{
            resolve('value3'); //saves resolve value to variable
        });
    })

    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();

    // returns convert to resolve(value)
    //await can ONLY be used inside an async function
}
loadPage();

/*
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
}); */




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

