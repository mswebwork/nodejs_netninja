const people = ['Mateusz', 'Sylwia', 'Marcin', 'Diana', 'Kacper', 'Katarzyna', 'Konrad', 'Alicja'];
const ages = [20,25,30,35,40,45,50,55];

console.log(people);


module.exports = {
  // I method to export data
  // people: people,
  // ages: ages

  // II method to export data (shorter write, because variable, what I export is exacly describe what I export)
  people, ages
};