let table=document.getElementsByClassName("table")[0];
// console.log(table);

let btns=document.getElementsByTagName("button");
// console.log(btns);

for(let btn of btns){
	// console.log(btn);
	btn.onclick=function(){
		let btn=this;
		let span=btn.parentNode.children[1];
		// console.log(span);
		let n=parseInt(span.innerHTML);
			
		if(btn.innerHTML=="+"&&n>=10){
			alert("已经不能再多了");
		}else if(btn.innerHTML=="-"&&n<=0){
			alert("不能再少了");
		}else if(btn.innerHTML=="+"){
			n++;
		}else{
			n--;
		}
		span.innerHTML=n;
		
		let flex=btn.parentNode.parentNode.parentNode
		let price=flex.children[2];
		let total=flex.children[4];
		let arr=parseInt(price.innerHTML.slice(0,-1));
		console.log(arr);
		total.innerHTML=`${arr*n}元`;
		// console.log(arr*n);
		// total.innerHTML=`${arr*n}元`;
		
		
	}
	
}