import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaRegAddressCard,
} from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_a0lcxzr', 'template_uprjt1o', form.current, 'HEqRQNUaHcCbqLsCf')
            .then(
                () => {
                    setSuccess('thank you ')
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div name="contact" className="bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="container max-w-screen-lg mx-auto py-12 px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p className="p-4">Submit the form below to get in touch with me</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-cyan-500" />
                            <span>Location: Kurigram, Rangpur, Bangladesh</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaRegAddressCard className="text-cyan-500" />
                            <span>Postal Code: 5601, Forkerhat, Kurigram</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <a
                                href="tel:+8801308140038"
                                className="flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md hover:border-cyan-500 transition-colors duration-300"
                            >
                                <FaPhone className="text-cyan-500" />
                                <span>Phone: +88 01308140038</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <a
                                href="mailto:saagor.16@gmail.com"
                                className="flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md hover:border-cyan-500 transition-colors duration-300"
                            >
                                <FaEnvelope className="text-cyan-500" />
                                <span>Email: rakib224127@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block text-lg font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-500"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Send"
                                    className="w-full p-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white cursor-pointer transition-colors duration-300"
                                />
                            </div>

                            <span>{success}</span>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;
