'use strict'
$(' .icon ').click(function(){
  let left=$(this).offset().left
  console.log(left);
  let listWidth=  $('.menuLeft').outerWidth(true)
  console.log(listWidth);
  $('#home .icon').css({'margin-left':`${listWidth}px`})
  $('.menu').css({'left':'0px','transition':'left 1s'})
  $('.close').click(function(){
    $('.menu').css({'left':`-${listWidth}px`,'transition':'left 0.5s'})
    
    $('#home .icon').css({'margin-left':`0px`,'transition':'margin-left 1s'})



  })
})

$('.nav-link').click(function(){
  //add or remove class active
  $('.nav-link').removeClass('active')
  $(this).addClass('active')

//scroll smoothing
 let sectionId= $(this).attr('href')
 console.log(sectionId);
let sectionTop= $(sectionId).offset().top
console.log(sectionTop);
$('html,body').animate({
 scrollTop:sectionTop
 
},1000)
})


//slide
$('#Duration h2').click(function(){
    $(this).next().slideToggle(1000).siblings('p').slideUp(500)
})



let oldDate=new Date('10/25/2023').getTime()
setInterval(function(){
   let now=new Date().getTime() 
  const diff =  oldDate -now ;

   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
   const min = Math.floor((diff / (1000 * 60)) % 60);
   const sec = Math.floor((diff / 1000) % 60);
// console.log(days);
  displayDate(days,hours,min,sec)
  
},1000)




function displayDate(days,hours,min,sec)
{
    $('.day').text(`${days} D`)
    $('.hour').text(`${hours} H`)
    $('.min').text(`${min} M`)

    $('.sec').text(`${sec} S`)


}

$('#Textarea').keyup(function(){
  let message= $('#Textarea').val().length 
  console.log(message);

  if (message<100) {
    let letters=100-message
$('#Contact span').text(`${letters}`)

  }
  
 else{
  $('#Contact span').text('your available character finished')

 }
})



//contact
$('#btn-send').click(function(){
 $('#Input1').val('')
 $('#Input2').val('')
$('#Textarea').val('')
$('#Contact span').text(100)
})

