// --- Adapter in the diagram. "Implements your interface." ---
//
// The only file in this example allowed to import the vendor client.
// Its job is purely translation: whatever shape acme-fx hands back,
// FxRateAdapter turns it into the plain number OrderPricer expects.

import { fetchRate, VendorRateError } from "./third-party-fx-client.js";

export default class FxRateAdapter {
	async getRate(currencyCode) {
		try {
			const response = await fetchRate(currencyCode);
			return response.data.rate;
		} catch (error) {
			if (error instanceof VendorRateError) {
				return null; // translate a vendor failure into "no rate available"
			}
			throw error;
		}
	}
}
