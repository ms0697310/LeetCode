import { compareAnswer } from "../Testing/unitTest";

function unhappyFriends(
    n: number,
    preferences: number[][],
    pairs: number[][]
): number {
    let unhappyFriendsCount = 0;
    let ranked: number[][] = Array(n).fill([]);
    ranked.forEach((v, i) => {
        ranked[i] = Array(n).fill([]);
        ranked[i][i] = 9999;
        preferences[i].forEach((v, pi) => (ranked[i][v] = pi));
    });
    let partnerArr: number[] = Array(n);
    pairs.forEach((p, i) => {
        partnerArr[p[0]] = p[1];
        partnerArr[p[1]] = p[0];
    });
    for (let index = 0; index < n; index++) {
        let rank = ranked[index][partnerArr[index]];
        for (let ri = rank - 1; ri >= 0; ri--) {
            let newPartner = preferences[index][ri];
            if (
                ranked[newPartner][index] <
                ranked[newPartner][partnerArr[newPartner]]
            ) {
                unhappyFriendsCount++;
                break;
            }
        }
    }
    return unhappyFriendsCount;
}
compareAnswer(
    unhappyFriends(
        4,
        [
            [1, 2, 3],
            [3, 2, 0],
            [3, 1, 0],
            [1, 2, 0],
        ],
        [
            [0, 1],
            [2, 3],
        ]
    ),
    2
);
compareAnswer(unhappyFriends(2, [[1], [0]], [[1, 0]]), 0);
compareAnswer(
    unhappyFriends(
        4,
        [
            [1, 3, 2],
            [2, 3, 0],
            [1, 3, 0],
            [0, 2, 1],
        ],
        [
            [1, 3],
            [0, 2],
        ]
    ),
    4
);
