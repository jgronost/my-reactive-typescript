import {from} from "rxjs/observable/from";
import {distinctUntilChanged} from "rxjs/operators";

/**
 * Only emit when the current value is different than the last.
 */
function myDistinctUntilChanged() {
    //only output distinct values, based on the last emitted value
    const myArrayWithDuplicatesInARow = from([1, 1, 2, 2,  1, 2]);

    const distinctSub = myArrayWithDuplicatesInARow
        .pipe(distinctUntilChanged())
        .subscribe(val => console.log('DISTINCT SUB:', val));

    const nonDistinctSub = myArrayWithDuplicatesInARow
        .subscribe(val => console.log('NON DISTINCT SUB:', val));

    const sampleObject = {name: 'Test'};
    //Objects must be same reference
    const myArrayWithDuplicateObjects = from([
        sampleObject,
        sampleObject,
        {name: 'Test2'},
        {name: 'Test2'}
    ]);

    //only out distinct object by reference
    myArrayWithDuplicateObjects
        .pipe(distinctUntilChanged())
        .subscribe(val => console.log('DISTINCT OBJECTS:', val));

    // until compare function is provided
    myArrayWithDuplicateObjects
        .pipe(distinctUntilChanged((a: {name: string}, b: {name: string}) => a.name === b.name))
        .subscribe(val => console.log('DISTINCT OBJECTS by COMPARE:', val));
}
myDistinctUntilChanged();