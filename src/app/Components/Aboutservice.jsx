import React from 'react';

import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const Aboutservice = () => {
    return (
        <div className=' my-20'>

<div className="md:flex justify-center gap-10 p-5">
        <div className='border p-5 space-y-3 hover:bg-primary hover:text-white'>
          <div className="flex justify-center ">
            <IoShieldCheckmarkOutline className="bg-primary text-6xl rounded-full border-8 p-2 text-white border-orange-300" />
          </div>
          <h1 className="text-center my-1 text-3xl font-bold">25k</h1>
          <p className="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='border p-5 space-y-3 hover:bg-primary hover:text-white ' >
          <div className="flex justify-center ">
            <IoShieldCheckmarkOutline className="bg-primary text-6xl rounded-full border-8 border-orange-300 p-2 text-white" />
          </div>
          <h1 className="text-center my-1 text-3xl font-bold">33k</h1>
          <p className="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='border p-5 space-y-3 hover:bg-primary hover:text-white'>
          <div className="flex justify-center ">
            <IoShieldCheckmarkOutline className="bg-primary text-6xl rounded-full border-8 p-2 text-white border-orange-300" />
          </div>
          <h1 className="text-center my-1 text-3xl font-bold">35k</h1>
          <p className="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='border p-5 space-y-3 hover:bg-primary hover:text-white ' >
          <div className="flex justify-center ">
            <IoShieldCheckmarkOutline className="bg-primary text-6xl rounded-full border-8 border-orange-300 p-2 text-white" />
          </div>
          <h1 className="text-center my-1 text-3xl font-bold">10k</h1>
          <p className="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        
        

      </div>
            
        </div>
    );
};

export default Aboutservice;