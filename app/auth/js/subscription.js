export default class Subscription {
    constructor(email, beta = false) {
        this.email = email;
        this.beta = beta;
    }

    save() {
        console.log('save' + this.email)

        let $http = angular.injector(['ng']).get('$http');
        $http.get('/someUrl');

    }
}