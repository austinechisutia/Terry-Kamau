function App() {
    try {
        return (
            <div data-name="app" className="bg-[#0a0a0a] min-h-screen">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Events />
                <Projects />
                <Contact />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
