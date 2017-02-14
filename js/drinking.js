function insert(){
	
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var job = $("#job").val();
	var under = $("#under").val();
	var interview = $("#under").val();
	var JSONObject= {"gender":gender,"name":name,"email":email ,"phone":phone, "job":job ,"under":under,"interview":interview};
	$.post( "http://www.frontiertech.co.th:5003/regis",{infor: JSON.stringify(JSONObject)});
	alert("ระบบยืนยันการลงทะเบียน กรุณารอรับการตอบรับผ่านอีเมล์");
	

}
function wait(){
	
	alert("ระบบจะเปิดใช้งานภายในวันที่ 1 -20 มีนาคม 2560 เท่านั้น!");
	

}
