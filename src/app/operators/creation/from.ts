import {from} from "rxjs/observable/from";

function myFrom() {
//emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);

    arraySource.subscribe(val => console.log(val));
}
myFrom();