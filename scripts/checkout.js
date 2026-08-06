import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
// import '../data/backend-practice.js';

//promises are a better alternative to callbacks as they allow for less nesting (both let you run async code)

//promise.all lets you run multiple promises and wait for all to finish

//async await is a shortcut for promises
//async keyword makes a function return a promise
//await waits for a promise to finish before going to next line

//try catch works with synchronous code too


async function loadPage(){
    try{
        //throw 'error1'; 

        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ]) //await basically replaces .then()
    //closest function has to be async, so await cannot be nested in a regular function that is nested inside an async
        // const value = await new Promise((resolve,reject) =>{
        //     // throw 'error2';
        //     loadCart(() =>{
        //         // reject('error3'); //reject creates error in the future(asynchronously)
        //         // resolve('value3'); //saves resolve value to variable
        //     });
        // })
    } catch(error){
        console.log('Unexpected error. Please try again later.');
    }
    

    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();

    // returns convert to resolve(value)
    //await can ONLY be used inside an async function
}
loadPage();


// await Promise.all([
//     loadProductsFetch(),
//     loadCartFetch()
// ]).then((values) =>{
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// })

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

