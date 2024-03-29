import { Link } from "react-router-dom";
import useToolsCategories from "../../../hooks/useToolsCategories";
import Loader from "../../../components/Loader";

const Home = () => {


    const { toolsCategories, isLoading } = useToolsCategories()

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className="primary-bg mx-auto py-2 mt-5 mt-md-0 position-relative">
            <h1 className="fw-bold mt-2 mt-md-0 py-4 text-center" style={{ color: '#6EC1E4', fontSize: '35px' }}>All Categories of tools</h1>
            {toolsCategories.map((tools, index) => (
                <div key={index} className="w-100 mx-auto my-2">
                    <h1 className="py-2 text-center text-white">{tools.category}</h1>

                    <div className="align-items-center d-flex flex-wrap gap-2 justify-content-center my-4">
                        {tools.tools.map((tool) => (
                            <Link
                                key={tool.name}
                                className="tool-btn"
                                to={`${tools.slug}/${tool.slug}`}
                            >
                                <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
                                {tool.name.length < 17 ? tool.name : `${tool.name.substring(0, 15)}..`}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Home;