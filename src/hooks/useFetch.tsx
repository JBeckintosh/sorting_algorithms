import { useState, useEffect } from 'react';

const useFetch = (url: string, query: string) => {
    const [ data, setData ] = useState<any>();
    
    useEffect(() => {
        if (url === null) return;

        const fetchData = async () => {
            const response = await fetch(url + query);
            const data = await response.json();
            setData(data);
        }

        fetchData();    
    }, [url]);

    return { data };
}

export default useFetch;