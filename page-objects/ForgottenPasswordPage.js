import { Selector, t } from 'testcafe';

class ForgottenPasswordPage {
    constructor() {
        this.userEmail = Selector('#user_email');
        this.message = Selector('div');
    }

    async submitEmail(email) {
        await t
            .typeText(this.userEmail, email, { paste: true }) //Dont forget to add this.!!!!
            .pressKey('enter');
    }

}

export default ForgottenPasswordPage;