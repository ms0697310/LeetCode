export function test(input: any, output: any, resolve: Function) {
    compareAnswer(resolve(input), output);
}
export function compareAnswer(myAns: any, ans: any) {
    console.log(JSON.stringify(myAns) === JSON.stringify(ans), "myAns=", myAns, ", ans=", ans);
}
