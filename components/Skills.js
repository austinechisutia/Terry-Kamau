function Skills() {
    try {
        const skills = [
            { name: "Acoustic Drums", level: 95 },
            { name: "Electronic Drums", level: 90 },
            { name: "Music Production", level: 85 },
            { name: "Live Performance", level: 92 },
            { name: "Digital Audio", level: 88 },
            { name: "Rhythm Theory", level: 94 },
            { name: "Stream Direction", level: 89 },
            { name: "Live Event Production", level: 87 }
        ];

        return (
            <section data-name="skills" id="skills" className="py-12 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text text-center">Skills Matrix</h2>
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                data-name={`skill-${index}`}
                                className="glass-effect p-4 sm:p-6 rounded-lg hover-scale"
                            >
                                <div className="flex justify-between mb-2 items-center">
                                    <span className="font-bold text-sm sm:text-base">{skill.name}</span>
                                    <span className="gradient-text text-sm sm:text-base">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full">
                                    <div 
                                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-green-500"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 sm:mt-12 text-center">
                        <div className="inline-flex flex-wrap justify-center gap-4">
                            <div className="glass-effect px-4 py-2 rounded-full text-sm">
                                <i className="fas fa-video-camera mr-2"></i>Stream Production
                            </div>
                            <div className="glass-effect px-4 py-2 rounded-full text-sm">
                                <i className="fas fa-broadcast-tower mr-2"></i>Live Broadcasting
                            </div>
                            <div className="glass-effect px-4 py-2 rounded-full text-sm">
                                <i className="fas fa-sliders-h mr-2"></i>Technical Direction
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
