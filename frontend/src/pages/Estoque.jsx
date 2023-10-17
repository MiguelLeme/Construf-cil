import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function Estoque() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/products");
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <Header />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Size Unit</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                {product.size} {product.sizeunit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
