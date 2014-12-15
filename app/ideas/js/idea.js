export default class Idea {
    constructor(properties = {}) {
        Object.assign(this, properties);
    }

    static all() {
        let $http = angular.injector(['ng']).get('$http');

        let url = 'http://localhost:8080/rigel/ideas';
        return $http.get(url).then(result => {
            let ideas = []

            result.data.forEach( element => {
                 ideas.push( Object.assign(new Idea(), element) );
            });


            console.log('after get: ' + JSON.stringify(this));
            return ideas;
        });
    }

    save() {
        let $http = angular.injector(['ng']).get('$http');

        return $http.post('http://localhost:8080/rigel/ideas', this).then(result => {
            Object.assign(this, result.data);
            return this
        });
    }

    update() {
        let $http = angular.injector(['ng']).get('$http');

        return $http.put('http://localhost:8080/rigel/ideas/' + this.id, this).then(result => {
            Object.assign(this, result.data);
            return this
        });
    }


}