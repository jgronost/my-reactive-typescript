import {ReplaySubject} from "rxjs/ReplaySubject";

function myReplaySubject() {

    const subject = new ReplaySubject(3); //  buffer 3 values for new subscribers

    subject.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });
    subject.next(0);
    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });

    subject.next(4);
}

myReplaySubject();