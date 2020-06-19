import ExecuteApiCall from './apiClient';

const baseUrl = 'https://findfalcone.herokuapp.com/'

export function fetchPlanets(){
    return ExecuteApiCall('get',`${baseUrl}planets`);
}

export function fetchVehicles(){
    return ExecuteApiCall('get',`${baseUrl}vehicles`);
}

export function fetchToken(){
    return ExecuteApiCall('post',`${baseUrl}token`);
}

export function fetchSearchResults(payload){
    return ExecuteApiCall('post',`${baseUrl}find`, payload);
}