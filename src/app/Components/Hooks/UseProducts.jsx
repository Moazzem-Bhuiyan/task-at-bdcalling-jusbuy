import { useEffect, useState } from "react";


const UseProducts = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
      const newproduct = async () => {
        const res = await fetch("/product.json");
        const data = await res.json();
        setProduct(data);
      };
  
      newproduct();
    }, []);

    return [products]
   
};

export default UseProducts;