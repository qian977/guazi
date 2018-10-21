$(function(){
	var $clicksss=(function(){
		//创建一个 li
		let $childLi=$("<li></li>");
//		$childLi.attr("class"."weizhi");
		$("#go").append($childLi);//把这个li放到大盒子里面
		
		let $childLiImg=$("<img/>");//这个ul下的li的是Img
		$childLiImg.attr("src","img/0faa96dd10c2d9e9be92500981300d7e.jpg")
		$childLi.append($childLiImg);//把这个Img放到上面那个li里
		
		let $childLiDiv=$("<div></div>");//这个ul下的li的是Img
		$childLiDiv.attr("class","tt");//给这个div个取名字叫tt
		$childLi.append($childLiDiv);//把这个Img放到上面那个li里
		
		let $childLiDivH5=$("<h5></h5>");
		$childLiDivH5.html("现代 索纳塔A6L 2010款 2.0 TFSI 自动标准");
		$childLiDiv.append($childLiDivH5);
		
		let $childLiDivP=$("<p></p>");
		$childLiDivP.html("2013年 | 8.1万公里");
		$childLiDiv.append($childLiDivP);
		
		let $childLiDivDs=$("<div></div>");
		$childLiDivDs.attr("class","money");
		$childLiDiv.append($childLiDivDs);
		
		let $childLiDivDsSpan=$("<span></span>");
		$childLiDivDsSpan.html("22.80万");
		$childLiDivDs.append($childLiDivDsSpan);
		
		let $childLiDivDsD1=$("<div></div>");
		$childLiDivDsD1.attr("class","aa");
		$childLiDivDs.append($childLiDivDsD1);
		
		let $childLiDivDsD1A=$("<a href=''></a>");
		$childLiDivDsD1A.html("严选车");
		$childLiDivDsD1A.attr("class","yxc");
		$childLiDivDsD1.append($childLiDivDsD1A);
		
		let $childLiDivDsD1A2=$("<a href=''></a>");
		$childLiDivDsD1A2.html("超值");
		$childLiDivDsD1A2.attr("class","cz");
		
		$childLiDivDsD1.append($childLiDivDsD1A2);
	});
	
	for(var i=0;i<50;i++){
		$clicksss();
	};
	
	
});
