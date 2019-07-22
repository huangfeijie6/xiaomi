$(window).scroll(()=>{
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	console.log(scrollTop);
	if(scrollTop<=50){
		$('.img-con').css({'position':'relative','top':'0px'});
	}else	if(scrollTop<=1072){
		$('.img-con').css({'position':'fixed','top':'70px'});
	}else{
		$('.img-con').css({'position': 'relative','top':'1000px'})
	}
})