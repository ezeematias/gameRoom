export class Poll {
    lastName: string;
    name: string;
    age: number;
    cellPhone: number;
    comments: string;

    constructor(lastName: string, name: string, age: number, cellPhone: number, comments: string) {
        this.lastName = lastName;
        this.name = name;
        this.age = age;
        this.cellPhone = cellPhone;
        this.comments = comments;
    }
}