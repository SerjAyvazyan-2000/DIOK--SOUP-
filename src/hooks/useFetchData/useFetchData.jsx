import { useState, useEffect } from "react";
import api from "../../api.js";

export const useFetchData = (url, populate = "") => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await api.get(url + (populate ? `?populate=${populate}` : ""));
                if (response.status === 200) {
                    setData(response.data.data);
                } else {
                    setError(`Ошибка загрузки данных: ${response.status}`);
                }
            } catch (error) {
                setError(error.response?.data || error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, populate]);

    return { data, isLoading, error };
};