{/*import React from 'react';*/ }
import fa from '../assets/Images/fa.jpg';

function Portfolio() {
    return (
        <div>
            <h2 className='text-blue-600 mt-40 font-bold'>Portfolio</h2> <br />
            <div className="flex  mt-0 h-10 w-full bg-gray-300 ">
                <div className='flex space-x-40  ml-96'>
                    <a className='text-blue-400'>Application mobile</a>
                    <a>Site web</a>
                    <a>Modélisation</a>
                </div>
            </div>
            <div>
                <div className=" flex space-x-80 mt-20  ">
                    <h3 className='text-blue-600 text-2xl font-bold ml-2'>Projet<br />
                        <span className='text-xl text-black h-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit.

                            ex architecto <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt quis aliquam  quaerat provident tenetur  ad ea,
                            ex architecto <br />
                            eum iure dolorum, facere nihil optio
                            obcaecati ab consequatur atque natus
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt quis aliquam  quaerat provident tenetur  ad ea,
                            ex architecto <br /> eum iure dolorum, facere nihil optio
                            obcaecati ab consequatur atque
                        </span>
                        <br /><br />
                        <button className="bg-gradient-to-r from-purple-400 to-blue-500
                 hover:from-blue-700 hover:to-blue-700 text-white font-bold 
                 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500
                  ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse
                   active:animate-bounce w-full">
                            Voir plus
                        </button>
                    </h3>
                    <img src={fa} alt="fa.jpg" className='w-60 h-96' />
                </div>

            </div>
        </div>


    );
}
export default Portfolio;
