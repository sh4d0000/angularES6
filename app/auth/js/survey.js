export default class Survey {
    constructor(properties = {}) {
        Object.assign(this, properties);
    }

    static get(name) {
        let $http = angular.injector(['ng']).get('$http');

        let url = 'http://localhost:8080/rigel/surveys/'+name;
        return $http.get(url).then(result => {
            let survey = new Survey();
            Object.assign(survey, result.data);

            return survey;
        });
    }

}