import "../styles/footer.css"

export default function Footer() {
    return (
        <div className="footer-main-container">
            <div className="footer-main-content-container">
                <div className="footer-left-main-container">
                    <div className="footer-left-content-container">
                        <h4 className="footer-company-name">DAZEY</h4>
                        <div className="footer-company-address-container">
                            <p className="footer-company-address">123 Main St<br />New York City, NY</p>
                        </div>
                    </div>
                </div>
                <div className="footer-right-main-container">
                        <div className="footer-right-content-container">
                            <p className="footer-copyright">&copy; DAZEY is a fictional business. Website is for portfolio purposes only</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}