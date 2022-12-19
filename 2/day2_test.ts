import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { Outcome, parseCharacter, result, RPS } from "./day2.ts";

Deno.test("day2", async (t) => {
  await t.step("parseCharacter", () => {
    const testCases = {
      "A": RPS.Rock,
      "B": RPS.Paper,
      "C": RPS.Scissors,
      "X": RPS.Rock,
      "Y": RPS.Paper,
      "Z": RPS.Scissors,
    };
    Object.entries(testCases).forEach(([char, expected]) => {
      assertEquals(expected, parseCharacter(char));
    });
  });
  await t.step("result", () => {
    const testCases: [RPS, RPS, Outcome][] = [
      [RPS.Rock, RPS.Rock, Outcome.Draw],
      [RPS.Rock, RPS.Paper, Outcome.Win],
      [RPS.Rock, RPS.Scissors, Outcome.Loss],
      [RPS.Paper, RPS.Rock, Outcome.Loss],
      [RPS.Paper, RPS.Paper, Outcome.Draw],
      [RPS.Paper, RPS.Scissors, Outcome.Win],
      [RPS.Scissors, RPS.Rock, Outcome.Win],
      [RPS.Scissors, RPS.Paper, Outcome.Loss],
      [RPS.Scissors, RPS.Scissors, Outcome.Draw],
    ];
    testCases.forEach(([theirs, mine, expected]) => {
      const got = result(theirs, mine);
      assertEquals(
        expected,
        got,
        `theirs: ${theirs}, mine: ${mine}, expected: ${expected}, got: ${got}`,
      );
    });
  });
});
