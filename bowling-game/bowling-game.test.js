import BowlingGame from './bowling-game.js';
import { test, expect, beforeEach } from "vitest";
/*
Test cases:
- If all frame scores are less than 10, no bonuses will be added.
- Valid type and value returned
- [x] Score is non-negative 
- [x] Roll all 0s the score will be 0
- [x] Roll all 1s the score will be 20
- [x] Game with a spare, 3 -> should have a final score of 16
*/

let game;

beforeEach(() => {
	game = new BowlingGame();
})

function rollMany(rolls, pins) {
	for (let i = 0; i < rolls; i++) {
		game.roll(pins);
	}
}

function rollSpare(first) {
	game.roll(first);
	game.roll(10 - first);
}

function rollStrike() {
	game.roll(10);
}

test("should return 0 for a game of all zereos", () => {
	rollMany(20, 0);
	expect(game.score).toBe(0);
})

test("should return 20 for a game of all ones", () => {
	rollMany(20, 1);
	expect(game.score).toBe(20);
})

test("should return 16 for a game of spare and a three directly after", () => {
	rollSpare(4);
	game.roll(3);
	rollMany(17, 0);
	expect(game.score).toBe(16);
})

test("should return 24 for a strike followed by a 3 and a 4", () => {
	rollStrike();
	game.roll(3);
	game.roll(4);
	rollMany(16, 0);
	expect(game.score).toBe(24);
})

test("should return 300 for a perfect game", () => {
	rollMany(12, 10);
	expect(game.score).toBe(300);
})

test("should throw error if passed a non-number", () => {
	expect(() => game.roll("not a number")).toThrowErrorMatchingInlineSnapshot(`[Error: Invalid roll value.]`);
})