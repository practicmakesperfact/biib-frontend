import { useEffect, useState } from "react";

export function useCurrencyRates(base = "USD") {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.exchangerate.host/latest?base=${base}`
        );
        const data = await res.json();
        if (data && data.rates) {
          setRates(data.rates);
        } else {
          setError("Failed to load exchange rates");
        }
      } catch (err) {
        setError("Network error while fetching currency rates");
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
  }, [base]);

  return { rates, loading, error };
}
