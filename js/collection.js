;(function(obj){
var returnObj = {};
	returnObj.good = Backbone.Collection.extend({
		model:app.models.get('good')
		})
obj.get = function(name){
		if(returnObj[name]){
			return returnObj[name];
		};
	};
})(app.collections);
