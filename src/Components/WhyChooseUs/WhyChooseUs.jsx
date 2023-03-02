import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className=' text-5xl font-semibold'>Why <span style={{ color: "#4AB421" }}>Choose</span> US?</h1>
                <p className=' text-xl font-normal mt-4 mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Lorem ipsum dolor sit amet,</p>
            </div>

            <div className='lg:flex lg:justify-around'>

                <div className='flex flex-col justify-center justify-items-center text-center'>
                    <img className='bg-blue ml-6 w-60 h-36' src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" />
                    <h1 className=' text-3xl font-semibold mt-3'>750+</h1>
                    <p className=' text-2xl font-medium mt-3' style={{ color: "#808080" }}>Trees Plant</p>
                    <img className='mt-6 rounded-xl w-56 h-56 ml-6' src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                </div>
                <div className='flex flex-col justify-center justify-items-center text-center'>
                    <img className='bg-blue ml-6 w-60 h-36' src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" />
                    <h1 className=' text-3xl font-semibold mt-3'>1000+</h1>
                    <p className=' text-2xl font-medium mt-3' style={{ color: "#808080" }}>Meals Served</p>
                    <img className='mt-6 rounded-xl w-56 h-56 ml-6' src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                </div>
                <div className='flex flex-col justify-center justify-items-center text-center'>
                    <img className='bg-blue ml-6 w-60 h-36' src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" />
                    <h1 className=' text-3xl font-semibold mt-3'>670+</h1>
                    <p className=' text-2xl font-medium mt-3' style={{ color: "#808080" }}>Pads Served</p>
                    <img className='mt-6 rounded-xl w-56 h-56 ml-6' src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                </div>
                <div className='flex flex-col justify-center justify-items-center text-center'>
                    <img className='bg-blue ml-6 w-60 h-36' src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" />
                    <h1 className=' text-3xl font-semibold mt-3'>458+</h1>
                    <p className=' text-2xl font-medium mt-3' style={{ color: "#808080" }}>Projects</p>
                    <img className='mt-6 rounded-xl w-56 h-56 ml-6' src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                </div>




            </div>
            {/* 
            <div className='lg:flex lg:justify-around mt-6'>
                <img className='ml-4' src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                <img src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                <img src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                <img src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
            </div> */}
        </div>
    );
};

export default WhyChooseUs;