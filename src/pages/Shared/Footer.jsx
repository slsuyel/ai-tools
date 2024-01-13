/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import logo from '../../assets/images/tools-master.png';
import useVisitors from '../../hooks/useVisitors';
const Footer = () => {
    const visitorCount = useVisitors()
    return (
        <footer className="pt-5 nav-p-bg">
            <div className="container px-4 px-md-3">
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="list-unstyled small">
                            <img src={logo} width={'240px'} alt="Logo" />
                            <p className="mb-2 text-white">
                                "Tools Master - Ai: Your AI toolkit for streamlined online tasks. Effortless innovation, powerful results. Elevate your digital game instantly! Unleash AI's power effortlessly!"

                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <h5 className="text-white">Importants links:</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link className='text-decoration-none text-white' to="/login">Login</Link></li>
                            <li className="mb-2"><Link className='text-decoration-none text-white' to="/registration">Registration</Link></li>
                            <li className="mb-2"><Link className='text-decoration-none text-white' to="/blog">Blog</Link></li>

                        </ul>
                    </div>

                    <div className="col-6 col-lg-3 mb-2">
                        <h5 className="text-white">Others Link:</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link className='text-decoration-none text-white' to="/">Help & Support</Link></li>
                            <li className="mb-2"><Link className='text-decoration-none text-white' to="/rajshahi-university">Career</Link></li>
                            <li className="mb-2"><Link className='text-decoration-none text-white' to="/rajshahi-university">Terms & conditions</Link></li>
                        </ul>

                        <div className='font-italic font-monospace text-blue'>
                            Total Visitors: <strong>{visitorCount + 10000} </strong>
                        </div>
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
                            <h6 className='mb-0 text-white'>Design & Dev</h6>
                            <a className='fs-5 ms-3  text-decoration-none text-white' target="_blank" href="https://www.linkedin.com/in/slsuyel">Suyel Haque</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <a href="#top" className="gp-top" ><i className="fa-solid fa-circle-chevron-up"></i></a>
            </div>

            <div className="text-center text-white px-4 py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                "© {new Date().getFullYear()} Tools Master - AI. All rights reserved."
            </div>
        </footer>
    );
};

export default Footer;
