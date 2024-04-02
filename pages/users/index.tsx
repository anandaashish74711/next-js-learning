import React, { useEffect, useState } from "react";


interface Product {
    id: number;
    title: string;
  
}

const UserPage = () => {
    const [users, setUsers] = useState<Product[]>([]); 
    
    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await fetch('https://dummyjson.com/products');
                const jsonData = await data.json();
                setUsers(jsonData.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Product Titles:</h1>
            <ul>
                {users && users.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
