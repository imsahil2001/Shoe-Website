let navbar = document.querySelector('.navbar_on_scroll');


function cartItems(price, name, quantity) {
    this.price = price;
    this.name = name;
    this.quantity = 1;
    this.total = this.price * this.quantity;
}

let cartItemsArr = [];

function cartLocalStr() {

    localStorage.setItem('cartItemsStorage', JSON.stringify(cartItemsArr));
}


window.onscroll = function() { scrollfcn() };

function scrollfcn() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // navbar.style.top = "0px";
    } else {
        navbar.style.top = "-100px";
    }
}


let menCard = document.getElementsByClassName('men_card');
// console.log(menCard);




for (let i = 0; i < menCard.length; i++) {

    let menCard_price = menCard[i].getElementsByTagName('p')[0];
    let menCard_img = menCard[i].querySelector('.image');
    let menCard_btn = menCard[i].getElementsByTagName('button')[0];

    console.log(`this is mencard image ${menCard_img}`);

    menCard[i].addEventListener('mouseover', () => {
        menCard_price.style.opacity = "1";
        // menCard_price.style.bottom = "40px";
        menCard_price.style.paddingBottom = "80px";
        menCard_btn.style.bottom = "22px";
        // menCard_img.style.filter = "brightness(60%)";
    });

    menCard[i].addEventListener('mouseout', () => {
        menCard_price.style.bottom = "0px";
        menCard_price.style.paddingBottom = "10px";
        menCard_btn.style.bottom = "-47px";
        // menCard_img.style.filter = "brightness(100%)";
    });
}


let card = document.querySelectorAll('.card');
// console.log(card);

// console.log(card.length);


window.addEventListener('mouseover', (e) => {
    // if (e.target == card) {
    // console.log(e.target);

})


for (let i = 0; i < card.length; i++) {

    let cardContent = card[i].querySelector('.content');
    // console.log(card);
    // console.log(cardContent);?
    let cardBtn = cardContent.getElementsByTagName('button')[0];
    // console.log(cardBtn);

    card[i].addEventListener('mouseover', () => {
        cardContent.style.top = "260px";
        cardBtn.style.top = "90px";

    });

    card[i].addEventListener('mouseout', () => {
        cardContent.style.top = "290px";
        cardBtn.style.top = "130px";
    });

}



for (let i = 0; i < menCard.length; i++) {

    let menCard_name = menCard[i].querySelector('.name').textContent;
    let menCard_price = parseInt(menCard[i].querySelector('.price').getElementsByTagName('span')[0].textContent);
    let menCard_img = menCard[i].querySelector('.image');
    let menCard_btn = menCard[i].getElementsByTagName('button')[0];

    // console.log(`this is mencard image ${menCard_name}`);

    menCard[i].addEventListener('click', () => {

        let cartItem = new cartItems(menCard_price, menCard_name);

        let i = 0;

        let flag = 1;

        for (i = 0; i < cartItemsArr.length; i++) {
            if (cartItemsArr[i].name == cartItem.name) {
                cartItemsArr[i].quantity++;
                cartItemsArr[i].total = cartItemsArr[i].quantity * cartItemsArr[i].price;
                flag = 0;
            }
        }


        if (flag == 1) {
            cartItemsArr.push(cartItem);
        }
        // console.log(cartItemsArr);

        cartLocalStr();
    })

}


console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');



loginBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            signupBtn.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});


signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            loginBtn.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});


let popupcard = document.querySelector('.popupcard');
let icon = popupcard.querySelector('.icon');
let btn = document.querySelector('.btn');
let body = document.querySelector('.body');
let form = document.querySelector('.form-structor');
let addToCartBtn = document.querySelectorAll('.addToCart');
console.log(addToCartBtn);

body.style.transition = "all .3s";


let button = document.querySelectorAll('.btn');
let btnarr = Array.from(button);


for (let i = 0; i < btnarr.length; i++) {
    btnarr[i].addEventListener('click', poppupDisplay);
}


function poppupDisplay() {
    popupcard.classList.toggle('active');
    body.classList.toggle('change');
}

window.onclick = function(e) {



    if (e.target == body) {
        popupcard.classList.remove('active');
        body.classList.remove('change');
    }
}

let poppupCart = document.querySelector('.popupCart');




// addToCartBtn.addEventListener('click', () => {
//     console.log('hello');
//     reload();
// })