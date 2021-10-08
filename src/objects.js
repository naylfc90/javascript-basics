const createPerson = (name, age) => {
  // your code here
  const Person = {
    name,
    age
  };
  return Person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  // built in objects function to see if property exists
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  let ageCheck;
  if (person.age > 65) {
    ageCheck = true;
  } else {
    return false;
  }
  return ageCheck;
};

const getAges = people => {
  // your code here
  const result = people.map(a => a.age);
  return result;
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
  // const result = people.map(a => a.age);
  // let sum;
  // for (let i = 0; i < result.length; i += 1) {
  //   sum += result[i];
  // }
  // number: 
  // number average = sum / result.length;
  // return average;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const Person = {
    name,
    age,
    introduce: a => {
      return `Hi ${a}, my name is ${name} and I am ${age}!`;
    }
  };
  return Person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
