import { useState } from 'react';
import contactDoodle from '../../assets/contact.png';
import success from '../../assets/success.png';
// import { Helmet } from 'react-helmet-async';

const Contact = () => {

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        if (form.checkValidity()) {
            setShowModal(true);
        } else {
            setShowModal(false)
        }
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
    }

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 grid grid-cols-1 gap-8 rounded-2xl md:grid-cols-2 dark:bg-gray-100 dark:text-gray-800">
            {/* <Helmet>
                <title>Contact Verse Voyage</title>
            </Helmet> */}
            <div className="flex flex-col justify-between">
                <div className="space-y-8">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight lg:text-5xl">Let&rsquo;s talk!</h2>
                    <div className="dark:text-gray-600 text-justify md:pr-12">Thank you for your interest in reaching out to us! Whether you have a question, suggestion, or just want to say &ldquo;hello&rdquo;, we&rsquo;re here to listen. Please, feel free to use the form to get in touch with our team. We&rsquo;ll do our best to respond to you as soon as possible.</div>
                </div>
                <img src={contactDoodle} alt="Contact Us" className="w-full md:w-4/5 px-6" />
            </div>
            <form onSubmit={handleSubmit} className="text-[#2b7178] gap-6 flex flex-col justify-between">
                <div>
                    <label className="text-lg">Full name</label>
                    <input name='name' required id="name" type="text" placeholder="Your Full Name" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
                </div>
                <div>
                    <label className="text-lg">Email</label>
                    <input name='email' required id="email" type="email" placeholder="Your Email" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
                </div>
                <div>
                    <label className="text-lg">Message</label>
                    <textarea name='message' required id="message" rows="3" placeholder="Write Your Message to us" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500"></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center tracking-wide uppercase p-3 font-bold rounded-lg bg-teal-600 text-white border border-teal-600 hover:text-teal-600 hover:bg-transparent transition duration-500">Send Message</button>
            </form>
            {
                showModal && (
                    <dialog open className="modal">
                        <div className="modal-box flex flex-col items-center justify-center text-[#2b7178]">
                            <div className='h-full flex justify-center items-center'><img className='w-1/2' src={success} alt="Success" /></div>
                            <h3 className="font-bold text-lg">Success!</h3>
                            <p className="py-4">Message Sent</p>
                            <div className="modal-action">
                                <button className="p-3 font-bold rounded-lg bg-teal-600 text-white border border-teal-600 hover:text-teal-600 hover:bg-transparent transition duration-500" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </dialog>
                )
            }
        </div>
    );
};

export default Contact;