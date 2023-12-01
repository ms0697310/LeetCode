function numberOfWays(corridor: string): number {
    let cCount = 0;
    let total = 1;
    let l = -1;
    let n = Math.pow(10, 9) + 7;
    for (let index = 0; index < corridor.length; index++) {
        const char = corridor[index];
        if (char == "S") {
            cCount++;
            if (cCount % 2 == 0) l = index;
            if (cCount > 1 && cCount % 2 == 1) {
                total *= (index - l) % n;
                total = total % n;
            }
        }
    }
    if (cCount % 2 == 1 || cCount == 0) return 0;
    return total;
}
