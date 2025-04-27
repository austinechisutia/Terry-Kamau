function Contact() {
    try {
        return (
            <section data-name="contact" id="contact" className="py-12 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text text-center">Connect With Me</h2>
                    <div className="max-w-2xl mx-auto glass-effect p-6 sm:p-8 rounded-lg">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div data-name="social-links" className="space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold mb-4">Social Links</h3>
                                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                                    <i className="fab fa-twitter text-lg sm:text-xl"></i>
                                    <span className="text-sm sm:text-base">Twitter</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                                    <i className="fab fa-instagram text-lg sm:text-xl"></i>
                                    <span className="text-sm sm:text-base">Instagram</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                                    <i className="fab fa-youtube text-lg sm:text-xl"></i>
                                    <span className="text-sm sm:text-base">YouTube</span>
                                </a>
                            </div>
                            <div data-name="contact-form" className="space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold mb-4">Send Message</h3>
                                <input 
                                    type="email" 
                                    placeholder="Your Email"
                                    className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-cyan-500 outline-none text-sm sm:text-base"
                                />
                                <textarea 
                                    placeholder="Your Message"
                                    className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-cyan-500 outline-none text-sm sm:text-base"
                                    rows="4"
                                ></textarea>
                                <button className="w-full cyber-border px-6 py-3 rounded-full hover-scale gradient-text text-sm sm:text-base">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
