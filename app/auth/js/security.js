import Registration from 'auth/js/subscription';

class Security {
    constructor(d) {
        this.name = d
    }

    subscribeToBeta(properties) {
        console.log('subscribeToBeta')

        let registration = new Registration(properties);
        return registration.save()
    }

    activate(params) {
        console.log('activate')

        return params.registration.update()
    }


}
let security = new Security()
export default security