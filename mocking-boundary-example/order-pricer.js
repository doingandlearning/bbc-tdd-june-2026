// --- Domain logic. "Code you own" in the diagram. ---
//
// OrderPricer owns the interface it depends on: anything passed in as
// rateLookup just needs a getRate(currencyCode) -> Promise<number>.
// OrderPricer never knows or cares how that number gets produced.

export default class OrderPricer {
	constructor(rateLookup) {
		this.rateLookup = rateLookup;
	}

	async priceInUsd(amount, currencyCode) {
		if (typeof amount !== "number" || amount < 0) {
			throw new Error("Invalid amount.");
		}

		if (currencyCode === "USD") {
			return round2(amount);
		}

		const rate = await this.rateLookup.getRate(currencyCode);

		if (typeof rate !== "number" || rate <= 0) {
			throw new Error(`No usable rate for ${currencyCode}.`);
		}

		return round2(amount * rate);
	}
}

function round2(value) {
	return Math.round(value * 100) / 100;
}
