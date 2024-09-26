import {$authHost, $host} from "./index";

export const createTraining = async (body) =>{
    const {data} = await $authHost.post('api/training',body)
    return data
}
export const deleteTraining = async (id) =>{
    const {data} = await $authHost.delete(`api/training/${id.id}`)
    return data
}

export const getTraining = async (body) =>{
    const {data} = await $host.get('api/training',body)
    return data
}

export const getTrainingById = async (id) =>{
    const {data} = await $host.get(`api/training/${id.id}`)
    return data
}
