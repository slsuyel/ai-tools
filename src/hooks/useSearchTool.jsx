import React from 'react';
import useToolsCategories from '../hooks/useToolsCategories';


const useSearchTool = (toolName) => {
    const { toolsCategories, isLoading } = useToolsCategories();

    if (isLoading) {
        return { result: null, isLoading: true };
    }

    const allTools = toolsCategories.flatMap(category => category.tools);
    const matchingTools = allTools.filter(tool => tool.name.toLowerCase().includes(toolName.toLowerCase()));

    if (matchingTools.length > 0) {
        return { result: matchingTools, isLoading: false };
    } else {
        return { result: 'No tools found', isLoading: false };
    }
};



export default useSearchTool;
