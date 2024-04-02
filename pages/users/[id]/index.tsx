import { useRouter } from "next/router";
import useSWR from "swr";

interface Product {
    id: number;
    // Add other properties if needed
}

const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

const UserInfo = () => {
    const router = useRouter();
    const { data: users, error } = useSWR<Product[]>(router.query.id ? `https://dummyjson.com/products/${router.query.id}` : null, fetcher);

    if (error) return <div>Error loading user data</div>;
    if (!users) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Info:</h1>
            {users.map(user => (
                <p key={user.id}>ID: {user.id}</p>
                {/* Render other user info here */}
            ))}
        </div>
    );
};

export default UserInfo;
