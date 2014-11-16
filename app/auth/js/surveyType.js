export default class SurveyType {
    constructor(properties = {}) {
        Object.assign(this, properties);
    }

    static get(name) {
        console.log('getting' );
        let $http = angular.injector(['ng']).get('$http');

        let url = 'http://localhost:8080/rigel/surveys/'+name;
        return $http.get(url).then(result => {
            console.log("returned-->" + JSON.stringify(result.data))

            let surveyType = new SurveyType();
            Object.assign(surveyType, result.data);

            console.log('after get: ' + JSON.stringify(surveyType));
            return surveyType;
        });
    }

}