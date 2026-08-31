const featuredVideos = [
    {
        url: "https://www.youtube.com/watch?v=XeCazZV1PLs",
        title: <>Pasadena Greek Festival 2013<br/><div style={{height:18,width:1}}></div></>,
        thumbnail: "https://img.youtube.com/vi/XeCazZV1PLs/hqdefault.jpg"
    },
    {
        url: "https://www.youtube.com/watch?v=FC2CaJXrzCg",
        title: "Alia interviews Ozgen in Istanbul, Turkey",
        thumbnail: "https://img.youtube.com/vi/FC2CaJXrzCg/hqdefault.jpg"
    },
    {
        url: "https://www.youtube.com/watch?v=sJQuLGs3iv0",
        title: "Alia dances Cabaret Bellydance at Moun of Tunis",
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
                        <a href="https://www.youtube.com/dancewithalia" className="youtube">
                            <i className="fab fa-youtube"></i>
                            <span>Watch on YouTube</span>
                        </a>
                        <a href="https://www.instagram.com/dance_with_alia/" className="instagram">
                            <i className="fab fa-instagram"></i>
                            <span>Follow on Instagram</span>
                        </a>
                        {/* <a href="https://x.com/dancewithalia/"><i className="fab fa-x-twitter"></i></a> */}
                    </div>
                </section>
                <section id="header-image" className="header-image-section">
                    <img src="/exploring.png" alt="Exploring the world, one dance at a time." />
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
                        {/* <span className="title">Alia Bartlett</span> */}
                        <p className="description">Alia explores dance and music around the world and interviews people who create and sustain historical legacies.
<br/><br/>There is so much to discover and I welcome your suggestions and contributions.</p>
                    </div>
                </section>
                <div className="section-divider"></div>
                <div id="videos" className="video-section">
                    {featuredVideos.map((video, index) => (
                        <div key={index} className="video-card">
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                <img src={video.thumbnail} />
                                <span className="video-title">{video.title}</span>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="section-divider"></div>
                <div id="footer" className="footer-section">
                    <span className="copyright">Copyright @ DanceWithAlia.com. All Rights Reserved.</span>
                </div>
            </main>
        </>
    );
}
