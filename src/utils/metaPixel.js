export const trackLead = () => {
  if (localStorage.getItem('lead_tracked')) return;

  if (typeof window.fbq !== 'function') return;

  window.fbq('track', 'Lead');

  localStorage.setItem('lead_tracked', 'true');
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