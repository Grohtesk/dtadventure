export default function StepController ($routeParams, StepService, UserService) {

	var ctrl=this;

    StepService.getStep($routeParams.id)
    .then(function (step) {
        ctrl.step = step
    })

    ctrl.user = UserService

    ctrl.selectAction = function (action) {
        StepService.action(action, this.user)
    }

}
