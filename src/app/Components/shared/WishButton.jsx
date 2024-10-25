import React from 'react';
import { CiHeart } from 'react-icons/ci';


const WishButton = () => {

    const handlewish =()=>{

        alert("Item added wish list")
    }
    return (
        <div className='bg-white rounded-full flex justify-center p-1 hover:bg-primary hover:text-white'>

            <button onClick={handlewish} className='text-2xl'><CiHeart /></button>
            
        </div>
    );
};

export default WishButton;