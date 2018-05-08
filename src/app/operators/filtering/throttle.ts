import {interval} from "rxjs/observable/interval";
import {map, throttle} from "rxjs/operators";

/**
 * Emit value only when duration, determined by provided function, has passed.
 */
function myThrottle() {

    const source = interval(100);

    const example = source
        .pipe(
            throttle((val: number) =>
                    new Promise<number>(resolve =>
                        setTimeout(() => resolve( val),  500
                        ))),
            map(val => `Throttled off Promise: ${val}`)
            );


    example.subscribe(val => console.log(val));

}
myThrottle();