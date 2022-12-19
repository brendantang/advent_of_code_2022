import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { max, parseList, top3 } from "./day1.ts";

Deno.test("parse", () => {
  const input = "1\n1\n\n1\n2\n\n1\n2\n3";
  assertEquals([2, 3, 6], parseList(input));
});

Deno.test("max", () => {
  const input = [5, 2, 6];
  assertEquals(6, max(input));
});

Deno.test("top3", () => {
  const input = [5, 2, 6, 1, -3];
  assertEquals([6, 5, 2], top3(input));
});
