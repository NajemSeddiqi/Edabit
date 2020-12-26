class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (other.age > this.age) return `${other.name} is older than me.`;
    return other.age < this.age ? `${other.name} is younger than me.` : `${other.name} is the same age as me.`;
  }
}
