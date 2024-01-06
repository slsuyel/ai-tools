import axios from 'axios';

export const callApi = async (method, dataObj = [], headers = {}) => {
    try {

        const response = await axios({
            method: method,
            url: `/tools.json`,
            data: dataObj,
            headers: headers
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else {
            console.error('Error making API call:', error);
            return null;
        }
    }
};



