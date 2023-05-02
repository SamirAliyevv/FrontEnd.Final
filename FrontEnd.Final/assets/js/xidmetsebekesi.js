
// let sidemenu = document.querySelector('#menu')
// let services = document.querySelector('#nav2left')
// let sidebardiv = document.querySelector('.sidediv')


// sidemenu.onclick = function(){
//   // sidebardiv.classList.add('d-block')
//   //  sidebardiv.append(services)
  
// }
function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

 
  function light(){
    body.style.backgroundColor = 'white'
  }
  function dark(){
    body.style.backgroundColor = 'black'
}

 



biznesbtn.onclick = function(){
    biznesbtn.classList.add('color')
    ferdibtn.classList.add('defaultcolor')
    ferdibtn.classList.remove('color')
}
ferdibtn.onclick = function(){
    biznesbtn.classList.remove('color')
    ferdibtn.classList.add('color')
}

 function AzerbaijanApi(){
  maptilersdk.config.apiKey = 'A3jgLpoQ4mzGX31cLVPj';
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element in which the SDK will render the map
  style:"60073a68-7f31-4661-9a14-4a95bdf2fd65",
  center: [48.07070290756542, 40.360496044829375], // starting position [lng, lat]
  zoom: 6.262879110002796 // starting zoom
});
 }
 AzerbaijanApi();
 




 let bakuapi =  document.querySelector('#firstbtn').nextSibling.nextSibling;
 bakuapi.onclick = function(){
  let buttons = document.querySelectorAll('.allbuttons button');
  for(let btn of buttons){
    btn.onclick = function(){
      let active = document.querySelector('.active');
       active.classList.remove('active');
      this.classList.add('active');
  
    }
  }
  this.classList.add('active')
  firstbtn.classList.remove('active')
      maptilersdk.config.apiKey = 'A3jgLpoQ4mzGX31cLVPj';
    const map = new maptilersdk.Map({
      container: 'map', // container's id or the HTML element to render the map
      style: "10e264e3-1367-4bef-b164-a7ac9ae6ca71",
      center: [49.96176842700561, 40.4584161566616], // starting position [lng, lat]
      zoom: 9.442924612238441, // starting zoom

    });
 }
 let firstbtn = document.querySelector('#firstbtn');
firstbtn.onclick = function(){
    maptilersdk.config.apiKey = 'A3jgLpoQ4mzGX31cLVPj';
  const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element in which the SDK will render the map
    style:"60073a68-7f31-4661-9a14-4a95bdf2fd65",
    center: [48.07070290756542, 40.360496044829375], // starting position [lng, lat]
    zoom: 6.262879110002796 // starting zoom
  });
}

