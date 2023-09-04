import React from 'react';
import Logo from './navbar/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white p-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-11">
                {/* Column 1 */}
                <div className="col-span-1">
                    <Logo />
                    <p className="text-sm text-light mt-2 mb-7">CLORES Company is the ultimate destination for plant enthusiasts seeking valuable botanical information.</p>
                    <div className="h-px bg-gray-600 my-2"></div>
                    <p className="text-xs text-light">Subscribe to our newsletter:</p>
                    <input
                        className='mt-2 w-full px-2 py-1 bg-white text-black'
                        type='text'
                        placeholder='Enter your email'
                    />
                </div>

                {/* Column 2 */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <ul className="mt-2 text-light">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <ul className="mt-2 text-light">
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Phone</a></li>
                        <li><a href="#">Address</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold">Popular Plants</h3>
                    <ul className="mt-2 text-light">
                        <li><a href="#">Ferns</a></li>
                        <li><a href="#">Succulents</a></li>
                        <li><a href="#">Orchids</a></li>
                        <li><a href="#">Bonsai</a></li>
                        <li><a href="#">Cacti</a></li>
                        <li><a href="#">Herbs</a></li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold">Resources</h3>
                    <ul className="mt-2 text-light">
                        <li><a href="#">Plant Care Guides</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
