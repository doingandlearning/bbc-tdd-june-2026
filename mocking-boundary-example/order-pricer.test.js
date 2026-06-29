import { test, expect } from "vitest";
import OrderPricer from "./order-pricer.js";

// These never touch the vendor. They double OrderPricer's own
// interface (getRate), so every business rule below runs in
// milliseconds and can't fail because a network call was slow or
// acme-fx was down. This is where most of your test cases should live.

function fakeRateLookup(rate) {
	return { getRate: async () => rate };
}

test("converts using the supplied rate", async () => {
	const pricer = new OrderPricer(fakeRateLookup(0.8));
	expect(await pricer.priceInUsd(100, "GBP")).toBe(80);
});

test("skips the lookup entirely for USD", async () => {
	const pricer = new OrderPricer(fakeRateLookup(NaN)); // would blow up if ever called
	expect(await pricer.priceInUsd(50, "USD")).toBe(50);
});

test("rejects a negative amount", async () => {
	const pricer = new OrderPricer(fakeRateLookup(0.8));
	await expect(pricer.priceInUsd(-10, "GBP")).rejects.toThrow("Invalid amount.");
});

test("rejects when no rate is available", async () => {
	const pricer = new OrderPricer(fakeRateLookup(null));
	await expect(pricer.priceInUsd(10, "XYZ")).rejects.toThrow("No usable rate");
});

test("rounds to two decimal places", async () => {
	const pricer = new OrderPricer(fakeRateLookup(0.7913));
	expect(await pricer.priceInUsd(33, "GBP")).toBe(26.11);
});
