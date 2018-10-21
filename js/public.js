


$(function(){	
	//signIn登录手机号验证
	$("#getn").click(function(){
		if($("#phoneNum").val()==""){
			$("#true").html("请输入手机号");
		}else{
			let num=/^1\d{10}$/;
			if(num.test($("#phoneNum").val())==true){
				$("#true").html(" ");
			}else{
				$("#true").html("请输入正确的手机号码");
			}
		}
	}); 
	
	$("#dl").click(function(){
		if($("#phoneNum").val()==""){
			$("#true").html("请输入手机号");
		}else{
			let num=/^1\d{10}$/;
			if(num.test($("#phoneNum").val())==true){
				$("#true").html(" ");
				
				let yanz=/^\d{4}$/;
				if(yanz.test($("#yan").val())==true){
					$("#true").html("");
				}else{
					$("#true").html("请输入验证码");
				}
			}else{
				$("#true").html("请输入正确的手机号码");
			}				
		}		
	});
	
	
	//划过显示ul:
	$("#huabj").mouseenter(function(){
		$(this).css({
			"backgroundColor":"#fff",
			"border":"1px solid #e6e6e6",
			"borderBottom":"none",
			"borderRadius":"2px"
		});
		$("#bj").css({
			"color":"#39b34c"
		});
		$("#uls").show();
	});
	$("#huabj").mouseleave(function(){
		$(this).css({
			"backgroundColor":"transparent",
			"border":"1px solid transparent",
			"borderBottom":"none",
			"borderRadius":"2px"
		});
		$("#bj").css({
			"color":"#fff"
		});
		$("#uls").hide();
	});
	
	//点击登录signIn
	$("#deng").click(function(){
		$("body").css({"overflow":"scroll","overflowY":"hidden"});
		$(".signIn").show();
		$(".sign_box").show();
	});
	$(".close").click(function(){
		$("body").css({"overflow":"visible","overflowY":"visible"});
		$(".signIn").hide();
		$(".sign_box").hide();
	});
	
	//滑过固定工具栏：
	$("#fix1").mouseover(function(){
		$("#download1").css({"display":"block"});
	});
	$("#fix1").mouseout(function(){
		$("#download1").css({"display":"none"});
	});

	$("#fix2").mouseover(function(){
		$("#download2").css({"display":"block"});
	});
	$("#fix2").mouseout(function(){
		$("#download2").css({"display":"none"});
	});

	$("#fix3").mouseover(function(){
		$("#yjfk").css({"display":"block"});
	});
	$("#fix3").mouseout(function(){
		$("#yjfk").css({"display":"none"});
	});

	$("#fix4").mouseover(function(){
		$("#mfzx").css({"display":"block"});
	});
	$("#fix4").mouseout(function(){
		$("#mfzx").css({"display":"none"});
	});

	$("#bigfix5").mouseover(function(){
		$("#see").css({"display":"block"});
	});
	$("#bigfix5").mouseout(function(){
		$("#see").css({"display":"none"});
	});
	
//	回到顶部:
	$(window).scroll(function(){
		var $scrolls=document.documentElement.scrollTop || document.body.scrollTop;
		if($scrolls>=402){
			$(".fix .fix6").css({"display":"block"});		
			$(".fix .fix6").click(function(){
				document.documentElement.scrollTop=document.body.scrollTop=0;
			});
		}else{
			$(".fix .fix6").css({"display":"none"});		
		}			
	});
	
});












//let xhr=XMLHTTPRequest();
//
//xhr.open("get"," .php",true);
//
//xhr.onreadystatechange=function(){
//	if(xhr.readyState==4 && xhr.status==200){
//		xhr.responseText;
//	}
//}
//
//xhr.send();
