export const fetchCart = async () => {
    try {
        const res = await fetch('http://localhost:8000/api/cart',
        {
            'Content-Type': 'application/json',   
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return {error};
    };
}