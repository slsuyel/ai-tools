/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import logo from '../../assets/images/tools-master.png'
const Footer = () => {

    return (
        <footer className="pt-5 nav-p-bg">
            <div className="container px-4 px-md-3 ">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <div className="list-unstyled small">
                            <img src={logo} width={'250px'} alt="Logo" />
                            <p className="mb-2 text-white">
                                A learning management system (LMS) is a software application for the administration, documentation, tracking, reporting, automation
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <h5 className="text-white">Other links:</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">Login</a></li>
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">Registration</a></li>
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">Blog</a></li>
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">Contact</a></li>

                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 mb-4">
                        <h5 className="text-white">University Link:</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">Dhaka University</a></li>
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">Rajshahi University</a></li>
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">University of Chittagong</a></li>
                            <li className="mb-2"><a className='text-decoration-none text-white' href="#">Cluster University</a></li>
                        </ul>
                    </div>

                    <div className=" col-lg-3 mb-3 pt-2">
                        <h5 className="text-white">Social Media</h5>
                        <div className='d-flex gap-4'>
                            <a href="https://www.facebook.com">
                                <i className="fab fs-4 fa-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com">
                                <i className="fab fs-4 fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com">
                                <i className="fab fs-4 fa-instagram"></i>
                            </a>
                            <a href="https://www.whatsapp.com">
                                <i className="fab fs-4 fa-whatsapp"></i>
                            </a>
                        </div>
                        <div className='mt-4 text-end'>
                            <h6 className='mb-0 '>Technical support:</h6>
                            <a className='fs-5 ms-3  text-decoration-none text-white' target="_blank" href="https://www.linkedin.com/in/slsuyel">Suel Haque</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="position-relative">
                <a href="#top" className="gp-top" ><i className="fa-solid fa-circle-chevron-up"></i></a>
            </div>

            <div className="text-center text-white px-4 py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                "© {new Date().getFullYear()} School of excellence. All rights reserved."
            </div>
        </footer>
    );
};

export default Footer;