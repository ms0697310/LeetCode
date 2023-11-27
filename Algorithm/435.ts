function eraseOverlapIntervals(intervals: number[][]): number {
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let current = -50001;
    let count = 0;
    for (const interval of intervals) {
        if (current <= interval[0]) {
            count++;
            current = interval[1];
        }
    }
    return intervals.length - count;
}
