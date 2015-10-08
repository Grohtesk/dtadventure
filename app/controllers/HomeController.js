export default function HomeController (StepService) {

    var ctrl=this;
    ctrl.predicate="id";

    StepService.getSteps()
    .then(function (steps) {
        this.steps = steps
    }.bind(this))


    ctrl.sortBy=function(predicat){
		ctrl.predicate = predicat;
		ctrl.reverse = !ctrl.reverse;
	}

}
