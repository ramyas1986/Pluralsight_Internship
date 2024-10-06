import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyFooter() {
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="mt-4">
                                <h2 style={{ color: "black !important" }}>
                                    Todoist<span>.</span>
                                </h2>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-contact mt-4">
                                <p>
                                    Pluralsight <br />
                                    Bengaluru 560076
                                    <br />
                                    India
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-contact mt-4">
                                <strong>Phone:</strong>+91-8989558855
                                <br />
                                <strong>Email:</strong> info@pluralsight.com
                                <br />
                            </div>
                            <div className="col-lg-4 col-md-6 footer-contact mt-4">
                                <div className="copyright">
                                    © Copyright{" "}
                                    <strong>
                                        <span>Todoist</span>
                                    </strong>
                                    . All Rights Reserved
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-contact" />
                            <div className="social-links text-center text-md-end pt-3 pt-md-0">
                                <a href="/" className="twitter">
                                    <i className="bi bi-twitter" />
                                </a>
                                <a href="/" className="facebook">
                                    <i className="bi bi-facebook" />
                                </a>
                                <a href="/" className="instagram">
                                    <i className="bi bi-instagram" />
                                </a>
                                <a href="/" className="google-plus">
                                    <i className="bi bi-skype" />
                                </a>
                                <a href="/" className="linkedin">
                                    <i className="bi bi-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </>

    );

}


export default MyFooter;