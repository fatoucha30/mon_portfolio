{/*import React from 'react';*/ }

function Header() {
    return (
        <div className="flex flex-col  h-60 w-auto bg-gray-200 mx-0">
            <div className="flex space-x-96  mt-2 mx-2"> 
                <div className=" w-12 h-12 bg-blue-700 rounded-full">
                    <span className="text-white text-lg font-bold">WP</span>
                </div> 
                <div className=" space-x-24 text-gray-600 ml-80">
                    <a href="#" className="hover:text-gray-900">Accueil</a>
                    <a href="#" className="hover:text-gray-900">À propos</a>
                    <a href="#" className="hover:text-gray-900">Portfolio</a>
                    <a href="#" className="hover:text-gray-900">Services</a>
                    <a href="#" className="hover:text-gray-900">Expériences</a>
                </div>
            </div> <br /><br />
            <div className='flex space-x-80'>
                <h1 className="text-xl font-semibold text-gray-800"><span className='text-3xl'>Cheikh Tidiane BA</span> <br /> Full Stack Developper</h1><br />
                <p className="text-xl text-gray-500"></p>
            
            <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-full text-lg"> CONTACTEZ-MOI </button> {/* Menu */}
             </div>
        </div>

       
    );
}
export default Header;
