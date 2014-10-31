import Subscription from 'auth/js/subscription';

export default class Security {
    constructor(d) {
        this.name = d
    }

    subscribeToBeta(email) {
        console.log('subscribeToBeta')

        let subscription = new Subscription(email, true);
        subscription.save()
    }

}