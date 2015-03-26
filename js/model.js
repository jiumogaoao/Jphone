;(function(obj){
var returnObj = {};

	returnObj.good=Backbone.Model.extend({
		defaults:{
			"id":"",
			"name":""
		}
	})

obj.get = function(name){
		if(returnObj[name]){
			return returnObj[name]
		};
	};
})(app.models);
