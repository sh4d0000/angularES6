export default class User {
    constructor(properties) {
        Object.assign(this, properties);
    }

    load() {
        let $http = angular.injector(['ng']).get('$http');

        // TODO use Authorization Header instead of query string
        let url = 'http://localhost:8080/rigel/users/me?accessToken='+this.authorization.access_token;
        return $http.get(url).then(result => {
            Object.assign(this, result.data);
            return this;
        });
    }

}