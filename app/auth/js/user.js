export default class User {
    constructor(properties) {
        Object.assign(this, properties);
    }

    load() {
        console.log('laoding' + JSON.stringify(this));
        let $http = angular.injector(['ng']).get('$http');

        let url = 'http://localhost:8080/rigel/users/me?accessToken='+this.authorization.access_token;
        return $http.get(url).then(result => {
            console.log("returned-->" + JSON.stringify(result.data))

            Object.assign(this, result.data);

            console.log('after get: ' + JSON.stringify(this));
            return this;
        });
    }

}