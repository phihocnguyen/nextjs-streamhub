import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    headers: {
        Accept: 'application/json'
    }
})

export const getData = async (url: string) => {
    const response = await axiosInstance.get(`${url}`)
    return response.data
}

export const getDataWithId = async (url: string, id: string) => {
    const response = await axiosInstance.get(`${url}/${id}`)
    return response.data
}

export const postData = async (url: string, data: any) => {
    const response = await axiosInstance.post(`${url}`, data)
    return response.data
}

export const putData = async (url: string, id: string, endPoint:string, data: any) => {
    const response = await axiosInstance.put(`${url}/${id}/${endPoint}`, data)
    return response.data
}

export const deleteData = async (url: string, id: string) => {
    const response = await axiosInstance.delete(`${url}/:id`)
    return response.data
}