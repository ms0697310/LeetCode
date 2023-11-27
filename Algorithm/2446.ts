function haveConflict(event1: string[], event2: string[]): boolean {
    let st1 = +event1[0].substring(0, 2) * 60 + +event1[0].substring(3, 5);
    let st2 = +event2[0].substring(0, 2) * 60 + +event2[0].substring(3, 5);
    let et1 = +event1[1].substring(0, 2) * 60 + +event1[1].substring(3, 5);
    let et2 = +event2[1].substring(0, 2) * 60 + +event2[1].substring(3, 5);
    return et1 >= st2 && et2 >= st1;
}
haveConflict(["01:00", "02:00"], ["01:20", "03:00"]);
