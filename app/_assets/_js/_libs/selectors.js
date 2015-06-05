var g = {
	byId: function (id) {
		return document.getElementById(id);
	},
	byClass: function(className){
		return document.getElementsByClassName(className);
	},
	bySelector: function(className){
		return document.querySelectorAll(className);
	},
	forEach: function(nodeList, func){
		g.runByType(nodeList, func(nodeList[i]));
	},
	runByType: function(nodeList, callback){
		if(typeof nodeList == 'string'){
			nodeList = g.bySelector(nodeList);
		}
		for (i = 0; i < nodeList.length; i++) {
			return callback(nodeList);
		}
	},
	runFirst: function(nodeList, callback){
		if(typeof nodeList == 'string'){
			nodeList = g.bySelector(nodeList);
		}
		return callback(nodeList[0]);
	}
}