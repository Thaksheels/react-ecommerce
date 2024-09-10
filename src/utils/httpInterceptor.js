import axios from "axios";




export const axiosInstance = axios.create({
    baseURL: "/api",
});
// Add http request interceptor
axiosInstance.interceptors.request.use(
    (request) => {
	// attach access token
	const identityStr = localStorage.getItem(
		"token"
	) ;
	if (identityStr) {
	    
	    request.headers = {
		...request.headers,
		Authorization: 'Bearer ' + identityStr,
            };
	}
	return request;
    },
    (error) => {
        Promise.reject(error);
    }
);
// Add http reponse interceptor
axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        console.log(
            // EventType.ShowWarningMessage,
            'Token expired! Please login again.'
        );
    } else {
        // Something wrong happened, more handlers could be added
        console.log('Error', error.message);
        Promise.reject(error);
    }
});