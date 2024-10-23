import { useEffect, useState } from "react";


const UseNewArrival = () => {

    const [newarrival, setNewArrival] = useState([]);

    useEffect(() => {
      const newArrival = async () => {
        const res = await fetch("/newarrival.json");
        const data = await res.json();
        setNewArrival(data);
      };
  
      newArrival();
    }, []);
  
return[newarrival]
    
};

export default UseNewArrival;