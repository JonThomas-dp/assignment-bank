import "../styles/heroimage.css"

// For the subtitle: ...memories...love...light (scroll between each saying every 3 seconds)

export default function HeroImage() {
    return (
        <div className="hero-image-main-container">
            <div className="hero-image-content-container">
                <div className="hero-image-title-container">
                    <h1 className="hero-image-title">DAZEY</h1>
                </div>
                <div className="hero-image-subtitle-container">
                    <h1 className="hero-image-subtitle">A field of dreams</h1>
                </div>
            </div>
        </div>
    );
}