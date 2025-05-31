import axios from "axios";
import { useState, useEffect } from "react";

export default function useStaysData(staysData) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [staysCount, setStaysCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(staysData);
        setData(response.data);
        setStaysCount(response.data.length);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [staysData]);
  return [data, error, loading, staysCount];
}
