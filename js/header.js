$(function(){
	
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
		}
	})
})
