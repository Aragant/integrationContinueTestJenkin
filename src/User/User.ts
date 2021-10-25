export class User{
    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    ageIsValid(): Boolean {
        return this.age > 13;
    }
    
}