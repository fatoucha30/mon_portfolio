import tel from '../assets/Images/tel.png';
import mail from '../assets/Images/mail.png';
import locali from '../assets/Images/locali.png';
import axios from 'axios';
import  {useState} from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
                name: '',
            email: '',
            message: '',
    });

    const handleChange = (e) => {
                setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                });
    };

    const handleSubmit = async (e) => {
                e.preventDefault();
            try {
            const response = await axios.post('http://localhost:3000/form', formData);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
                console.error('Error sending data:', error);
        }
    };

            return (
            <div className=' bg-gray-200 h-full w-full'>
                <h2 className="text-2xl font-bold mb-6 mt-40 text-blue-400 mx-4">Contact</h2><br />
                <div className='flex space-x-80 mx-20'>
                    <h3 className='text-black  text-xl '><span className='font-bold'>Envoyer-moi un message</span><br /><br />
                        <span className='z-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span><br /><br />
                        <div className="mt-6 flex space-x-1 mx-20">
                            <img src={tel} alt="tel" className='w-6 bg-gray-700' />
                            <p className="text-gray-700">+221 785918968</p>
                        </div>
                        <div className='mt-6 flex space-x-1 mx-20'>
                            <img src={mail} alt="mel" className="w-6" />
                            <p className="text-gray-700">783034046ndiaye@gmail.com</p>
                        </div>
                        <div className='mt-6 flex space-x-1 mx-20'>
                            <img src={locali} alt="locali" className='w-6' />
                            <p className="text-gray-700">11Novembre,Mbour</p>
                        </div>
                        <br /><br />

                    </h3>
                    <div className="max-w-md mx-auto bg-gray-50 p-10 rounded-lg shadow-lg h-80 w-80 ">

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Prénom et Nom"
                                    className="w-full px-3 bg-blue-950 py-2 border rounded-lg"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    className="w-full px-3 bg-blue-950 py-2 border rounded-lg"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    className="w-full px-3 py-2 border rounded-lg bg-blue-950 h"
                                    placeholder="Message"
                                    onChange={handleChange}
                                    value={formData.message}
                                ></textarea>
                            </div>
                            <button type="submit" className="w-40 bg-blue-950 text-white py-2 rounded-lg">Envoyer</button>
                        </form>

                    </div>
                </div>
            </div>
            );
};

            export default Form;

  //  {/*  <div className="max-w-md mx-auto bg-gray-50 p-10 rounded-lg shadow-lg h-80 w-80 ">

                      //  <form>
                         //   <div className="mb-4">

                             //   <input type="text" placeholder='Prénom et Nom' className="w-full px-3 bg-blue-950 py-2 border rounded-lg" />
                          //  </div>
                           // <div className="mb-4">
                             //   <input type="email" placeholder='E-mail' className="w-full px-3 bg-blue-950 py-2 border rounded-lg" />
                          //  </div>
                           // <div className="mb-4">
                                //<textarea className="w-full px-3 py-2 border rounded-lg bg-blue-950" placeholder="Message">

                               /// </textarea>
                          //  </div>
                           // <button type="submit" className="w-40 bg-blue-950 text-white py-2 rounded-lg">Envoyer</button>
                        //</form>*/}

                  //  </div>
              //  </div>