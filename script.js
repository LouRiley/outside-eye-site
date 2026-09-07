// The Outside Eye — minimal site behaviour.
// Intentionally small: no build step, no dependencies.

// Keep the footer copyright year current.
var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// -----------------------------------------------------------------
// CHECKOUT LINK
// The two buttons/links with [data-role="checkout-link"] currently
// point at "#". Once you have a Stripe Payment Link, Gumroad link,
// or an intake form (Typeform/Tally) ready, either:
//   1) replace href="#" on those elements directly in index.html, or
//   2) set the URL below and this script will wire it up for you.
// -----------------------------------------------------------------
var CHECKOUT_URL = "https://buy.stripe.com/8x27sL8gGcTO3fy1h9gA800";

if (CHECKOUT_URL) {
  document.querySelectorAll('[data-role="checkout-link"]').forEach(function (el) {
    el.setAttribute("href", CHECKOUT_URL);
  });
}
