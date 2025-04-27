function Hero() {
    try {
        return (
            <section data-name="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
                <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div data-name="hero-content" className="space-y-6 sm:space-y-8 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold cyber-glow">
                                Digital Rhythm <span className="gradient-text">Director</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300">
                                Professional drummer, production director, and streaming expert merging traditional music with Web3 innovation. Creating immersive experiences across physical and digital realms.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
                                <button data-name="cta-primary" className="cyber-border px-6 sm:px-8 py-3 rounded-full hover-scale gradient-text">
                                    View Events
                                </button>
                                <button data-name="cta-secondary" className="px-6 sm:px-8 py-3 rounded-full hover-scale border border-gray-600">
                                    Watch Showreel
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <div className="glass-effect px-4 py-2 rounded-full text-sm">
                                    <i className="fas fa-drum mr-2"></i>Professional Drummer
                                </div>
                                <div className="glass-effect px-4 py-2 rounded-full text-sm">
                                    <i className="fas fa-video mr-2"></i>Production Director
                                </div>
                                <div className="glass-effect px-4 py-2 rounded-full text-sm">
                                    <i className="fas fa-broadcast-tower mr-2"></i>Stream Director
                                </div>
                                <div className="glass-effect px-4 py-2 rounded-full text-sm">
                                    <i className="fas fa-calendar-alt mr-2"></i>Event Curator
                                </div>
                            </div>
                        </div>
                        <div data-name="hero-image" className="floating order-first md:order-last mb-8 md:mb-0">
                            <img 
                                src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600"
                                alt="Drummer Performance"
                                className="rounded-lg cyber-border w-full max-w-lg mx-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full filter blur-3xl opacity-20"></div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
