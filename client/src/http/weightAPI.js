import {$authHost, $host} from "./index";

export const createWeight = async (body) =>{
    const {data} = await $authHost.post('api/weight',body)
    return data
}

export const getWeight = async (body) =>{
    const {data} = await $host.get('api/weight',body)
    return data
}

