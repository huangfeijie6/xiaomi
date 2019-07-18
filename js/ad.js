// window.onscroll=function(){
// $(function(){
// $(window).load(function(){
// 	let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
// 	let $block=$('.carousel>.position-relative>.d-block');
// 	console.log(scrollTop);
// 	console.log($block);
// 	console.log(!$block.hasClass('in'));
// 	if(scrollTop>=0&&!$block.hasClass('in')){
// 		$block.addClass('in');
// 	}
// })
// 

// window.onscroll=function(){
// $(function(){
$(()=>{//头部
	let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	let $block=$('.carousel>.position-relative>.d-block');
	if(!$block.hasClass('in')){
		$block.addClass('in');
	}
})

//			keyup是错误的使用方式
$(window).keydown(function(e){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	console.log(e.keyCode);
	if(e.keyCode==116){
		
		// $(window).scrollTop(0);
		// scrollTo(0,0);
		// document.body.scrollTop = document.documentElement.scrollTop = 0;
		// var top = document.body.scrollTop || document.documentElement.scrollTop
		scrollBy(0,-scrollTop);
		// 以上5种都能实现回到顶端
	}
	
})
		
		
		
		
		// 以下两种是错误的写法↓
		// $(window).scrollTop=0;
		// $('body').scrollTop(0);




function storey($select,$width){
	let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop>= $width && !$($select).hasClass('in')){
		$($select).addClass('in');
	}
}

$(window).scroll(()=>{//cpu
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	console.log(scrollTop);

	// let $block=$('.carousel>.position-relative>.d-block');
	// console.log(scrollTop);
	// console.log($block);
	// console.log(!$block.hasClass('in'));
	// if(!$block.hasClass('in')){
	// 	$block.addClass('in');
	// }
	// let $cpu=$('.cpu');
	// console.log(scrollTop);
	// if(scrollTop>=720&&!$cpu.hasClass('in')){
	// 	$cpu.addClass('in');
	// }
	storey('.container-fluid>.position-relative>.py-5',1000);
	
	storey('.container-fluid>.cpu>h3:first',1333);
	
	storey('.container-fluid>.cpu>h5:first',1570);
	
	storey('.container-fluid>.cpu>h3:last',1991);
	
	storey('.container-fluid>.cpu>h5:last',2000);
	
	storey('.container-fluid>.cpu>.clearfix',2230);
	
// }
})
