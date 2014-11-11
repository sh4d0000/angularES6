export default class Idea {
    constructor(properties = {}) {
        Object.assign(this, properties);
    }

    static all() {
        let $http = angular.injector(['ng']).get('$http');

        let url = 'http://localhost:8080/rigel/ideas';
        return $http.get(url).then(result => {
            console.log("returned-->" + JSON.stringify(result.data))
            let ideas = []

            result.data.forEach( element => {
                 ideas.push( Object.assign(new Idea(), element) );
            });


            console.log('after get: ' + JSON.stringify(this));
            return ideas;
        });
    }

    save() {
        console.log('save' + JSON.stringify(this))
        let $http = angular.injector(['ng']).get('$http');

        return $http.post('http://localhost:8080/rigel/ideas', this).then(result => {
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

        return $http.put('http://localhost:8080/rigel/ideas/' + this.id, this).then(result => {
            console.log('previous: ' + JSON.stringify(this))
            console.log("returned-->" + JSON.stringify(result.data))

            Object.assign(this, result.data);

            console.log('current: ' + JSON.stringify(this))
            return this
        });
    }


}