import {of} from "rxjs/observable/of";
import {scan} from "rxjs/operators";

function myScan() {
    const source = of(1, 2, 3);

    const example = source.pipe(
        scan((acc, curr) => acc + curr, 0)
    );

    example.subscribe(val => console.log(val));
}
myScan();