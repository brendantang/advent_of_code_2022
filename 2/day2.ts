export enum RPS {
  Rock,
  Paper,
  Scissors,
}

export enum Outcome {
  Win = "Win",
  Loss = "Loss",
  Draw = "Draw",
}

export function parseCharacter(c: string): RPS {
  switch (c) {
    case "A":
    case "X":
      return RPS.Rock;
    case "B":
    case "Y":
      return RPS.Paper;
    case "C":
    case "Z":
      return RPS.Scissors;
    default:
      throw new Error("Invalid character");
  }
}

export function result(theirs: RPS, mine: RPS): Outcome {
  if (theirs === mine) {
    return Outcome.Draw;
  }
  if (mine === RPS.Rock && theirs === RPS.Scissors) {
    return Outcome.Win;
  }
  if (theirs === RPS.Rock && mine === RPS.Scissors) {
    return Outcome.Loss;
  }
  if (mine > theirs) {
    return Outcome.Win;
  }
  return Outcome.Loss;
}

function outcomeScore(outcome: Outcome): number {
  switch (outcome) {
    case Outcome.Win:
      return 6;
    case Outcome.Draw:
      return 3;
    case Outcome.Loss:
      return 0;
  }
}
function choiceScore(choice: RPS): number {
  switch (choice) {
    case RPS.Rock:
      return 1;
    case RPS.Paper:
      return 2;
    case RPS.Scissors:
      return 3;
  }
}

function score(theirs: RPS, mine: RPS): number {
  return choiceScore(mine) + outcomeScore(result(theirs, mine));
}

function parseGames(s: string): [RPS, RPS][] {
  const list: [RPS, RPS][] = [];
  s.split("\n").forEach((s_) => {
    const line = s_.match(/[A-Z]/g);
    if (line?.length == 2) {
      list.push([parseCharacter(line[0]), parseCharacter(line[1])]);
    }
  });
  return list;
}

function totalScore(input: string): number {
  return parseGames(input).reduce((acc, [theirs, mine]) => {
    return acc + score(theirs, mine);
  }, 0);
}

const input = await Deno.readTextFile("./input.txt");
console.log(totalScore(input));
