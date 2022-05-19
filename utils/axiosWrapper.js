import axios from 'axios'

export const axiosWrapper = async(endpoint, requestMethod, data) => {

   const body = {headers: {'Content-Type': 'application/json'}}

    const res = await axios({
        method: requestMethod,
        url: endpoint,
        baseURL: 'http://api.thenazrana.in/',
        data: data ? data : null,
        body: body
      });

      return res
}