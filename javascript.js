/**
 * 
 * 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.

4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
 * 
 * 
 */


//1 
document.addEventListener('DOMContentLoaded',function(e){
    console.log("Все теги прогрузились");
})

//2
window.onload=function(){
    console.log("Страница загрузилась");
}

//3 

document.addEventListener('click', function (event) {


    if(event.target.matches('.super_element')===true){
      
        console.log("super_element присутствет в элементе  " + event.target.tagName );
    } 
    else {
        console.log("super_element отсутствует в элементе  " + event.target.tagName)
    }

    });

    //4

document.addEventListener('click',function(event){

    if(event.target.matches('textarea')===true){
        console.log("Вы навели на textarea.");
    }
})

//5
const ul=document.querySelectorAll('ul');
ul.forEach((Element)=>{
    Element.addEventListener('click',function(event){
        if(event.target.matches('button'))
        {console.log(event.target.textContent)};
        })
})


/*6 В 3 задании обращение идёт ко всему html-документу, а в 5 задании только
к тегам ul . Область действия обращения в 3 задании больше чем в 5 , поэтому 5 задание будет выполняться раньше по принципу архитектуры DOM-событий: объект события распространяется от потомка к родителю. 

*/


//7
const cololLi=document.querySelectorAll('li');
for(let i=0;i<=cololLi.length;i++){

    if(i%2!==0){
        cololLi[i].style.backgroundColor="red";
    }
}