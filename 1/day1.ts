export function parseList(s: string): number[] {
  // split on empty blank lines
  return s.split("\n\n").map((s_) => {
    // split on line breaks
    return s_.split("\n").reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue);
    }, 0);
  });
}

export function max(list: number[]): number {
  return list.reduce((accumulator, currentValue) => {
    if (accumulator > currentValue) {
      return accumulator;
    }

    return currentValue;
  }, 0);
}

export function top3(list: number[]): number[] {
  return list.sort((a, b) => b - a).slice(0, 3);
}

export function sum(list: number[]): number {
  return list.reduce((acc, cur) => acc + cur);
}

const input = await Deno.readTextFile("./input.txt");

console.log(max(parseList(input)));
console.log(sum(top3(parseList(input))));
