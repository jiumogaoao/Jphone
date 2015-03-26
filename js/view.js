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
		}
	}


	
	var returnObj = {
		/*首页*/
		"index":Backbone.View.extend({
			el:"#scroller",
			data:{},
			render:function(){
				$(this.el).empty();
				var newHead = new head();
				newHead.type=0;
				newHead.render();
				var newFoot = new foot();
				newFoot.render();
			}
		})
	};
	obj.get = function(name){
		if(returnObj[name]){
			return returnObj[name];
		};
	};
})(app.views);