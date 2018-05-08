import {timer} from "rxjs/observable/timer";
import {mapTo, share, tap} from "rxjs/operators";

/**
 * Share source among multiple subscribers.
 */
function myShare() {
    //emit value in 1s
    const source = timer(1000);

    //log side effect, emit result
    const example = source.pipe(
        // tap() performs side effect:
        // Intercepts each emission on the source and runs a function,
        // but returns an output which is identical to the source as long as errors don't occur.
        tap(() => console.log('***SIDE EFFECT***')),
        mapTo('***RESULT***')
    );

    // not shared
    example.subscribe(val => console.log(val));
    example.subscribe(val => console.log(val));

    //share observable among subscribers
    const sharedExample = example.pipe(share());
    sharedExample.subscribe(val => console.log(val));
    sharedExample.subscribe(val => console.log(val));
}
myShare();