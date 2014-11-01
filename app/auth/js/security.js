import Registration from 'auth/js/subscription';

class Security {
    constructor(d) {
        this.name = d
    }

    subscribeToBeta(properties) {
        console.log('subscribeToBeta')
        properties.beta = true

        let registration = new Registration(properties);
        return registration.save()
    }

}
let security = new Security()
export default security