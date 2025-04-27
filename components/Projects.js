function Projects() {
    try {
        const projects = [
            {
                title: "Digital Drum Symphony",
                description: "A fusion of electronic and acoustic drums in a Web3 space",
                image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400"
            },
            {
                title: "Rhythm NFT Collection",
                description: "Unique drum patterns minted as NFTs",
                image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?w=400"
            },
            {
                title: "Virtual Drum Experience",
                description: "Interactive drumming in the metaverse",
                image: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=400"
            }
        ];

        return (
            <section data-name="projects" id="projects" className="py-12 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text text-center">Featured Projects</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                data-name={`project-${index}`}
                                className="glass-effect rounded-lg overflow-hidden hover-scale"
                            >
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                                    <button className="mt-4 cyber-border px-4 py-2 rounded-full text-sm">
                                        Explore Project
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
