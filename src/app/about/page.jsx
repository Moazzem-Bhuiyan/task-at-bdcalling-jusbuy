import React from 'react';
import Story from '../Components/Story';
import Aboutservice from '../Components/Aboutservice';
import Testomonial from '../Components/Testomonial';

const Page = () => {
    return (
        <div className='my-20'>

            <Story></Story>
            <Aboutservice></Aboutservice>

            <Testomonial></Testomonial>

            
        </div>
    );
};

export default Page;