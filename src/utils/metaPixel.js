export const trackLead = () => {
  window.fbq?.('track', 'Lead');
};

export const trackCheckout = () => {
  window.fbq?.('track', 'InitiateCheckout');
};

export const trackPurchase = (amount) => {
  window.fbq?.('track', 'Purchase', {
    value: amount,
    currency: 'INR',
  });
};
