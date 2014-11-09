export default
class Registration {
    constructor(properties) {
        Object.assign(this, properties);
    }

    save() {
        console.log('save' + JSON.stringify(this))
        let $http = angular.injector(['ng']).get('$http');

        return $http.post('http://localhost:8080/rigel/registrations', this).then(result => {
            console.log('previous: ' + JSON.stringify(this))
            console.log("returned-->" + JSON.stringify(result.data))

            Object.assign(this, result.data);

            console.log('current: ' + JSON.stringify(this))
            return this
        });
    }

    update() {
        console.log('update' + JSON.stringify(this))
        let $http = angular.injector(['ng']).get('$http');

        return $http.put('http://localhost:8080/rigel/registrations/' + this.id, this).then(result => {
            console.log('previous: ' + JSON.stringify(this))
            console.log("returned-->" + JSON.stringify(result.data))

            Object.assign(this, result.data);

            console.log('current: ' + JSON.stringify(this))
            return this
        });
    }

}