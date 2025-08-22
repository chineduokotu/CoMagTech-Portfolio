(function(){
"use strict"



var convertType='miles';
var heading=document.querySelector('h1');
var intro =document.querySelector('p');
var answer=document.getElementsByClassName('invisible')[0];
var form=document.getElementById('convert');

document.addEventListener('keydown',  (event)=> {
 var key=event.code;
if(key==='KeyK'){
 convertType='kilometers';
 heading.innerHTML='KILOMETERS TO MILES CONVERTER';
 intro.innerHTML='input any value in kilometers to convert to miles'
}
else if(key==='KeyM'){
 convertType='miles';
 heading.innerHTML='MILES TO KILOMETERS CONVERTER';
 intro.innerHTML='input any value in miles to convert to kilometers'
}
})
form.addEventListener('submit', (event)=>{
 event.preventDefault() ;
 var distance=parseFloat(document.getElementById('distance').value);
 if(distance){
     if(convertType=='miles'){
       var  conversion=((distance*1.609344).toFixed(3));
       answer.innerHTML=` ${distance} miles is ${conversion} in kilometers`;
     }
     else{
         var  conversion=((distance/1.609344).toFixed(3));
       answer.innerHTML=` ${distance}kilometers is ${conversion} in miles`;  
     }
     
 }
 else{
     answer.innerHTML=' Not a number !';
 }
 document.getElementById('distance').value='';
});
})()