let ferdibtn2 = document.querySelector('.ferdi')
let ferdiword2 = document.querySelector('.word')
let biznesbtn2 = document.querySelector('.biznes')
let biznesword2 = document.querySelector('.word2')
let darkmode2 = document.querySelector('#dark')
let body2 = document.querySelector('body')
let  ferdislidebtn2 = document.querySelector('#slidebtn')
let biznesslidebtn2 = document.querySelector('.sidebtn')
let ferditext2= document.querySelector('#ferdi')
let biznestext2= document.querySelector('#biznes')
// let sidemenu = document.querySelector('#menu')
// let services = document.querySelector('#nav2left')
// let sidebardiv = document.querySelector('.sidediv')


// sidemenu.onclick = function(){
//   // sidebardiv.classList.add('d-block')
//   //  sidebardiv.append(services)
  
// }
if(localStorage.getItem('cards')===null){
  localStorage.setItem('cards',JSON.stringify([]))
}

document.querySelector('#count').innerHTML=JSON.parse(localStorage.getItem('cards')).length

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

 
  function light(){
    body2.style.backgroundColor = 'white'
  }
  function dark(){
    body2.style.backgroundColor = 'black'
}

 



biznesbtn2.onclick = function(){
    biznesbtn.classList.add('color')
    ferdibtn2.classList.add('defaultcolor')
    ferdibtn2.classList.remove('color')
}
ferdibtn2.onclick = function(){
    biznesbtn2.classList.remove('color')
    ferdibtn2.classList.add('color')
}

if (localStorage.getItem('cards') === null) {
  localStorage.setItem('cards',JSON.stringify([]))
}



let buttons2 = document.querySelectorAll('#buybtn');
for (let btn of buttons2) {
  btn.onclick = function(e){
      e.preventDefault();
      let id2 = e.target.parentElement.parentElement.id

      let src=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.src 
      let title=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
      let info=e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML
      let price=e.target.parentElement.previousElementSibling.innerHTML


      let cards=JSON.parse(localStorage.getItem('cards'))

      if(cards.filter((x)=>x.Id===id2).length===0){
        cards.push({
          Id: id2,
          Src: src,
          Title: title,
          Info: info,
          Price: price,
          Count: 1
        })
        document.querySelector('#count').innerHTML=Number(document.querySelector('#count').innerHTML)+1
        localStorage.setItem("cards",JSON.stringify(cards))
        }


   
  }

  
}