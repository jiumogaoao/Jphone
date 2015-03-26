;(function(obj){
	var returnObj = {};
	/*毫秒转日期*/
returnObj.t2d = function(time){
		var date = new Date();
		date.setTime(time);
		return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
		};
/*************************************************************************************/
/*日期转毫秒*/
returnObj.d2t = function(date){
	  var time = new Date();
	  time.setFullYear(Number(date.split("/")[0]),(Number(date.split("/")[1])-1),Number(date.split("/")[2]));
	  return time.getTime();
};
/*************************************************************************************/
/*本地缓存*/
returnObj.storage = function(key,value,remove){
	if(key && remove){
			if(localStorage["com_shetop_www_" + key]){
				delete localStorage["com_talk_www_" + key];
				};
		}else if(key && value){
			localStorage["com_shetop_www_" + key] = JSON.stringify(value);
	}else if(key){
			if(localStorage["com_shetop_www_" + key]){
				return JSON.parse(localStorage["com_talk_www_" + key]);
				}else{
					return false;
					};	
	};
};
/*************************************************************************************/
/*uuid*/
returnObj.uuid = function(){
	/*获取唯一id*/
	 return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return (v.toString(16)).toUpperCase();
    });
};
/*************************************************************************************/
/*终止冒泡*/
returnObj.stopBubble = function(e){
	if(e&&e.preventDefault){
				e = e;	
			}else{
				e = window.event;	
			}
			e.stopPropagation();
			e.preventDefault();
  };
 returnObj.px2rem=function(px){
	return px/fontSize
}

returnObj.rem2px=function(rem){
	return fontSize*rem
}
  obj.get = function(name){
  		return returnObj[name];
  }
})(app.fns);

