/**
 * 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
[]()
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
[]()
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
[]()
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
[]()
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
[]()
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
[]()
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
 * 
 * 
 * 
 */

//1
const addClass =document.querySelectorAll('[class="dropdown-item"]');
addClass.forEach((Element)=>{
    Element.classList.add('super-dropdown');

})



//2
const searchClass=document.querySelectorAll('.btn');
searchClass.forEach((Element)=>{
 if(Element.classList.contains('btn-secondary')){
    Element.classList.remove('btn-secondary');
 }
else {Element.classList.add('btn-secondary')};

})

//3
const removeClass=document.querySelectorAll('.menu')
removeClass.forEach((Element)=>{
    Element.classList.remove('dropdown-menu');
})


//4
const a=document.querySelector('div','.dropdown');
a.insertAdjacentHTML('afterBegin','<a href="#">link</a>');


//5
const getId=document.getElementById("dropdownMenuButton");
getId.id="superDropdown";


//6
const get_Atribute=document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]');

get_Atribute.forEach((Element)=>{
    Element.setAttribute("data-dd","3")
})



//7
const getClass=document.querySelectorAll('.dropdown-toggle')

getClass.forEach((Element)=>{
    Element.removeAttribute('type');
})