function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}