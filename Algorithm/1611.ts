function minimumOneBitOperations(n: number): number {
    return re(n);
}

function re(n: number): number {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let binary = n.toString(2);

    let a = Math.pow(2, binary.length - 1);

    return a * 2 - 1 - re(n - a);
}
