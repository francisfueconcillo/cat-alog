import axios, { AxiosRequestConfig, AxiosError, isAxiosError } from 'axios';
import AppConfig from './appConfig';

const headers = {
  'Content-Type': 'application/json',
  'x-api-key' : AppConfig.CAT_API_KEY,
};

// Create a request configuration object
const config: AxiosRequestConfig = {
  headers: headers,
};


const fetchCatBreeds = async () => {
  try {
    // https://api.thecatapi.com/v1/breeds
    const url = `${AppConfig.CAT_API_BASE_URL}/breeds`;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error: any) {
    if (isAxiosError(error)) {
      // Axios error
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // Server responded with an error status code
        throw Error('Server error: ' + JSON.stringify(axiosError.response.data));
      } else if (axiosError.request) {
        // The request was made but no response was received
        throw Error('No response received:', axiosError.request);
      } else {
        // Something happened in setting up the request that triggered an error
        throw Error('Request error: ' + axiosError.message);
      }
    } else {
      // Non-Axios error
      throw Error('Generic error: ' + error.message);
    }

  }

}

const searchImages = async(catId: string, page: number, pageLimit: number ) => {

  try {
    // https://api.thecatapi.com/v1/images/search?page=1&limit=10&breed_id=abys
    const queryParams = `?page=${page}&limit=${pageLimit}&breed_id=${catId}`;
    const url = `${AppConfig.CAT_API_BASE_URL}/images/search${queryParams}`;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error: any) {
    if (isAxiosError(error)) {
      // Axios error
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // Server responded with an error status code
        throw Error('Server error: ' + JSON.stringify(axiosError.response.data));
      } else if (axiosError.request) {
        // The request was made but no response was received
        throw Error('No response received:', axiosError.request);
      } else {
        // Something happened in setting up the request that triggered an error
        throw Error('Request error: ' + axiosError.message);
      }
    } else {
      // Non-Axios error
      console.error('Non-Axios error:', error.message);
    }
    
    throw Error('Generic error: ' + error.message);
  }


  
}


export { fetchCatBreeds, searchImages };

