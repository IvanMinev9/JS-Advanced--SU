class Persons {
  constructor(fName, lName, age, email) {
    this.name = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.name} ${this.lastName} ${this.age}, ${this.email}`;
  }
}

return [
  new Persons("Anna", "Simpson", 22, "anna@yahoo.com"),
  new Persons("SoftUni"),
  new Persons("Stephan", "Johnson", 25),
  new Persons("Gabriel", "Peterson", 24, "g.p@gmail.com"),
];
