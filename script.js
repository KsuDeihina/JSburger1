const timer = document.querySelector('.header__timer-extra')
timer.innerHTML = 0

function time(){
    if(timer.innerHTML <= 50){
        time50()
    } else if(timer.innerHTML >= 50 && timer.innerHTML < 80){
        time80()
    } else if (timer.innerHTML >= 80 && timer.innerHTML < 100){
        time100()

    }
}
time()

function time50(){
    timer.innerHTML++
    setTimeout(() => time(), 100)
}

function time80(){
    timer.innerHTML++
    setTimeout(() => time(), 250)
}

function time100(){
    timer.innerHTML++
    setTimeout(() => time(), 500)
}

const addCartBtn =  document.querySelector('.addCart'),
BtnCart = document.querySelector('.receipt__window-btn'),
productBtns = document.querySelectorAll('.main__product-btn'),
productAmount = document.querySelectorAll('.main__product-num'),
checkList = document.querySelector('.receipt'),
check = document.querySelector('.receipt__window-out'),
overBasket = document.querySelector('.receipt__window-totalPrice')




const product = {
    plainBurger: {
      name: 'plainBurger',
      price: 10000,
      amount: 0,
      img: 'images/product2.jpg',
      call: 280,
      add: 0,
      get totalCall(){
        return this.call * this.amount
      },
      get totalAdd(){
        return this.add * this.amount
      },
      get totalSum(){
        return this.price * this.amount
    }},

    freshBurger: {
      name: 'freshBurger',
      price: 20500,
      amount: 0,
      img: 'images/product1.jpg',
      call: 280,
      add: 0,
      get totalCall(){
        return this.call * this.amount
      },
      get totalAdd(){
        return this.add * this.amount
      },
      get totalSum(){
        return this.price * this.amount
    }},

    freshCombo:{
      name: 'freshCombo',
      price: 31900,
      amount: 0,
      img: 'images/product3.jpg',
      call: 280,
      add: 0,
      get totalCall(){
        return this.call * this.amount
      },
      get totalAdd(){
        return this.add * this.amount
      },
      get totalSum(){
        return this.price * this.amount
    }} 
}

addCartBtn.addEventListener('click', function () {
    checkList.classList.add('active');
    checkList.style = `display: block;
    opacity: 3;`
    })

BtnCart.addEventListener('click', function () {
    checkList.classList.remove('active');
    location.reload()
    })

    
window.addEventListener('click', (e) => {       
    if(e.target.classList.contains('main__product-btn')){
        const attr = e.target.getAttribute('data-symbol')
        const parent = e.target.closest('.main__product')           
        if (parent){
             const idParent = parent.getAttribute('id')
             if(attr == '-' && product[idParent].amount > 0) product[idParent].amount--
             else if(attr == '+') product[idParent].amount++
            basket()
        }           
    }       
})





window.addEventListener('click', (e) => {       
    if(e.target.classList.contains('main__product-checkbox')){
        const attr = e.target.getAttribute('data-extra')
        const parent = e.target.closest('.main__product')           
        if (parent){
                const idParent = parent.getAttribute('id')
                if(attr == 'doubleMayonnaise') product[idParent].add = product[idParent].add + 1000 
                else if(attr == 'lettuce') product[idParent].add = product[idParent].add + 2000
                else if(attr == 'cheese') product[idParent].add = product[idParent].add + 3000 
                basket()
        }           
    }         
})





function basket() {
    const productArray = []
     for (const key in product) {
        const productObj = product[key]
        const productCard = document.querySelector(`#${productObj.name}`),
        countIndecator = productCard.querySelector('.main__product-num'),
        countPrice = productCard.querySelector('.main__product-price span'),
        countCall = productCard.querySelector('.main__product-call span')       
         if(productObj.amount && productObj.amount > 0){
            productArray.push(productObj)
            countIndecator.innerHTML = productObj.amount
            countPrice.innerHTML = productObj.totalSum + productObj.totalAdd
            countCall.innerHTML = productObj.totalCall
            
        } else {
            countIndecator.innerHTML = 0
            countPrice.innerHTML = 0 
            countCall.innerHTML = 0                          
        }
        console.log(productObj.totalAdd);

     }
     check.innerHTML = ''

     productArray.forEach(obj => {
        check.innerHTML += addCardItem(obj)
    })
    overBasket.innerHTML = `${totalPriceProduct()} сум`
    
}

function addCardItem(data) {
    const {name, price, img, amount} = data
    return `
            
<div class="receipt__window-product">
<img src=${img} alt="" class="receipt__window-img receipt__window-img-mini">
<div class="receipt__window-info">
    <p class="receipt__window-name">${name}</p>
    <span class="receipt__window-amount">${amount}</span>
    <p class="receipt__window-price">${price}</p>                       
</div>
</div>
 `
}

function totalPriceProduct() {
    let total = 0
    for(const key in product){
        total += product[key].totalSum
    }
    return total
}

