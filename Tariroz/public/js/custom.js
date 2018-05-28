/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setDate(){
    document.getElementById
    ('date').innerHTML=Date();
};
function bigImg(x){
     x.style.height="450px";
     x.style.width="450px";
 }
 function normalImg(x){
     x.style.height="200px";
     x.style.width="200px";
 }
$('span-nav-btn').click(function (){
  $('ul.clearfix').toggle();  
}); 
     
$('span.nav-btn').click(function (){
     $('ul.nav').slideToggle();   
    });
    $(window).resize(function(){
        if($(window).width()>600){
          $('ul.nav').removeAttr('style');
      }
    });
 
