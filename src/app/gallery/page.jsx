import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <Image className='border' src="/images/one.jpg" width={1300} height={400}  alt="" />
        </div>
    );
};

export default page;