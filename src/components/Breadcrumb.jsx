/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './components.css'
const Breadcrumb = ({ title, description }) => {
    return (
        <div className="align-items-center mb-2 mb-5 mx-auto row text-center w-100 ">
            <nav className='col-md-4' aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className='fs-4 text-white text-decoration-underline' to="/"><i className="fa-solid fa-house fa-fw me-1"></i></Link>
                    </li>

                    <li className="breadcrumb-item active fs-4 text-white" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

            <div className='col-md-8'>
                <h1 className=' title-color'> {description}</h1>

            </div>

        </div>
    );
};

export default Breadcrumb;
/* fw-bold mt-5 mt-md-0 py-4 text-center */