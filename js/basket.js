const plusCount = document.querySelector(".plusCount");
const minusCount = document.querySelector(".minusCount");
const counter = document.querySelector(".counter");

let count = 1;
counter.value = count;

plusCount.addEventListener("click", () => {
    if (count < 10) {
        count++;
    }
    counter.value = count;
})

minusCount.addEventListener("click", () => {
    if (count > 1) {
        count--;
    }
    counter.value = count;
})


// ///////////////////////



// prodListItem.forEach(items => {
//     const input = items.querySelector('input[type="number"]');
//     const plus = items.querySelector('.plus');
//     const minus = items.querySelector('.minus');
//     var itemTotal = items.querySelector('.item-total p');
//     var DeleteBtn = items.querySelector('.item-delete');
//     const sellPrice = items.querySelector('.sellPrice');
//     const discPrice = items.querySelector('discPrice');


//     let itemTotalfixed = itemTotal.innerText.replace('$', '').trim();
//     let currentQuantity = parseFloat(input.value);
//     let sellPricefixed = sellPrice.innerText.replace('$', '').trim();



//     itemTotal.innerText = '$' + `${(input.value) * parseFloat(sellPricefixed)}`;
//     if (discPrice != null) {
//         let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//         totalPrice += discPricefixed * input.value
//     } else {
//         totalPrice += parseFloat(sellPricefixed) * input.value
//     }
//     subTotal.innerText = '$' + totalPrice;



//     if (discPrice != null) {
//         let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//         disAmount += (discPricefixed - parseFloat(sellPricefixed)) * input.value;

//         discountAmount.innerText = '$' + disAmount;
//     }
//     cartTotal.innerText = '$' + (totalPrice - disAmount);



//     totalItem += parseInt(input.value);
//     cartTotalItem.innerText = totalItem;
//     cartTotalHeadItem.innerText = totalItem;



//     plus.addEventListener('click', () => {
//         var value = parseFloat(input.value);
//         input.value = value + 1;

//         itemTotal.innerText = '$' + `${(value + 1) * parseFloat(sellPricefixed)}`;

//         if (discPrice != null) {
//             let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//             totalPrice += discPricefixed
//         } else {
//             totalPrice += parseFloat(sellPricefixed)
//         }

//         subTotal.innerText = '$' + totalPrice;

//         if (discPrice != null) {
//             let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//             disAmount += (discPricefixed - parseFloat(sellPricefixed));

//             discountAmount.innerText = '$' + disAmount;
//         }
//         cartTotal.innerText = '$' + (totalPrice - disAmount);


//         ++totalItem; 
//         cartTotalItem.innerText = totalItem;
//         cartTotalHeadItem.innerText = totalItem;

//     });



//     minus.addEventListener('click', () => {
//         var value = parseFloat(input.value);
//         if (value > 1) {
//             input.value = value - 1;
//             itemTotal.innerText = '$' + `${(value - 1) * parseFloat(sellPricefixed)}`;

//             if (discPrice != null) {
//                 let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//                 totalPrice -= discPricefixed
//             } else {
//                 totalPrice -= parseFloat(sellPricefixed)
//             }

//             subTotal.innerText = '$' + totalPrice;

//             if (discPrice != null) {
//                 let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//                 disAmount -= (discPricefixed - parseFloat(sellPricefixed));

//                 discountAmount.innerText = '$' + disAmount;
//             }

//             cartTotal.innerText = '$' + (totalPrice - disAmount);


//             --totalItem;
//             cartTotalItem.innerText = totalItem;
//             cartTotalHeadItem.innerText = totalItem;
//         }

//     });



//     DeleteBtn.addEventListener('click', () => {
//         if (discPrice != null) {
//             let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//             totalPrice -= discPricefixed * input.value
//         } else {
//             totalPrice -= parseFloat(sellPricefixed) * input.value
//         }

//         subTotal.innerText = '$' + totalPrice;

//         if (discPrice != null) {
//             let discPricefixed = parseFloat(discPrice.innerText.replace('$', '').trim());
//             disAmount -= (discPricefixed - parseFloat(sellPricefixed)) * input.value;

//             discountAmount.innerText = '$' + disAmount;
//         }

//         cartTotal.innerText = '$' + (totalPrice - disAmount);

//         totalItem -= input.value;
//         cartTotalItem.innerText = totalItem;
//         cartTotalHeadItem.innerText = totalItem;

//         items.remove();
//     });


// });