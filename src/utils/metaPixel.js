const purchaseTrackedKey = 'creatorstudio:purchase-tracked';

export const trackLead = () => {
  window.fbq?.('track', 'Lead');
};

export const trackCheckout = () => {
  try {
    window.sessionStorage.removeItem(purchaseTrackedKey);
  } catch {
    // Checkout still works when browser storage is unavailable.
  }
  window.fbq?.('track', 'InitiateCheckout');
};

export const trackPurchase = (amount, paymentId) => {
  if (typeof window.fbq !== 'function') return;

  const storageKey = paymentId ? `${purchaseTrackedKey}:${paymentId}` : purchaseTrackedKey;
  try {
    const storage = paymentId ? window.localStorage : window.sessionStorage;
    if (storage.getItem(storageKey)) return;
    storage.setItem(storageKey, 'true');
  } catch {
    // The thank-you page still deduplicates the current history entry.
  }

  const purchase = {
    value: amount,
    currency: 'INR',
  };
  if (paymentId) {
    window.fbq('track', 'Purchase', purchase, { eventID: paymentId });
  } else {
    window.fbq('track', 'Purchase', purchase);
  }
};
