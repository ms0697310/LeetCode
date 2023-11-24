function maxCoins(piles: number[]): number {
    return piles
        .sort((a, b) => b - a)
        .slice(0, (piles.length * 2) / 3)
        .reduce((sum, v, i) => sum + v * (i % 2), 0);
}
