import { User } from "../../User/User";


describe("Age", () =>{
    const user = new User("toto", "titi", 12);
    it("Should return true if user have 12 years old", () => {
        expect(user.ageIsValid()).toBe(false);
    });
})