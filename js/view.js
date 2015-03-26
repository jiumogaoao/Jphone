;(function(obj){
	/*头部*/
	var head=function(){
			this.el="#header";
			this.type=1;
			this.data="";
			this.render=function(){
			}
		}
	/*脚部*/
	var foot=function(){
		this.el="#footer";
		this.type=1;
		this.data={};
		this.render=function(){
			$(this.el).html("")
		}
	}


	
	var returnObj = {
		/*首页*/
		"index":Backbone.View.extend({
			el:"#scroller",
			data:{},/*已组织好的数据*/
			render:function(){
				var that=this
				$(this.el).empty();
				var newHead = new head();/*调用头部*/
				newHead.type=0;
				newHead.render();
				var newFoot = new foot();/*调用脚部*/
				newFoot.render();
				var goodList=this.data.goodList
				$.each(goodList,function(i,n){/*生成主区内容*/
					$(that.el).append($('<div>'+n.name+'</div>'))
				})
			}
		})
	};
	obj.get = function(name){
		if(returnObj[name]){
			return returnObj[name];
		};
	};
})(app.views);