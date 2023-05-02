


function getCars() {

    let card_list = JSON.parse(localStorage.getItem('cards'));

    let x = '';
    card_list.forEach(item => {
        x += `
               
            <div class="col-lg-4" >
              <div class="card" id = "${item.Id}">
                <img src="${item.Src}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.Title}</h5>
                    <p> Price : ${item.Price} </p>
                    <p class="cart-count">  Count : ${item.Count} </p>
                    <div class="bottomdiv">
                  
                </div>
                <div class="allbtn" >
                <div class="calc" >
                <i class="fa-solid fa-minus fa-2xs minus-button" id="minuscount" style="color: #337eff;"></i>
                <input  type="number" value="${item.Count}" minvalue="1">
             </div>
             <div class="plas" >
                <i class="fa-solid fa-plus fa-2xs plus-button" id = "pluscount" style="color: #337eff;"></i>
    
             </div>
                </div>
            
                    
                    <a  href="#" class="dlt-cart btn btn-danger">Delete</a>
                </div>
            </div>
           </div>
            `





    });
    document.querySelector('#rowlist').innerHTML = x;
}

getCars();

document.querySelector('#count').innerHTML = JSON.parse(localStorage.getItem('cards')).length;

let plus = document.querySelectorAll('#pluscount');
let minus = document.querySelectorAll('#minuscount');


plus.onclick = function () {
    let element = this.previousSibling
    console.log(element);
}
  
let dltCarts=document.querySelectorAll(".dlt-cart")
dltCarts.forEach(element => {
    element.onclick= function(){
        let cards=JSON.parse(localStorage.getItem('cards'))
        let id=this.parentElement.parentElement.id;
        let newCards=cards.filter((x)=>x.Id!=id)

        localStorage.setItem("cards",JSON.stringify(newCards))
        this.parentElement.parentElement.parentElement.style.display="none"
        document.querySelector('#count').innerHTML = JSON.parse(localStorage.getItem('cards')).length;
    }
});

let plusBtns=document.querySelectorAll(".plus-button")

plusBtns.forEach(element => {
    element.onclick=function(){
        let count=this.parentElement.parentElement.previousElementSibling.previousElementSibling
        let inp=this.parentElement.previousElementSibling.firstChild.nextSibling.nextSibling.nextSibling;
        inp.value=+inp.value+1
        let id=this.parentElement.parentElement.parentElement.parentElement.id
        let carts=JSON.parse(localStorage.getItem("cards"))
        for(let element of carts){
            if (element.Id===id) {
                element.Count=Number(element.Count+1)
                count.innerHTML="Count : "+element.Count
            }
        }
        localStorage.setItem("cards",JSON.stringify(carts))
    }
});

let minusBtns=document.querySelectorAll(".minus-button")

minusBtns.forEach(element => {
    element.onclick=function(){
        if(this.nextElementSibling.value>1){
            let count=this.parentElement.parentElement.previousElementSibling.previousElementSibling
            let id=this.parentElement.parentElement.parentElement.parentElement.id
            this.nextElementSibling.value=Number(this.nextElementSibling.value)-1;
            let carts=JSON.parse(localStorage.getItem("cards"))
            for(let element of carts){
                if (element.Id===id) {
                    element.Count=Number(element.Count-1)
                     count.innerHTML="Count : "+element.Count
                   

                }
            }
            localStorage.setItem("cards",JSON.stringify(carts))
    
        }
    }
});

    let card_list = JSON.parse(localStorage.getItem('cards'));
let totalsum =[];
    for (let card of card_list) {
          let price = Number(card.Price)*card.Count;
          console.log(price);
          totalsum.push(price)
       console.log(totalsum);
    }
  