function merge(intervals: number[][]): number[][] {
    let newIntervals: number[][] = [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let end = intervals[0][1];
    let s = intervals[0][0];
    intervals.forEach((interval) => {
        if (interval[0] <= end) {
            end = Math.max(end, interval[1]);
            s = Math.min(s, interval[0]);
        } else {
            newIntervals.push([s, end]);
            s = interval[0];
            end = interval[1];
        }
    });
    newIntervals.push([s, end]);

    return newIntervals;
}
