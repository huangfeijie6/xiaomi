// console.log(table);

// let btns=document.getElementsByTagName("button");
// let btns=document.querySelectorAll(".table>.flex>.btn1>.bor>.btn");
let table=document.getElementsByClassName("table")[0];//效率高
let chbAll=document.querySelector(".table>.d-flex>.col-2>input");
//										||
// let table=document.querySelector(".table");//效率低

// console.log(btns);

	table.onclick=function(e){
		let btn=e.target;
		// console.log(btn);
		if(btn.innerHTML=="-"||btn.innerHTML=="+"){//加减按钮
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
			
			let flex=btn.parentNode.parentNode.parentNode;
			let price=flex.children[2];
			let subtotal=flex.children[4];
			let arr=parseFloat(price.innerHTML.slice(0,-1));
			// console.log(arr);
			subtotal.innerHTML=`${arr*n}元`;
			
			totalCount();
			
		}
		
		if(btn.getAttribute("type")=='checkbox'){//复选按钮
		console.log('kkk') 
			if( btn.id=='chball'){//全选
				let chbs=document.querySelectorAll(".table>.flex>.col-2>input");
				for(let chb of chbs){
					chb.checked=chball.checked;
				}
			}else{//单选按钮
				if(btn.checked==false){
				// 否则如果当前点得input是选中,上边input不一定选中
					chbAll.checked=false;
				}else{
					// 查找table下tbody下未选中的input
					let unchecked=document.querySelector(".table>.flex>.col-2>input:not(:checked)");
					// 如果找不到未选中的,就说明都选中了!
					if(unchecked===null){
						 chbAll.checked=true;
						 // 上边input才选中
					}
				}
			}
			totalCount();
		}
		
		// if(btn.innerHTML=="x"){//删除按钮
		// 	let table=btn.parentNode.parentNode.parentNode;
		// 	btn.setAttribute("index",'');
		// 	let xs = document.querySelectorAll("button[type=button]");
		// 	console.log(xs);
		// 	for(let i=0;i<xs.length;i++){
		// 		if(xs[i].hasAttribute("index")){
		// 			var index=i+1;
		// 			
		// 		}
		// 	}
		// 	console.log(table.childNodes[index]);
		// 	table.removeChild(table.children[index]);
		// totalCount();
		// }
		
		
		if(btn.innerHTML=="x"){//删除按钮
			let table=btn.parentNode.parentNode.parentNode;
			table.removeChild(btn.parentNode.parentNode);
		}
			totalCount();
	}




let totalCount=function(){
		let chbs=document.querySelectorAll(".table>.flex>.col-2>input:checked");
		var totalPrice=0;
		let num=0;
		chbs.forEach(e=>{
			var price = parseInt(e.parentNode.parentNode.querySelector('.price').innerHTML.slice(0,-1));
			var count=parseInt(e.parentNode.parentNode.querySelector('.num').innerHTML);
			// console.log('price',price)
			// console.log('count',count)
			totalPrice+=(price*count); 
			num+=count;
			
			// console.log(totalPrice)
		})
			// console.log(num);
		let tfoot_td=table.querySelector(".add>div:nth-of-type(3)>span>b");
		tfoot_td.innerHTML=`${totalPrice}`;
		let num1=document.querySelector(".table>.add>.col-5>span:last-child").innerHTML=num;
		// console.log(num1);
		
		
		var totalpro=document.querySelectorAll(".table .btn1 .bor .num");
		let totalnum=0;
		for(let pro of totalpro){
			totalnum+=parseInt(pro.innerHTML);
		}
		totalpro=document.querySelector(".table .add .col-5 span:first-child");
		totalpro.innerHTML=totalnum;
		
		// console.log(totalPrice)
	}
