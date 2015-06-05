var d = {
	addClass: function(nodeList, className){
		g.runByType(nodeList, function(node){
			node[0].classList.add(className);
		});
	},
	removeClass: function(nodeList, className){
		g.runByType(nodeList, function(node){
			node[0].classList.remove(className);
		});
	},
	toggleClass: function(nodeList, className){
		g.runByType(nodeList, function(node){
			node[0].classList.toggle(className);
		});
	},
	attr: function(nodeList, name, value){
		if(value){
			g.runByType(nodeList, function(node){
				node[0].setAttribute(name, value);
			});
		}else{
			return g.runFirst(nodeList, function(node){
				return node.getAttribute(name);
			});
		}
	},
	html: function (nodeList, content){
		g.runByType(nodeList, function(node){
			node[0].innerHTML = content
		});
	}
}