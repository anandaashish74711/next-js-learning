import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link"; // Import Link from next/link

interface Product {
  id: number;
  title: string;
  // Add other properties if needed
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const UserInfo = () => {
  const router = useRouter();
  const { data: product, error } = useSWR<Product>(router.query.id ? `https://dummyjson.com/products/${router.query.id}` : null, fetcher);

  if (error) return <div>Error loading product data</div>;
  if (!product) return <div>Loading...</div>;

  // Render details for the single product
  return (
    <div>
      <h1>{product.title}</h1>
      <p>ID: {product.id}</p>
     
    </div>
  );
};

export default UserInfo;
