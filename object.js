const object1 = {
    key1: 'value1',
    key2: 'value2'
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

const person1 ={
    first: 'mickey',
    last: 'mouse'
}
//to copy an object don't use 
//const person2 = person1 because you will copy the reference not the value 
const person2 = {...person1}
const person3 = Object.assign({}, person1)
//shalow copy
person2.first = "Donald"
person2.last = "Duck"
//deep copy use loadash library 

const person4 = {
    shoes : 'size10',
    ...person2,
}

console.log('person4 >>', person4)


///Object reference
//Objects and arrays they get mutated when they are passed by a function unlike Boolean, variables 

const herb = 'mint'

const vegetables = {
    lettuce: 6,
    tomatoes: 90,
    cucumber: 4
}

const fruit = {
    apple: 0,
    bananas: 5,
    melon: 900
}

const shoppingList = {
    ...vegetables,
    ...fruit
}

function makeJuice(data) {
    data.bananas = 400
    console.log('data after modifying the object data in the functon >>',data)
}


function makeHerbJuice(data) {
    data = 'thyme'
    console.log('data passing in a vairable function >>',data)
}

makeJuice(fruit)
console.log('the fruit object was modified after passing by the function >>', fruit)

makeHerbJuice(herb)
console.log('the variable was not modified after passing by the function unlike Object >>', herb)