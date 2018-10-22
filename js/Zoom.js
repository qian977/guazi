
function getStyle(domObj,attr){
			if(domObj.currentStyle){
				return domObj.currentStyle[attr];
			}else{
				var obj  = window.getComputedStyle(domObj);
				return obj[attr];
			}
		}

window.onload=function(){	
	let lis=z("#imgs").children;
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			let bgImg = getStyle(this,"backgroundImage");
			z("#bigImg").style.backgroundImage = bgImg;
			z("#bigImg").style.backgroundSize ="cover";
			z("#box2").style.backgroundImage = bgImg;
		}
	}	

	z("#bigImg").onmouseenter = function(event){
		let evt = event || window.event;
		//鼠标进入showBox时，不应该显示
		if(evt.target==z("#bigImg") || evt.target==z("#box1")){
			z("#box1").style.display="block";
			z("#box2").style.display="block";
		}
	}
	
	z("#bigImg").onmouseleave = function(event){
		let evt = event || window.event;
		z("#box1").style.display="none";
		z("#box2").style.display="none";
	}
	
	z("#bigImg").onmousemove = function(event){
		let evt = event || window.event;
		
		//1、数据
		//1)、
		let left1 = evt.pageX-z("#bigImg").offsetLeft-z("#box1").offsetWidth/2;
		let top1 = evt.pageY-z("#bigImg").offsetTop-z("#box1").offsetHeight/2;
		//2)、
		if(left1<=0){
			left1=0;
		}else if(left1>z("#bigImg").offsetWidth-z("#box1").offsetWidth){
			left1 = z("#bigImg").offsetWidth-z("#box1").offsetWidth;
		}
		
		if(top1<=0){
			top1=0;
		}else if(top1>z("#bigImg").offsetHeight-z("#box1").offsetHeight){
			top1 = z("#bigImg").offsetHeight-z("#box1").offsetHeight;
		}
		
		//2、外观
		z("#box1").style.left = left1+"px";
		z("#box1").style.top = top1+"px";
		z("#box2").style.backgroundPosition=(-1*2*left1)+"px "+(-1*2*top1)+"px";
	}
	
}