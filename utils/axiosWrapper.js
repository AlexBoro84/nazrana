import axios from 'axios'

export const axiosWrapper = async(endpoint, requestMethod, data, formdata) => {

  let body

  if(formdata){
     body = {headers: {'Content-Type': 'multipart/form-data'}}
  }else{
    body = {headers: {'Content-Type': 'application/json'}}
  }


    const res = await axios({
        method: requestMethod,
        url: endpoint,
        baseURL: 'https://api.thenazrana.in/',
        data: data ? data : null,
        body: body,
        withCredentials: true
      });

      return res
}