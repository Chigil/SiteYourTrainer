import {$authHost, $host} from "./index";

export const createRecord = async (body) =>{
    const {data} = await $authHost.post('api/record',body)
    return data
}

export const deleteRecord = async (id) =>{
    const {data} = await $authHost.delete('api/record/'+id.id)
    return data
}

export const getRecord = async (body) =>{
    const {data} = await $host.get('api/record',body)
    return data
}

