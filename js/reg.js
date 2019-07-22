$(function(){
	$("form>.mt-5>:checkbox").click(function(){
		$("form>.button>button").prop("disabled",!$(this).is(":checked"));
		$("form>div>.form-control").prop("disabled",!$(this).is(":checked"));
	})
});
function show(){
	var sexInp=document.getElementsByTagName('input');
	console.log(sexInp);
	for(var i=0;i<sexInp.length;i++){
		if(sexInp[i].checked){
			var sex=sexInp[i].value
		}
	}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=()=>{
		if(xhr.status==200&&xhr.readyState==4){
			var result=xhr.responseText;
		}
	}
	xhr.open('post','/mypro/v1/reg',true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
	var formdata='uname='+uname.value+'&upwd='+upwd.value+'&sex='+sex+'&phone='+phone.value+'&uemail='+uemail.value+'&rname='+rname.value;
	xhr.send(formdata);
}