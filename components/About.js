function About() {
    try {
        return (
            <section data-name="about" id="about" className="py-12 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div data-name="about-image" className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1504653601220-f1a8ece25e4a?w=600"
                                alt="Drummer Studio"
                                className="rounded-lg cyber-border w-full max-w-lg mx-auto"
                            />
                            <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full filter blur-xl opacity-20"></div>
                        </div>
                        <div data-name="about-content" className="space-y-6">
                            <p className="text-base sm:text-lg text-gray-300">
                                I've been drumming for as long as I can remember! Now, I'm mixing my love for music with the exciting world of Web3. From banging on real drums to making cool beats on my computer, my adventure is just getting started!
                            </p>
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                <div className="glass-effect p-4 rounded-lg">
                                    <h3 className="font-bold mb-2 text-sm sm:text-base">Experience</h3>
                                    <p>3+ Years</p>
                                </div>
                                <div className="glass-effect p-4 rounded-lg">
                                    <h3 className="font-bold mb-2 text-sm sm:text-base">Projects</h3>
                                    <p>50+ Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
