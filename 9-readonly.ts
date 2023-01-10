// readonly parameter
/* Defining an interface. */
interface fruittype {
  /* Making the property `name` readonly. 
  so the value for that member cannot be changed further. */
  readonly name: string;
  color: string;
    /* An optional property. */
  price?: number;

  /* An optional property. */
  allseason?: boolean;
}

function getfruits(fruit: fruittype) {
  return fruit.name + " is " + fruit.color;
}
let fruit1: fruittype = { name: "apple", color: "red" };
console.log(fruit1.name);
// fruit1.name="strawberry";
// console.log(fruit1.name);

console.log(getfruits(fruit1));
