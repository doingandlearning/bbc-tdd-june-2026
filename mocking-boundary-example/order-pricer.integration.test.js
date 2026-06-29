import { test, expect } from "vitest";
import OrderPricer from "./order-pricer.js";
import FxRateAdapter from "./fx-rate-adapter.js";

// The one test file that wires the real adapter into the real domain
// object. Not testing business rules (order-pricer.test.js does that
// with a fake) and not testing vendor translation on its own
// (fx-rate-adapter.test.js does that) - just proving the two pieces
// actually fit together end to end.

test("prices a GBP order using the real adapter", async () => {
	const pricer = new OrderPricer(new FxRateAdapter());
	const priceUsd = await pricer.priceInUsd(100, "GBP");
	expect(priceUsd).toBe(79);
});
