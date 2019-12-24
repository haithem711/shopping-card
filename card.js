// var somme=document.getElementById('somme');
var plusButtons = Array.from(document.getElementsByClassName('plus'))
var minusButtons = Array.from( document.getElementsByClassName('minus'))

var total=document.querySelector('.total')
var prix=document.getElementsByClassName('prix')


plusButtons.map(button => {
    button.addEventListener('click', function(){
        button.nextElementSibling.innerHTML++;
        total.innerHTML = parseInt(total.innerHTML) + parseInt(button.parentElement.nextElementSibling.firstChild.innerHTML.replace('$',''))
    })
})


minusButtons.map(button => {
    button.addEventListener('click', function(){
        if(button.previousElementSibling.innerHTML <=0) button.previousElementSibling.innerHTML = 0
        else{button.previousElementSibling.innerHTML--}
        
        total.innerHTML = parseInt(total.innerHTML) -parseInt(button.parentElement.nextElementSibling.firstChild.innerHTML.replace('$',''))
        if(total.innerHTML<0){total.innerHTML=0}
    })
})


 var x=Array.from(document.getElementsByClassName('x'))
x.map(delet => {

    delet.addEventListener('click',function(){
    delet.parentElement.parentElement.remove()
   })
   
})

var hearts=document.querySelectorAll('.fa-heart')

hearts.forEach(heart => {
    heart.addEventListener('click',function(){
      heart.classList.toggle("heart-red");})
})






