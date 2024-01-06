import useSearchTool from '../../../hooks/useSearchTool';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader';
import RightSideBar from '../../Shared/RightSideBar';

const Search = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const segments = pathname.split('/');
    const { result, isLoading } = useSearchTool(segments[2]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="align-items-center d-flex flex-wrap gap-2 justify-content-center my-4 py-5">
            {Array.isArray(result) && result.length > 0 ? (
                result.map((tool) => (
                    <Link key={tool.name} className="tool-btn" to={`/tools/${tool.slug}`}>
                        <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
                        {tool.name.length < 17 ? tool.name : `${tool.name.substring(0, 15)}..`}
                    </Link>
                ))
            ) : (
                <>
                    <h1 className=" w-100 text-center mt-3 text-warning" style={{ color: '#6EC1E4', fontSize: '35px' }}>😔 No search results found
                    </h1>
                    <p className='text-center text-white'>
                        Write a valid tool name or check the bellow
                    </p>


                </>
            )}
            <RightSideBar />
        </div>
    );
};

export default Search;