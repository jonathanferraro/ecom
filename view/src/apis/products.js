export const fetchProducts = async () => {
    try {
        const res = await fetch('http://localhost:8000/api/products',
        {
            'Content-Type': 'application/json',   
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return {error};
    };
};