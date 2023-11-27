function findCircleNum(isConnected: number[][]): number {
    let count = 0;
    let l = isConnected.length;
    let connected: boolean[] = new Array(l).fill(false);
    for (let index = 0; index < l; index++) {
        if (connected[index]) {
            continue;
        } else {
            count++;
            bfs(index);
        }
    }

    return count;

    function bfs(index: number) {
        connected[index] = true;
        isConnected[index].forEach((v, i, arr) => {
            if (v > 0) {
                arr[i] *= -1;
                if (i != index) bfs(i);
            }
        });
    }
}
