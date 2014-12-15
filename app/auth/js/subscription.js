export default
class Registration {
    constructor(properties) {
        Object.assign(this, properties);
    }

    save() {
        let $http = angular.injector(['ng']).get('$http');

        return $http.post('http://localhost:8080/rigel/registrations', this).then(result => {
            Object.assign(this, result.data);
            return this
        });
    }

    update() {
        let $http = angular.injector(['ng']).get('$http');

        return $http.put('http://localhost:8080/rigel/registrations/' + this.id, this).then(result => {
            Object.assign(this, result.data);
            return this
        });
    }

}