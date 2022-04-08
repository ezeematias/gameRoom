export class User {

    email: string;
    password: string;
    displayName: string;

    constructor(email: string = '', password: string = '', displayName: string = '') {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
    }
}
