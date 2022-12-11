const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
// const result1 = document.getElementById("result-1");

const price1=document.getElementById('price1')
const subtotal = document.getElementById("subtotal")
const tax = document.getElementById("tax")
const total = document.getElementById("total") 



// const result2 = document.getElementById("result-2");
const tbtn1 = document.getElementById("2btn-1");
const tbtn2 = document.getElementById("2btn-2");
const price2=document.getElementById('price2')


function addProduct(x) {
    let a = document.getElementById(x);
       a = parseFloat(a.innerText);
       a++;
       return a;
}
function minusProduct(y) {
    let b = document.getElementById(y);
       b = parseFloat(b.innerText);
       b--;
       return b;
}

btn1.addEventListener('click',function () {
    // let finalResult = parseFloat(result1.innerText);
    // finalResult --;
    const result1 = document.getElementById("result-1");
    if (minusProduct("result-1") >= 1) {
        result1.innerText = minusProduct("result-1"); 
        price1.innerText = parseFloat(price1.innerText) - 1000;
        subtotal.innerText = parseFloat(price1.innerText) + parseFloat(price2.innerText);
        tax.innerText = (parseFloat(subtotal.innerText)*10)/100;
        total.innerText = parseFloat(subtotal.innerText) + parseFloat(tax.innerText);   

    }
    

})
btn2.addEventListener('click',function () {
    const result1 = document.getElementById("result-1");
    result1.innerText = addProduct("result-1")

    // let finalResult = parseFloat(result1.innerText);
    // finalResult ++;
    // result1.innerText = finalResult;
    price1.innerText = parseFloat(price1.innerText) + 1000;
    subtotal.innerText = parseFloat(price1.innerText) + parseFloat(price2.innerText);
    tax.innerText = (parseFloat(subtotal.innerText)*10)/100;
    total.innerText = parseFloat(subtotal.innerText) + parseFloat(tax.innerText);   
    

})
tbtn1.addEventListener('click',function () {
    // let finalResult = parseFloat(result2.innerText);
    // finalResult --;
    const result2 = document.getElementById("result-2");
    
    if (minusProduct("result-2") >= 1) {
        result2.innerText = minusProduct("result-2");
        price2.innerText = parseFloat(price2.innerText) - 2000;
        subtotal.innerText = parseFloat(price1.innerText) + parseFloat(price2.innerText);
        tax.innerText = (parseFloat(subtotal.innerText)*10)/100;
        total.innerText = parseFloat(subtotal.innerText) + parseFloat(tax.innerText);   
        

         
    }
    
})
tbtn2.addEventListener('click',function () {
    // let finalResult = parseFloat(result2.innerText);
    // finalResult ++;
    // result2.innerText = finalResult;
    const result2 = document.getElementById("result-2");
    result2.innerText = addProduct("result-2")
    price2.innerText = parseFloat(price2.innerText) + 2000;
    subtotal.innerText = parseFloat(price1.innerText) + parseFloat(price2.innerText);
    tax.innerText = (parseFloat(subtotal.innerText)*10)/100;
    total.innerText = parseFloat(subtotal.innerText) + parseFloat(tax.innerText);   


})