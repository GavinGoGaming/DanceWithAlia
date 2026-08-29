const featuredVideos = [
    {
        url: "https://www.youtube.com/watch?v=_ECosT3rFTw",
        title: "Interview with Illan and Mouna at Tribal Fest 2012",
        thumbnail: "https://img.youtube.com/vi/_ECosT3rFTw/hqdefault.jpg"
    },
    {
        url: "https://www.youtube.com/watch?v=FC2CaJXrzCg",
        title: "Alia interviews Ozgen in Istanbul, Turkey",
        thumbnail: "https://img.youtube.com/vi/FC2CaJXrzCg/hqdefault.jpg"
    },
    {
        url: "https://www.youtube.com/watch?v=sJQuLGs3iv0",
        title: "Alia dances Cabaret Belleydance at Moun of Tunis",
        thumbnail: "https://img.youtube.com/vi/sJQuLGs3iv0/hqdefault.jpg"
    }
]

export default function Home() {
    return (
        <>
            <main>
                <section id="header" className="header-section">
                    <img src="/logo.png" alt="Dance With Alia" className="logo" />
                    <div className="header-buttons">
                        <a href="https://www.youtube.com/dancewithalia"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/dance_with_alia/"><i className="fab fa-instagram"></i></a>
                        <a href="https://x.com/dancewithalia/"><i className="fab fa-x-twitter"></i></a>
                    </div>
                </section>
                <div className="section-divider"></div>
                <section id="graphic" className="graphic-section">
                    <img src="/graphic.png" />
                </section>
                <div className="section-divider" style={{
                    marginTop: "0px",
                }}></div>
                <section id="about" className="about-section">
                    <img src="/profile.jpg" alt="Profile Picture" />
                    <div className="about-content">
                        <span className="title">Alia Bartlett</span>
                        <p className="description">Dance With Alia is an evolving project that explores the people of and history of dance and music from around the world.
<br/><br/>There is so much to explore and I welcome your suggestions and contributions.</p>
                    </div>
                </section>
                <div className="section-divider"></div>
                <div id="videos" className="video-section">
                    {featuredVideos.map((video, index) => (
                        <div key={index} className="video-card">
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                <img src={video.thumbnail} alt={video.title} />
                                <span className="video-title">{video.title}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
