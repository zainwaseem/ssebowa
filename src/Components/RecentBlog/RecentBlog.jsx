import React from 'react';
import './RecentBlog.css'

const RecentBlog = () => {
    return (
        <div>
            <div className='text-center mb-14 pb-1'>
                <h1 className=' text-5xl font-semibold mt-32 pt-1'>Recent Blog And <span style={{ color: "#4AB421" }}>Articles</span></h1>
                <p className=' text-xl font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <div className='container'>
                <div className='ml-32'>
                    <img src="https://i.ibb.co/wJWt746/bow-bridge-central-park-new-york-city-1.png" alt="" />
                </div>
                <div className='flex absolute botom-96 left-96 bottom-96' style={{ width: "740px" }}>
                    {/* <div className='bg-white rounded-lg blog-info pl-4 pr-4 mr-14'>
                        <button class="btn btn-sm mb-3 mt-7">Small</button>
                        <h1 className=' text-xl font-bold mb-8'>Why Do People Suffer <br />From Hunger Ceries? </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='bg-white rounded-lg blog-info pl-4 pr-4 ml-1'>
                        <button class="btn btn-sm mb-3 mt-7">Small</button>
                        <h1 className=' text-xl font-bold mb-8'>Why Do People Suffer <br />From Hunger Ceries? </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default RecentBlog;