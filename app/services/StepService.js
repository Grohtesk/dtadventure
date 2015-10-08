export default function StepService ($http,$q, ActionService) {

    function handleResponse(response) {
        return response.data
    }

    return {
        getSteps: function () {
            return $http.get('http://localhost:3000/steps')
            .then(handleResponse)
        },

        createStep: function (step) {
            return $http.post('http://localhost:3000/steps', step)
            .then(handleResponse)
        },

        getStep: function (id) {
            if (!id) {
                return $q.resolve({
                    name: '',
                    description: '',
                    start: false,
                    actions: []
                })
            }
            return $http.get('http://localhost:3000/steps/' + id)
            .then(handleResponse)
        },

        setStep: function (step) {
           if (step.id) {
                return $http.put('http://localhost:3000/steps/' + step.id, step)
                .then(handleResponse)
            } else {
                return $http.post('http://localhost:3000/steps/', step)
                .then(handleResponse)
            }
        },

        deleteStep:function(id){
            return $http.delete('http://localhost:3000/steps/' + id)
            .then(handleResponse)
        },

        action: function (action, user) {
            return ActionService[action.type](user, action.params)
        }
    }
}
