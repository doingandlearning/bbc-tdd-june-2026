export default class BowlingGame {
	constructor() {
		this.rolls = [];
	}

	roll(pins) {
		if (typeof (pins) !== "number") {
			throw new Error("Invalid roll value.")
		}
		this.rolls.push(pins)
	}

	isSpare(frameIndex) {
		return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
	}

	isStrike(frameIndex) {
		return this.rolls[frameIndex] === 10;
	}

	strikeBonus(frameIndex) {
		return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
	}

	spareBonus(frameIndex) {
		return this.rolls[frameIndex + 2];
	}

	get score() {
		let score = 0;
		let frameIndex = 0;

		for (let frame = 0; frame < 10; frame++) {
			if (this.isStrike(frameIndex)) {
				score += 10 + this.strikeBonus(frameIndex);
				frameIndex += 1;
			}
			else if (this.isSpare(frameIndex)) {
				score += 10 + this.spareBonus(frameIndex);
				frameIndex += 2;
			} else {
				score += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
				frameIndex += 2;
			}
		}
		return score;
	}
}