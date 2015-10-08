export default function UserService ($http, ActionService) {
    return {
    	resetUser=function(user){
    		user.life: 100,
    		user.gold: 0,
    	}
        life: 100,
        gold: 0
    }
}
