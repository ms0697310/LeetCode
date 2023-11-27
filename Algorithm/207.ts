function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let indeg: number[] = new Array(numCourses).fill(0);
    let outNode: number[][] = new Array(numCourses).fill([]).map(() => []);
    prerequisites.forEach((prereq) => {
        indeg[prereq[1]]++;
        outNode[prereq[0]].push(prereq[1]);
    });
    let count = 0;
    indeg.forEach((deg, i) => {
        if (deg == 0) bfs(i);
    });
    return count == numCourses;
    function bfs(index: number) {
        indeg[index] = -1;
        count++;
        outNode[index].forEach((v) => {
            indeg[v]--;
            if (indeg[v] == 0) {
                bfs(v);
            }
        });
    }
}
