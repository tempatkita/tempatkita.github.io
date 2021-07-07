let counter = document.querySelector('h3');
let count = 1;

setInterval(()=>{
	
	counter.innerText = count;
	count++
	
},1000)
