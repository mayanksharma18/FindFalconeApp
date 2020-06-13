import axios from 'axios';

export default function ExecuteApiCall(method, baseURL, payload ={}) {
   const options ={
       method,
       url: baseURL,
       params: {},
       data: {},
       headers: { Accept: "application/json" }
   };

   switch(method) {
       case 'post':
       case 'put':
          Object.assign(options,{ data: payload });
          break;
       case 'get':
           Object.assign(options.params, payload);
           break;
        default:
           break;
   }              
   return axios(options);
}