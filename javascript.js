/**
 * 
 * 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.

3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
 * 
 */

//1
const span=document.getElementById('from');

const chageInput=()=>{
    const span=document.querySelector('span');
    span.innerText=document.getElementById('from').value;
}
span.addEventListener('input',chageInput);


//2
function signup() {
    element = document.querySelector('.message');
    element.style.visibility='visible';
  }


const mymessage=document.querySelector('.message');
document.addEventListener('click', function(event) {
 
    if(event.target.matches('.messageBtn')){
mymessage.classList.add('.animate_animated');
mymessage.classList.add('.animate_fadeInLeftBig');
signup();
    }
 
}
)

// 3
const input=document.querySelectorAll('input');
const select=document.querySelectorAll('select');
document.addEventListener('submit',(event)=>{


    input.forEach((Element)=>{

if(Element.value==="")
      {  
        Element.classList.add('error');
        event.preventDefault();
    }

      else if(Element.value!==""){
        
      Element.classList.remove('error');
      
    }
    
    }
    )

select.forEach((Element)=>{

    if(Element.value===""){
        Element.classList.add('error');
        event.preventDefault();
    }

    else if(Element.value!==""){
        Element.classList.remove('error');
    }

})


})
