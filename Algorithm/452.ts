function findMinArrowShots(points: number[][]): number {
    points = points.sort((a, b) => a[0] - b[0]);
    let right = Infinity;
    let count = 0;
    points.forEach((point) => {
        if (right < point[0]) {
            count++;
            right = Infinity;
        }
        if (right > point[1]) {
            right = point[1];
        }
    });
    return count + 1;
}
