const {
  VITE_PHARMACY_KEY: pharmacyKey,
  VITE_PAYSTACK_PUBLIC_KEY: paystack_pk,
  VITE_PHARMACY_URL: supabaseUrl,
} = import.meta.env;

export { pharmacyKey, supabaseUrl, paystack_pk };
