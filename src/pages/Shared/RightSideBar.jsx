/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = ({ categoryName }) => {
    const [filterTools, setFilterTools] = useState([])
    const [allTools, setAllTools] = useState([])
    if (!categoryName) {
        return <>Loding categoryName</>
    }
    const category = categoryName.replace(/-/g, ' ');

    useEffect(() => {
        fetch('/tools.json')
            .then(response => response.json())
            .then(data => {
                const filtered = data.filter(tool => tool.slug === categoryName);
                setFilterTools(filtered[0].tools);
                setAllTools(data)
            })
    }, [categoryName])

    const shuffledTools = allTools.sort(() => Math.random() - 0.5);
    const randomSubset = shuffledTools.slice(0, 3);

    return (
        <div>
            <h3 className="py-2 text-center text-white" >See more {category}</h3>

            <>
                <div className="w-100 mx-auto my-2 "  >

                    <div className="align-items-center d-flex flex-wrap gap-2 justify-content-center my-4">
                        {
                            filterTools.map((tool) => <Link
                                key={tool.name}
                                className="tool-btn"
                                // to={'/age-calculator'}
                                to={`/${categoryName}/${tool.slug}`}
                            >
                                <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
                                {tool.name.length < 17 ? tool.name : `${tool.name.substring(0, 15)}..`}
                            </Link>
                            )
                        }
                    </div>
                </div>
            </>

            {

                randomSubset.map(((tools, index) => <>
                    <div className="w-100 mx-auto my-2 " key={index} >
                        <h5 className="py-2 text-center text-white" > {tools.category}</h5>

                        <div className="align-items-center d-flex flex-wrap gap-2 justify-content-center my-4">
                            {
                                tools.tools.map((tool) => <Link
                                    key={tool.name}
                                    className="tool-btn"
                                    // to={'/age-calculator'}
                                    to={`${tools?.slug}/${tool.slug}`}
                                >
                                    <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
                                    {tool.name.length < 17 ? tool.name : `${tool.name.substring(0, 15)}..`}
                                </Link>
                                )
                            }
                        </div>

                    </div>
                </>))
            }



        </div>
    );
};

export default RightSideBar;