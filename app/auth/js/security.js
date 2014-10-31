import Subscription from 'auth/js/subscription';

export default class Security {
    constructor(d) {
        this.name = d
    }

    subscribeToBeta(properties) {
        console.log('subscribeToBeta')
        properties.beta = true

        let subscription = new Subscription(properties);
        return subscription.save()
    }

}