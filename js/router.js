/* JavaScript Document*/
;(function(obj){
	var routeTable = {
		/*首页*/
		"index":{
				fn:function(data){
					app.apis.run("getGood",null,function(returnData){/*调用API获得数据*/
						var template=app.views.get("index");
						var index = new template();
						var pageData={goodList:returnData}/*按页面需求整理数据*/
						index.data=pageData;
						index.render();
					})
					
				}
			}
		};

	var routers=Backbone.Router.extend({
		"routes":{
			"*action":"changePage"
		   },
		"changePage":function(){
			var get = $_GET();
				if(!get.page){
					get.page = "index"
				};	
			routeTable[get.page].fn(get);/*通过get的page值调页面*/
			suit()
			}
		});
	obj.routers = routers;

})(app);

