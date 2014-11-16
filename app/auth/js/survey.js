export default class Survey {
    constructor(properties = {}) {
        Object.assign(this, properties);
    }

    static get(name) {
        console.log('getting' );
        let $http = angular.injector(['ng']).get('$http');

        let url = 'http://localhost:8080/rigel/surveys/'+name;
        return $http.get(url).then(result => {
            console.log("returned-->" + JSON.stringify(result.data))

            let survey = new Survey();
            Object.assign(survey, result.data);

            console.log('after get: ' + JSON.stringify(survey));
            return survey;
        });
    }

}