import {from} from "rxjs/observable/from";

/**
 * Turn an array, promise, or iterable into an observable.
 */
function myFrom() {
    const arraySource = from([1, 2, 3, 4, 5]);

    arraySource.subscribe(val => console.log(val));
}
myFrom();