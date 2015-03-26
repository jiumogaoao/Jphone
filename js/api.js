;(function(obj){
	/*发送验证码*/
	var returnObj = {} ;
	returnObj.getGood = function(data,fn,err){
		var data = 10086 /*更新时间,模拟发送数据到后台*/;
		var dataReturn = {/*模拟后台数据返还*/
				"code" : 1/*0发送错误，1发送成功*/,
				"time" : 1008611,
				"data" : [{"name":"good1",id:"001"},{"name":"good2",id:"002"},{"name":"good3",id:"003"}]
			};
		if(dataReturn && dataReturn.code != 0){/*判断返还状态*/
			if(dataReturn.code == 1){/*1为有新数据*/
				var goodCollect=app.collections.get("good")
				var newData=new goodCollect();
				newData.add(dataReturn.data);
				app.caches.set("good",newData)/*数据放缓存*/
				app.caches.set("goodUpDate",dataReturn.time)/*修改更新时间*/
			}
			fn(app.caches.get("good").toJSON());/*返还缓存*/
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
