import React from 'react';

const About = () => {
    return (
        <div>
            <h3 className='text-center text-3xl underline'>this is about us section</h3>
            <div className='bg-amber-50 p-16 flex flex-col items-center'>
                <h2 className='text-6xl text-lime-500 w-[520px] text-center mt-12 mx-auto '>Welcome to about us section grow your bussiness by using by our site</h2>
                <p className='text-neutral-300 w-[800px] text-center mt-8 mix-blend-saturation'>Lorem ipsum dolor sit  amet consectetur adipisicing elit.  mlanditiis nemo animi quasi, officia sapiente dolor sint, ab a nostrum optio! Voluptas.</p>
                <button className='btn w-56 bg-lime-500 '>Explore</button>
            </div>

        </div>
    );
};

export default About;