import { useState, useEffect, useCallback } from 'react';
import { FIND, process } from '../Services/Api';

export const useFetchData = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await process(FIND, path, {}, {});

    if (response?.data) {
        setData(response.data);
    } else {
      console.log('Error', `No se pudo consultar hacia ${path}`);
    }

    setLoading(false);
  }, [process]);

  useEffect(() => {
    getData();
  }, [getData]);

  const update = () => getData();

  return [data, loading, update];
}