// --- Composition root. ---
//
// This is the only place in the example that constructs the real
// pieces and wires them together. Everywhere else, OrderPricer only
// ever sees the interface - a fake in its own tests, the real
// FxRateAdapter here.

import OrderPricer from "./order-pricer.js";
import FxRateAdapter from "./fx-rate-adapter.js";

const pricer = new OrderPricer(new FxRateAdapter());

const priceUsd = await pricer.priceInUsd(100, "GBP");
console.log(`£100 -> $${priceUsd}`);
