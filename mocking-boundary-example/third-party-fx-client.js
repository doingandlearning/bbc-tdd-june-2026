// --- "External system" in the diagram. Outside your control. ---
//
// Stand-in for a vendor SDK you don't own. Real ones look like this:
// a response shape you didn't choose, latency you can't predict, and
// failure modes that are someone else's decision, not yours.
// Nothing in here is something you'd ever unit test against directly.

export class VendorRateError extends Error {}

export async function fetchRate(currencyCode) {
	await delay(20 + Math.random() * 30); // jitter you can't predict

	if (currencyCode === "GBP") {
		return { data: { rate: 0.79, asOf: Date.now() }, meta: { provider: "acme-fx" } };
	}

	if (currencyCode === "EUR") {
		return { data: { rate: 0.92, asOf: Date.now() }, meta: { provider: "acme-fx" } };
	}

	throw new VendorRateError(`acme-fx: unsupported currency "${currencyCode}"`);
}

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
