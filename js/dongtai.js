
	var $clicksss=(function(){
		//创建一个 li
		let $childLi=$("<li></li>");
		$childLi.attr("class","liDom");
//		$childLi.attr("goodsid","00"+i);
		$("#go").append($childLi);//把这个li放到大盒子里面
		
		let $childLiImg=$("<img/>");//这个ul下的li的是Img
		$childLiImg.attr("src","data[i].goodsImg")
		$childLi.append($childLiImg);//把这个Img放到上面那个li里
		
		let $childLiDiv=$("<div></div>");//这个ul下的li的是Img
		$childLiDiv.attr("class","tt");//给这个div个取名字叫tt
		$childLi.append($childLiDiv);//把这个Img放到上面那个li里
		
		let $childLiDivH5=$("<h5></h5>");
		$childLiDivH5.html("data[i].goodsName");
		$childLiDiv.append($childLiDivH5);
		
		let $childLiDivP=$("<p></p>");
		$childLiDivP.html("data[i].goodsType");
		$childLiDiv.append($childLiDivP);
		
		let $childLiDivDs=$("<div></div>");
		$childLiDivDs.attr("class","money");
		$childLiDiv.append($childLiDivDs);
		
		let $childLiDivDsSpan=$("<span></span>");
		$childLiDivDsSpan.html("data[i].goodsPrice");
		$childLiDivDs.append($childLiDivDsSpan);
		
		let $childLiDivDsD1=$("<div></div>");
		$childLiDivDsD1.attr("class","aa");
		$childLiDivDs.append($childLiDivDsD1);
		
		let $childLiDivDsD1A=$("<a href=''></a>");
		$childLiDivDsD1A.html("data[i].goodsCount");
		$childLiDivDsD1A.attr("class","yxc");
		$childLiDivDsD1.append($childLiDivDsD1A);
		
		let $childLiDivDsD1A2=$("<a href=''></a>");
		$childLiDivDsD1A2.html("data[i].goodsDesc");
		$childLiDivDsD1A2.attr("class","cz");
		$childLiDivDsD1.append($childLiDivDsD1A2);
	});
	
//	for(var i=0;i<11;i++){
//		$clicksss();
//	};
	
	

