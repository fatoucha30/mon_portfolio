{/*import React from 'react';*/ }
import me from '../assets/Images/me.jpg';

function Apropos() {
    return (
        <div className=" flex space-x-80 mt-20  ">
            <h3 className='text-blue-600 text-3xl font-bold mx-auto'>A propos <br /><br /><br />
                <span className='text-xl text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Nesciunt quis aliquam  quaerat provident tenetur  ad ea,
                    ex architecto <br /> eum iure dolorum, facere nihil optio
                    obcaecati ab consequatur atque <br /><br />
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
                    Télécharger mon Cv
                </button>
            </h3>
            <img src={me} alt="moi" className='w-60 h-96' />
        </div>
        
    );
}
export default Apropos;
