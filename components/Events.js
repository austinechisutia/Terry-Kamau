function Events() {
    try {
        const events = [
            {
                title: "Cyber Rhythm Festival",
                date: "2026 Mar 15",
                location: "Digital Arena, Metaverse",
                description: "A groundbreaking fusion of live drumming and digital art in the metaverse",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
                role: "Production Director & Performer"
            },
            {
                title: "Web3 Music Summit",
                date: "2026 Apr 20",
                location: "Tech Hub Convention Center",
                description: "Leading the technical production of the largest Web3 music conference",
                image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600",
                role: "Technical Director"
            },
            {
                title: "NFT Rhythm Collection Launch",
                date: "2026 May 5",
                location: "Virtual Gallery",
                description: "Curating and directing the launch of exclusive drum pattern NFTs",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600",
                role: "Creative Director"
            }
        ];

        return (
            <section data-name="events" id="events" className="py-12 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text text-center">Upcoming Events</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {events.map((event, index) => (
                            <div 
                                key={index}
                                data-name={`event-${index}`}
                                className="glass-effect rounded-lg overflow-hidden hover-scale"
                            >
                                <div className="relative">
                                    <img 
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full text-sm">
                                        {event.date}
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                                    <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="glass-effect inline-block px-3 py-1 rounded-full text-sm mb-3">
                                        {event.role}
                                    </div>
                                    <p className="text-gray-400 text-sm">{event.description}</p>
                                    <button className="mt-4 cyber-border px-4 py-2 rounded-full text-sm w-full">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Events component error:', error);
        reportError(error);
        return null;
    }
}
