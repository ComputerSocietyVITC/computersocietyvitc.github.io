import React from 'react'
import asteroid from "../images/asteroid.png";
import Mountains from "../components/Mountains";
import { supabase } from '../supabaseClient'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

    const [contactData, setContactData] = React.useState({
        'Name': '',
        'Email': '',
        'Subject': '',
        'Message': ''
    })

    const submitForm = async (e) => {
        e.preventDefault();
        document.getElementById("contactform").reset();
        const { data, error } = await supabase
            .from('Contact')
            .insert([contactData])
        if (data) {
            toast.success("Message Submitted!", {
                theme: "dark"
            })
        }
    }

    return (
        <div className='relative z-10'>
            <ToastContainer
                position="top-right"
                autoClose={2500}
            />
            <div className="font-catamaran text-center mt-10 mb-2 lg:text-left lg:ml-28 text-black" id="outlinetext">
                <h1>CONTACT US</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="mx-5 pb-16 lg:mt-6 font-sans">
                    <div>
                        <div className="sm:ml-28 sm:mr-24">
                            <div className="mt-5 md:mt-0 md:col-span-2 text-left">
                                <form onSubmit={submitForm} id='contactform'>
                                    <div className="sm:rounded-md">

                                        <div className="col-span-6">
                                            <label htmlFor="name" className="block text-lg font-medium text-white ">
                                                Name
                                            </label>
                                            <input
                                                onChange={(e) => setContactData({ ...contactData, 'Name': e.target.value })}
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                autoComplete="name"
                                                className="bg-gray-800  border-0 mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                            />
                                        </div><br />
                                        <div className="col-span-6">
                                            <label htmlFor="email" className="block text-lg font-medium text-white">
                                                Email ID
                                            </label>
                                            <input
                                                onChange={(e) => setContactData({ ...contactData, 'Email': e.target.value })}
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                autoComplete="email"
                                                className="bg-gray-800 border-0 mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div><br />
                                        <div className="col-span-6">
                                            <label htmlFor="subject" className="block text-lg font-medium text-white">
                                                Subject
                                            </label>
                                            <input
                                                onChange={(e) => setContactData({ ...contactData, 'Subject': e.target.value })}
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                required
                                                autoComplete="subject"
                                                className="bg-gray-800 border-0 mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div><br />
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="message" className="block text-lg font-medium text-white">
                                                    Message
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        onChange={(e) => setContactData({ ...contactData, 'Message': e.target.value })}
                                                        id="message"
                                                        name="message"
                                                        rows={3}
                                                        required
                                                        className="bg-gray-800 border-0 shadow-sm focus:ring-comsocgreen focus:border-comsocgreen mt-1 block w-full sm:text-sm rounded-md"

                                                    />
                                                </div>

                                            </div>
                                        </div><br />
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="mt-4 bg-gradient-to-r from-color1 to-color2 inline-flex justify-center py-2 px-10 border border-transparent shadow-xl hover:shadow-sm text-xl font-medium mr-auto ml-auto rounded-full text-white hover:from-comsocgreen"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block -mt-40'>
                    <img src={asteroid} alt="asteroid" />
                </div>
            </div>
            <Mountains />
        </div >
    )
}

export default Contact
