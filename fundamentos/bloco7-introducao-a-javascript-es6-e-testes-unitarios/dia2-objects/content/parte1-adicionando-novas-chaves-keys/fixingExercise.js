const addNewKeyInObject = (object, objectKeyName, objectKeyValue) => object[objectKeyName] = objectKeyValue;

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

addNewKeyInObject(customer,'address','Rua tal');

console.log(customer);