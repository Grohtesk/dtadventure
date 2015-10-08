export default function EditStepController ($location, $routeParams, StepService, UserService) {

	// var ctrl=this;

	StepService.getStep($routeParams.id)
	.then(function(response){
		this.step=response;
	}.bind(this))
	.then(function(response){
		this.formatParams();
	}.bind(this))

	this.types=["go","chest","fight"];

	this.saveStep=function(){

		this.step.actions=this.step.actions.map(function(e){
			e.params=str2obj(e.params);
			return e;
		})

		StepService.setStep(this.step).then(function(){
			console.log("success");
			$location.path("/")
		})

	}.bind(this);

	this.deleteStep=function(){
		StepService.deleteStep($routeParams.id).then(function(){})
	}.bind(this);

	this.addAction=function(){
		this.step.actions.push({
			name:"",
			type:this.types[0],
			params:{}
		})
	}.bind(this);

	this.formatParams=function(){
		this.step.actions=this.step.actions.map(function(e){
			e.params=obj2str(e.params);
			return e;
		})
	}

	function obj2str(obj){
		var a=[];
		for (var str in obj) {
			a.push(str+":"+obj[str]);
		};
		return a.join("\n");
	}

	function str2obj(str){
		var a=str.split("\n");
		var o={};
		a.forEach(function(e){
			var sub=e.split(":");
			o[sub[0]]=sub[1];
		})
		return o;
	}

	// j'avais fait ça pour transformer l'objet en tableau d'objet mais ensuite le gros Jérome a montré qu'on pouvait faire ng repeat (key, value) sur un objet (qui n'est pas un tableau hein) et ça marche
	/*this.getParams=function(action){
		Object.keys(action.params).map(function(e,i,array){
			console.log(action.params[e]);
			return {"key":e,"value":action.params[e]};
		});
	}*/

}