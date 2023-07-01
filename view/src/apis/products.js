export const fetchProducts = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/products`,
        {
            'Content-Type': 'application/json',   
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return {error};
    };
};