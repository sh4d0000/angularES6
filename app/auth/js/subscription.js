export default class Registration {
    constructor(properties) {

        this.beta = false;
        Object.assign(this, properties);
    }

    save() {
        console.log('save' + JSON.stringify(this))
        let $http = angular.injector(['ng']).get('$http');

        return $http.post('http://localhost:8080/rigel/registration', this).then(result => {
            console.log('previous: ' + JSON.stringify(this))
            console.log("returned-->"+JSON.stringify(result.data))

            Object.assign(this, result.data);

            console.log('current: ' + JSON.stringify(this))
        });
    }
}