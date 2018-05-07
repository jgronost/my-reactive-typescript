import {of} from "rxjs/observable/of";
import {every} from "rxjs/operators";

function myEvery() {

    of(1, 2, 3, 4, 5)
        .pipe(
            //is every value even?
            every(val => val % 2 === 0)
        ).subscribe(val => console.log(val));

    of(2, 4, 6)
        .pipe(
            //is every value even?
            every(val => val % 2 === 0)
        ).subscribe(val => console.log(val))
}
myEvery();
