function reload() {
    window.location.reload();
}


let cartItemStorage = localStorage.getItem('cartItemsStorage');


if (cartItemStorage != null) {
    cartItemsArr = JSON.parse(cartItemStorage);
}

let netTotal = 0;


let table2 = document.querySelector('.table-2');
// console.log(table2);
let items = document.querySelector('.items');



if (cartItemsArr.length > 3) {

    items.style.paddingBottom = JSON.stringify(cartItemsArr.length * 84) + "px";
}

displayItems();

function displayItems() {
    let string = '';
    netTotal = 0;

    for (let i = 0; i < cartItemsArr.length; i++) {

        if (cartItemsArr[i].quantity == 0) {
            continue;
        }

        string += `<tr>
            <td width="300px">
                <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="">
            </td>
    
            <td width="409px" style="text-align: left;">${cartItemsArr[i].name}</td>
            <td width="280px">${cartItemsArr[i].price}</td>
            <td width="340px">${cartItemsArr[i].quantity}</td>
            <td width="380px">${cartItemsArr[i].total}$ <a class="crossBtn"><i class="icon fas fa-times" id=${i}></i></a></td>
        </tr>`;

        netTotal += cartItemsArr[i].total;
    }


    let netTotalHtml = document.querySelector('.netTotal');
    table2.innerHTML = string;
    netTotalHtml.textContent = netTotal;

}




let iconNode = document.querySelectorAll('.icon');
let iconBtnArr = Array.from(iconNode);

function iconBtnSelection() {
    iconNode = document.querySelectorAll('.icon');
    iconBtnArr = Array.from(iconNode);
}

let flag = 0;

table2.addEventListener('click', (e) => {

    flag = 0;



    if (e.target.hasAttribute("class") && e.target.classList.contains("icon")) {
        let id = e.target.getAttribute("id");
        if (cartItemsArr[id].quantity > 0) {
            cartItemsArr[id].quantity -= 1;

            if (cartItemsArr[id].quantity == 0) {
                cartItemsArr.splice(id, 1);
                displayItems();
                localStorage.setItem('cartItemsStorage', JSON.stringify(cartItemsArr));
                iconBtnSelection();
                flag = 1;
            }

            if (flag != 1) {
                // console.log(cartItemsArr);
                cartItemsArr[id].total -= cartItemsArr[id].price;
                localStorage.setItem('cartItemsStorage', JSON.stringify(cartItemsArr));
                displayItems();
                iconBtnSelection();

            }


        }
    }


})


// for (let i = 0; i < iconBtnArr.length; i++) {

//     iconBtnArr[i].addEventListener('click', () => {

//         console.log(iconBtnArr[i]);

//         let id = iconBtnArr[i].getAttribute("id");

//         console.log(cartItemsArr[id].quantity);

//         if (cartItemsArr[id].quantity > 0) {
//             cartItemsArr[id].quantity -= 1;

//             if (cartItemsArr[id].quantity == 0) {
//                 cartItemsArr.splice(id, 1);
//                 displayItems();
//                 iconBtnSelection();
//                 localStorage.setItem('cartItemsStorage', JSON.stringify(cartItemsArr));
//             }

//             console.log(cartItemsArr);
//             cartItemsArr[id].total -= cartItemsArr[id].price;
//             localStorage.setItem('cartItemsStorage', JSON.stringify(cartItemsArr));
//             displayItems();
//             iconBtnSelection();

//         }

//         if (cartItemsArr[id].quantity == 0) {
//             cartItemsArr.splice(id, 1);
//             localStorage.setItem('cartItemsStorage', JSON.stringify(cartItemsArr));
//             displayItems();
//         }
//     })

// }