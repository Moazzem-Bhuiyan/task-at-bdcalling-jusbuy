import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {

    return (
        <div className='flex justify-center items-center h-screen p-5 md:p-0'>

<div className="flex flex-col md:w-[50%] m-auto py-20 justify-center items-center my-10 bg-gradient-to-br from-orange-100 to-orange-00 p-10 space-y-5 shadow-sm">

<div>
    <Image src="/group.png" width={200} height={200} alt='img'></Image>
</div>

<h1 className='text-center text-primary font-bold text-3xl'>Congratulations!</h1>

<p>Your account has been created successfully</p>

<p className='text-center'>Click Continue to create your business <br />  account  for selling item on jus buy</p>

<div className=' flex gap-10'>
    <Link href="/"><button className='border border-primary w-20 rounded-md bg-white hover:bg-primary hover:text-white'>No</button></Link>
    <Link href="/auth/sellersignup"><button  className='border border-primary w-20 rounded-md bg-white hover:bg-primary hover:text-white'>Continue</button></Link>
</div>


</div>


        </div>

       
    );
};

export default Page;