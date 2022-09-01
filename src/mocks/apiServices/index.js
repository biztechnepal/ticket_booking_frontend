import axios from "axios";
import axiosClient from "src/utils/axios-client";
import storage from 'src/utils/storage';

// const headers = {
//     'Authorization': `Bearer ${storage.getTokenFromCookies('_autht')}`,
//   }
export const createApiService = url => { 
    return {
        fetchAll : ({page_size, page, sortBy, sortType, filters} = {}) => axiosClient.get(url, {
            params: {
                page_size,
                page,
                sortBy,
                sortType,
                filters,
            }
        },), //{page, limit , sort, sortDirection(Asc, Dsc), filters{term, Name, ...} }
        fetchById : id => axiosClient.get(`${url}${id}`), //{id}
        search: (page, text, filters) => axiosClient.get(url + 'Search/', {
            params: {
                page,
                text,
                filters
            },
            paramsSerializer: function(params) {
                return JSON.stringify(params, { encode: false });
            }
        }),
        //POST 
        create : post_data => axiosClient.post(url,post_data), //{Body}
        
        //PUT 
        update: (id, updatedData) => axiosClient.put(url + id,updatedData), //{id}, {Body}
        
        //DELETE 
        delete: id => axiosClient.delete(url + id), //{id}

        //Login
        login : (credentials) => axios.post(url, credentials)
    }
}
