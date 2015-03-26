;(function(obj){
	/*发送验证码*/
	var returnObj = {} ;
	returnObj.getGood = function(data,fn,err){
		var data = 10086 /*更新时间*/;
		var dataReturn = {
				"code" : 1/*0发送错误，1发送成功*/,
				"time" : 1008611,
				"data" : [{"name":"good1",id:"001"}]
			};
		if(dataReturn && dataReturn.code != 0){
			if(dataReturn.code == 1){
				var goodCollect=app.collections.get("good")
				var newData=new goodCollect();
				newData.add(dataReturn.data);
				app.caches.set("good",newData)
			}
			fn(app.caches.get("good"));
		}else{
			err();
		};
	};

	obj.run = function(name,data,fn,err){
		if(returnObj[name]){
			returnObj[name](data,fn,err);
		};
	}
	

})(app.apis);
