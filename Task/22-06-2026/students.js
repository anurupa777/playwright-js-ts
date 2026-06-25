class Playwright2x {
    static batch = "Playwright2x";
    #age;
    name;
    batch;

    constructor(name, age, batch = Playwright2x.batch) {
        this.name = name;
        this.#age = age;
        this.batch = batch;
    }

    static printDetails(name, age, batch = Playwright2x.batch) {
        return name + '\t' + age + '\t' + batch;
    }

    getAge() {
        return this.#age;
    }
}

console.log(Playwright2x.batch);
const batchmember1 = Playwright2x.printDetails("Anurupa", 30);
console.log(batchmember1);

const student = new Playwright2x("Amit", 35);
console.log(student);
console.log(student.getAge());

