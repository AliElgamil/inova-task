import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData<t>(url: string) {
  const [data, setData] = useState<t>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get(url, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      });

    return () => controller.abort();
  }, [url]);
  return {
    data,
    loading,
  };
}
