import React from 'react';
import { CiHeart } from 'react-icons/ci';


const WishButton = () => {
    return (
        <div className='bg-white rounded-full flex justify-center p-1 hover:bg-primary hover:text-white'>

            <button className='text-3xl'><CiHeart /></button>
            
        </div>
    );
};

export default WishButton;