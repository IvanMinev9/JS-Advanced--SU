class Person {
  constructor(fName, lName, age, email) {
    this.name = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email;
  }

  toString() {
    console.log(`${this.name} ${this.lastName} ${this.age}, ${this.email}`);
  }
}
const person = new Person("John", "Doe", "27", "johndoe@gmail.com");
person.toString();
