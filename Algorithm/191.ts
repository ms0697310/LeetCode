function hammingWeight(n: number): number {
    console.log(n);
    let count = 0;
    while (n > 0) {
        count += n % 2;
        console.log(n % 2);
        n /= 2;
    }
    return count / 2;
}
hammingWeight(5);
