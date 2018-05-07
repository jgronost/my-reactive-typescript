import {ReplaySubject} from "rxjs/ReplaySubject";

function myReplaySubjectTimeFramed() {

    const subject = new ReplaySubject(300, 500); //  buffer 300 values for new subscribers but only within 500ms

    subject.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });

    let i = 1;
    setInterval(() => subject.next(i++), 200);

    setTimeout(() => {
        subject.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });
    }, 1000);
}

myReplaySubjectTimeFramed();