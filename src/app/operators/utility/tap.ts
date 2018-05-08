/**
 * Transparently perform actions or side-effects, such as logging.
 */
import {of} from "rxjs/observable/of";
import {map, tap} from "rxjs/operators";

function myTap() {

    const source = of(1, 2, 3, 4, 5);

    const example = source.pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(val => val + 10),
        tap(val => console.log(`AFTER MAP: ${val}`), err => console.log(`AFTER MAP FAILED ${err}`), () => console.log("AFTER MAP COMPLETED"))
    );

    example.subscribe(val => console.log(val));

}
myTap();