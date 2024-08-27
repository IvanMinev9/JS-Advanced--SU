class JobOffers {
  jobCandidates = [];
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
  }

  jobApplication(candidates) {
    for (const person of candidates) {
      let [name, education, yearsExp] = person.split("-");

      let existCandidate = this.jobCandidates.find((person) => person.name === name);
      yearsExp = Number(yearsExp);

      if (existCandidate) {
        if (existCandidate.yearsExp !== `hired` && existCandidate.yearsExp < yearsExp) {
          existCandidate.yearsExp = yearsExp;
        }
      } else {
        this.jobCandidates.push({
          name,
          education,
          yearsExp,
        });
      }
    }

    let messages = `You successfully added candidates: `;

    this.jobCandidates.forEach((person, i, self) => {
      messages += i < self.length - 1 ? `${person.name}, ` : `${person.name}`;
    });

    return messages;
  }

  jobOffer(chosenPerson) {
    let [name, minimalExp] = chosenPerson.split(`-`);
    const currentPerson = this.jobCandidates.find((person) => person.name === name);

    if (!currentPerson) {
      throw new Error(`${name} is not in the candidates list!`);
    } else if (minimalExp > currentPerson.yearsExp) {
      throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
    }

    currentPerson.yearsExp = `hired`;

    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    let currentPerson = this.jobCandidates.find((person) => person.name === name);

    if (!currentPerson) {
      throw new Error(`${name} is not in the candidates list!`);
    } else if (currentPerson.education === `Bachelor`) {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (currentPerson.education === `Master`) {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates === 0) {
      throw new Error(`Candidate Database is empty!`);
    }

    let message = `Candidates list:\n`;

    this.jobCandidates
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((person) => {
        message += `${person.name}-${person.yearsExp}\n`;
      });

    return message;
  }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("Jordan Cole-4"));
// console.log(Jobs.salaryBonus("Jordan Cole"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.candidatesDatabase());
