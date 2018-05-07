import {interval} from "rxjs/observable/interval";
import {merge} from "rxjs/operators";
import "rxjs/add/operator/map";

function myMerge() {

    //emit every 2.5 seconds
    const first = interval(2500);
    //emit every 1 second
    const second = interval(1000);

    // const example = first.pipe(merge(second));
    const example = first.map(v => `First: ${v}` ).pipe(merge(second.map(v => `Second ${v}` )));

    example.subscribe(v => console.log(v));
}
myMerge();