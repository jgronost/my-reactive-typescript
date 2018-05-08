import {from} from "rxjs/observable/from";
import {filter} from "rxjs/operators";

function myFilter() {
    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(filter(num => num % 2 === 0));
    example.subscribe(val => console.log(`Even number: ${val}`));

    const sourceTwo = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
    const exampleTwo = sourceTwo.pipe(filter((person: any) => person.age >= 30));
    exampleTwo.subscribe(val => console.log(`Over 30: ${val.name}`));
}
myFilter();