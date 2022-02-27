import React, { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  // TODO: remove any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, []);

  if (!data) return "No data found";
  return data;
};
