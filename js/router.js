/* JavaScript Document*/
;(function(obj){
	var routeTable = {
		/*首页*/
		"index":{
				fn:function(data){
					var template=app.views.get("index");
					var index = new template();
					index.data={goodList:[{"image":"css/images/good.png","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
											{"image":"css/images/good.png","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
											{"image":"css/images/good.png","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
											{"image":"css/images/good.png","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"},
											{"image":"css/images/good.png","des":"枪灰色布纹羊反绒_猪皮粉橙色布纹黑白点布透明材质","price":"￥598","costPrice":"￥1299"}
						]}
					index.render();
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
			routeTable[get.page].fn(get);
			suit()
			}
		});
	obj.routers = routers;

})(app);

