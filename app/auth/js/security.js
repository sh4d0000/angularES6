import Registration from 'auth/js/subscription';
import User from 'auth/js/user';

class Security {
    constructor(params) {
        this.user = null;
    }

    subscribeToBeta(properties) {
        console.log('subscribeToBeta')

        let registration = new Registration(properties);
        return registration.save()
    }

    activate(params) {
        console.log('activate')

        return params.registration.update()
    }

    login(params) {
        console.log('logging in' + JSON.stringify(params));
        let $http = angular.injector(['ng']).get('$http');
        let user = params.user;
        let self = this;

        let url = 'http://localhost:8080/rigel/oauth/token?grant_type=password&client_id=bellatrix&username=' + user.alias + '&password=' + user.password + '&scope=read';
        return $http.get(url).then(result => {
            console.log("returned-->" + JSON.stringify(result.data))

            let user = new User({authorization: {}});
            Object.assign(user.authorization, result.data);
            return user.load().then(user => {
                console.log('after load: security-->' + JSON.stringify(self));
                console.log('after load: user-->' + JSON.stringify(user));

                self.user = user;
                console.log('after load: security-->' + JSON.stringify(self));

            });
        });
    }


}
let security = new Security()
export default security