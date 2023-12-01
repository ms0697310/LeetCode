function characterReplacement(s: string, k: number): number {
    let l = 0;
    let charC: { [key: string]: number } = {};
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (charC[s[i]] == undefined) {
            charC[s[i]] = 0;
        }
        charC[s[i]]++;
        maxLength = Math.max(maxLength, charC[s[i]]);

        if (i - l + 1 - maxLength > k) {
            charC[s[l++]]--;
        }
    }
    return Math.min(s.length, maxLength + k);
}
characterReplacement("ABCDE", 1);
