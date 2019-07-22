$(function(){
	var list=[
		{
			price:999,
			name:'红米手机1'
		},
		{
			price:999,
			name:'红米手机2'
		},
		
	]
	
	
	$('.navbar>.col-3>a').click(function(){
		let val=$('.navbar>.col-3>:text').val().trim();
	});
	$('.navbar>.col-3>:text').keyup(function(e){
		if(e.keyCode==13){
			$('.navbar>.col-3>a').click();
		}
	}).on('input',function(){
		$('.navbar>.col-3>a').click();
	})
	
	$.ajax({
		url:'header.html',
		type:'get',
		success:function(result){
			$(result).replaceAll('#header');
			$(`<link rel="stylesheet" href="../css/header.css">`).prependTo('head');
			$(`<link rel="icon" href="../img/index/favicon.ico" type="image/x-icon">`).prependTo('head');
		}
	})
})
$(window).load(function(){
		console.log($('[href=#tab1]'));
		$('[href=#tab1]').hover(function(){
			$('#tab').toggleClass('tab-p');
		})
		
		
		
		console.log($('#tab'));
	
})