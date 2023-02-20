export function test(input: any, output: any, resolve: Function) {
    let myAns = resolve(input);
    console.log(JSON.stringify(myAns) === JSON.stringify(output), myAns, output);
}
