import {timer} from "rxjs/observable/timer";
import {combineLatest} from "rxjs/observable/combineLatest";

/**
 * When any observable emits a value, emit the latest value from each.
 */
function myCombineLatest(){
    //timerOne emits first value at 1s, then once every 4s
    const timerOne = timer(1000, 4000);
    //timerTwo emits first value at 2s, then once every 4s
    const timerTwo = timer(2000, 4000);
    //timerThree emits first value at 3s, then once every 4s
    const timerThree = timer(3000, 4000);

    //when one timer emits, emit the latest values from each timer as an array
    const combined = combineLatest(timerOne, timerTwo, timerThree);

    combined.subscribe(
        ([timerValOne, timerValTwo, timerValThree]) => {
            console.log(
                `Timer One Latest: ${timerValOne}, Timer Two Latest: ${timerValTwo}, Timer Three Latest: ${timerValThree}`
            );
        }
    );
}

myCombineLatest();