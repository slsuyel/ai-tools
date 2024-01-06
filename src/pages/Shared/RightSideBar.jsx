/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import { Link } from 'react-router-dom';
import useToolsCategories from '../../hooks/useToolsCategories';
import Loader from '../../components/Loader';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const RightSideBar = () => {
    const { toolsCategories, isLoading } = useToolsCategories();

    if (isLoading) {
        return <Loader />;
    }

    // Shuffle the categories
    const shuffledCategories = shuffleArray([...toolsCategories]);

    return (
        <div>
            <div className="w-100 mx-auto ">
                <div className="align-items-center d-flex flex-wrap gap-2 justify-content-center ">
                    {shuffledCategories.slice(0, 4).map((tools) => (
                        <div className="w-100 mx-auto " key={tools.name}>
                            <h1 className="py-2 text-center text-white">{tools.category}</h1>

                            <div className="align-items-center d-flex flex-wrap gap-2 justify-content-center my-4">
                                {shuffleArray(tools.tools).map((tool) => (
                                    <Link
                                        key={tool.name}
                                        className="tool-btn"
                                        to={`/${tools.slug}/${tool.slug}`}
                                    >
                                        <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
                                        {tool.name.length < 17 ? tool.name : `${tool.name.substring(0, 15)}..`}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
