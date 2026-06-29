import { test, expect } from "vitest";
import FxRateAdapter from "./fx-rate-adapter.js";

// Far fewer of these, and they're allowed to be slower - this is the
// one test file allowed to touch the real (here, simulated) vendor
// client. Its only job is proving the adapter satisfies the interface
// OrderPricer relies on, whatever shape the vendor hands back.

test("returns a plain number for a supported currency", async () => {
	const adapter = new FxRateAdapter();
	const rate = await adapter.getRate("GBP");
	expect(typeof rate).toBe("number");
});

test("translates a vendor failure into null rather than a vendor-specific error", async () => {
	const adapter = new FxRateAdapter();
	const rate = await adapter.getRate("ZZZ");
	expect(rate).toBeNull();
});
