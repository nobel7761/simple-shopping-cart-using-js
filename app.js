function product() {

}

document.getElementById('mobile-plus').addEventListener('click', () => {
    const mobileInput = document.getElementById('mobile-input');
    const mobileQuantity = parseInt(mobileInput.value) + 1 //increasing mobile quantity
    mobileInput.value = mobileQuantity; //updating mobile quantity!!!

    const mobilePrice = document.getElementById('mobile-price');
    mobilePrice.innerText = 1219 * mobileQuantity; //updating total mobile price

    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(subtotal.innerText) + 1219; //updating subtotal

    const tax = document.getElementById('tax');
    tax.innerText = parseInt(subtotal.innerText) / 10;

    const total = document.getElementById('total');
    total.innerText = parseInt(subtotal.innerText) + parseFloat(tax.innerText);


})

document.getElementById('mobile-minus').addEventListener('click', () => {
    const mobileInput = document.getElementById('mobile-input');
    if (parseInt(mobileInput.value) > 0) {
        const mobileQuantity = parseInt(mobileInput.value) - 1 //increasing mobile quantity
        mobileInput.value = mobileQuantity; //updating mobile quantity!!!

        const mobilePrice = document.getElementById('mobile-price');
        mobilePrice.innerText = 1219 * mobileQuantity; //updating total mobile price

        const subtotal = document.getElementById('subtotal');
        subtotal.innerText = parseInt(subtotal.innerText) - 1219; //updating subtotal

        const tax = document.getElementById('tax');
        tax.innerText = parseInt(subtotal.innerText) / 10;

        const total = document.getElementById('total');
        total.innerText = parseInt(subtotal.innerText) + parseFloat(tax.innerText);
    }

})

document.getElementById('case-minus').addEventListener('click', () => {
    const caseInput = document.getElementById('case-input');
    if (parseInt(caseInput.value) > 0) {
        const caseQuantity = parseInt(caseInput.value) - 1 //increasing mobile quantity
        caseInput.value = caseQuantity; //updating mobile quantity!!!

        const casePrice = document.getElementById('case-price');
        casePrice.innerText = 59 * caseQuantity; //updating total mobile price
        const subtotal = document.getElementById('subtotal');
        subtotal.innerText = parseInt(subtotal.innerText) - 59; //updating subtotal

        const tax = document.getElementById('tax');
        tax.innerText = parseInt(subtotal.innerText) / 10;

        const total = document.getElementById('total');
        total.innerText = parseInt(subtotal.innerText) + parseFloat(tax.innerText);
    }




})



document.getElementById('case-plus').addEventListener('click', () => {
    const caseInput = document.getElementById('case-input');
    const caseQuantity = parseInt(caseInput.value) + 1 //increasing mobile quantity
    caseInput.value = caseQuantity; //updating mobile quantity!!!

    const casePrice = document.getElementById('case-price');
    casePrice.innerText = 59 * caseQuantity; //updating total mobile price

    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(subtotal.innerText) + 59; //updating subtotal

    const tax = document.getElementById('tax');
    tax.innerText = parseInt(subtotal.innerText) / 10;

    const total = document.getElementById('total');
    total.innerText = parseInt(subtotal.innerText) + parseFloat(tax.innerText);


})




/* function updateSubTotal(price) {
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(subtotal.innerText) + parseInt(price);
    console.log(typeof subtotal.innerText)
} */
