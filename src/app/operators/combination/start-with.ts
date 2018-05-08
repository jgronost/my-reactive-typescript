import {interval} from "rxjs/observable/interval";
import {startWith} from "rxjs/operators";


/**
 * Emit given value first.
 */
function myStartWith() {

    //emit values in sequence every 1s
    const source = interval(1000);

    const example = source.pipe(startWith(-3, -2, -1));
    example.subscribe(val => console.log(val));
}
myStartWith()