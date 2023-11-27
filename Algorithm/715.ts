class RangeModule {
    intervals: number[][];
    constructor() {
        this.intervals = [];
    }

    addRange(left: number, right: number): void {
        this.intervals = insert(this.intervals, [left, right]);

        function insert(
            intervals: number[][],
            newInterval: number[]
        ): number[][] {
            let newIntervals: number[][] = [];
            intervals = intervals
                .concat([newInterval])
                .sort((a, b) => a[0] - b[0]);
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
    }

    queryRange(left: number, right: number): boolean {
        return this.intervals.some(
            (interval) => right <= interval[1] && left >= interval[0]
        );
    }

    removeRange(left: number, right: number): void {
        let l = this.intervals.length;
        let newIntervals: number[][] = [];
        this.intervals.forEach((interval, i) => {
            if (right >= interval[1] && left <= interval[0]) {
            } else if (right >= interval[0] && left <= interval[0]) {
                newIntervals.push([right, interval[1]]);
            } else if (right >= interval[1] && left <= interval[1]) {
                newIntervals.push([interval[0], left]);
            } else if (right < interval[1] && left > interval[0]) {
                newIntervals.push([right, interval[1]]);
                newIntervals.push([interval[0], left]);
            } else {
                newIntervals.push(interval);
            }
        });
        this.intervals = newIntervals;
    }
}
