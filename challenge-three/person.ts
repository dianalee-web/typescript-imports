export let person = {
  firstName: 'Elias',
  lastName: 'Telahun',
};

export function greet(name) {
  return `Nice to meet you, ${this.firstName}.`;
}
