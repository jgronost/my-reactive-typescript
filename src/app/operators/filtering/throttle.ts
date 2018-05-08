import {interval} from "rxjs/observable/interval";
import {map, throttle} from "rxjs/operators";

function myThrottle() {

    //emit value every 1 second
    const source = interval(100);

    //when promise resolves emit item from source
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