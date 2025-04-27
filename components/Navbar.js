function Navbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        return (
            <nav data-name="navbar" className="fixed w-full z-50 glass-effect">
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div data-name="logo" className="text-xl sm:text-2xl font-bold gradient-text">
                            TERRY KAMAU
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="nav-link">Home</a>
                            <a href="#about" className="nav-link">About</a>
                            <a href="#skills" className="nav-link">Skills</a>
                            <a href="#events" className="nav-link">Events</a>
                            <a href="#projects" className="nav-link">Projects</a>
                            <a href="#contact" className="nav-link">Contact</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button data-name="connect-wallet" className="cyber-border px-4 sm:px-6 py-2 rounded-full hover-scale text-sm sm:text-base">
                                Connect Wallet
                            </button>
                            <button 
                                data-name="mobile-menu-button"
                                className="md:hidden text-2xl"
                                onClick={toggleMenu}
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div data-name="mobile-menu" className="md:hidden py-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="nav-link">Home</a>
                                <a href="#about" className="nav-link">About</a>
                                <a href="#skills" className="nav-link">Skills</a>
                                <a href="#events" className="nav-link">Events</a>
                                <a href="#projects" className="nav-link">Projects</a>
                                <a href="#contact" className="nav-link">Contact</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
