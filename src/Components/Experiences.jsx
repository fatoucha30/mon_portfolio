{/*import React from 'react';*/ }
import images2 from '../assets/Images/image2.png';
import image4 from '../assets/Images/image4.png';
import image6 from '../assets/Images/image6.png';
import image7 from '../assets/Images/image7.png';
import image8 from '../assets/Images/image8.png';
import imag9 from '../assets/Images/imag9.png';
import imag10 from '../assets/Images/imag10.png';
import imag11 from '../assets/Images/imag11.png';

function Experiences() {
    return (
        <>
            <h1 className='text-blue-600 text-3xl'>Expériences</h1><br /><br />
            <div className='flex space-x-60 ml-14'>
                <div className="ml-4">
                    <img src={images2} alt="html" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>HTML</p>
                </div>
                <div className="ml-4">
                    <img src={image4} alt="JS" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>Javascript</p>
                </div>
                <div className="ml-4">
                    <img src={image6} alt="java" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>Java</p>
                </div>
                <div className="ml-4">
                    <img src={image7} alt="aws" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>AWS</p>
                </div>
            </div><br /><br />
            <div className='flex space-x-60 py-6 ml-16'>
                <div className="ml-4">
                    <img src={image8} alt="Css" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>Css</p>
                </div>
                <div className="ml-4">
                    <img src={imag9} alt="node" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>NodeJs</p>
                </div>
                <div className="ml-4">
                    <img src={imag10} alt="react" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>React</p>
                </div>
                <div className="ml-4">
                    <img src={imag11} alt="python" className='mx-auto w-8' />
                    <p className='mt-4 text-lg font-medium text-gray-700'>Python</p>
                </div>
            </div>
        </>
    );
}
export default Experiences;
