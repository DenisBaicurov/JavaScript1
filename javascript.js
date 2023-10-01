const arrimg=new Array();
const img1=new Image();
img1.src="img/pict1.svg";
const img2=new Image();
img2.src="img/pict2.svg";
const img3=new Image();
img3.src="img/pict3.svg";
const img4=new Image();
img4.src="img/pict4.svg";
const img5=new Image();
img5.src="img/pict5.svg";
const img6=new Image();
img1.src="img/pict6.svg";
let cout=0;

const block=document.querySelectorAll('.pict');

block.forEach((Element)=>{



  const button=Element.querySelector('.button1');
  


if(button!==null){
  button.addEventListener('click',function(){
 
   
const img= Element.querySelector('img');
  const cart=document.querySelector('.content');
  const name=img.src;
   
   
//let demo=document.querySelector("#demo");

if(arrimg.includes(name)===false){
  
  const productEl =
  `
  <div class="pict">
  <div class="pict1">
  <img src="${name}" alt="картинка">
  <button class="btn__del" onclick="sub()">Удалить</button>
     </div>
    
     <span id="demo" class="ft">
         0
     </span>

      </div>
  `
  
  
  cart.insertAdjacentHTML("beforeend",productEl);
arrimg.push(name);
cout++;


}




var counter =document.getElementById("demo").innerHTML;

  if(counter>=0){
  
    add();
    
  }



  
 
})





}

})







  function sub(){
    var counter = document.getElementById("demo").innerHTML;
    if(counter == 1) {
      remove();
   }
else{counter--;
  document.getElementById("demo").innerHTML = counter;
}

  }

  function add(){
    var counter = document.getElementById("demo").innerHTML;
    counter++;
    document.getElementById("demo").innerHTML = counter;

  }

function remove(){

  const btns =document.querySelectorAll(".btn__del");
  btns.forEach((el) => {
  el.addEventListener("click", () => {
  const product = el.closest(".pict");
  product.remove();
cout--;
 //console.log(cout);
  });
  });

if(cout<=0){
 window.location.reload();
}

}
//window.location.reload();


    