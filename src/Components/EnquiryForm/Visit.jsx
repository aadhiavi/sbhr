import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Visit = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const countVisitors = async () => {
            try {
                const response = await axios.get('https://sbhr-back-1.onrender.com/api/v1/visit');
                setCount(response.data.count);
            } catch (error) {
                console.error("Error fetching visitor count", error);
            }
        };

        countVisitors();
    }, []);


    return (
        <div>
            <p style={{ textAlign: 'center', color: 'white' }}>Visit Count: {count}</p>
        </div>
    );
}

export default Visit
