;(function(obj){
	var returnObj = {};
	returnObj.good=[];
	returnObj.goodUpDate=0;
obj.get = function(name){
		if(returnObj[name]){
			return returnObj[name]
		};
	};
obj.set = function(name,value){
	if(returnObj[name]){
			returnObj[name]=value;
			return returnObj[name]
		};
}
})(app.caches);