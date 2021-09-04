var ncount = document.querySelector(".n-countone")
ncount.style.display = 'none';
var bgCount = document.querySelector(".bg-countone")
var counterp = document.querySelector(".counterp")
var countStart = 0;
var counter = setInterval(function(){
    countStart++;
    ncount.innerHTML = countStart+"%";
    
    counterp.innerHTML = countStart+"%";
    bgCount.style.width = countStart+"%";
   if(countStart === 100){
       clearInterval(counter)
   }
},10)


