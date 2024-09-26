import {$authHost, $host} from "./index";

export const createNutrition = async (body) =>{
    const {data} = await $authHost.post('api/nutrition',body)
    return data
}
export const deleteNutrition = async (id) =>{
    const {data} = await $authHost.delete(`api/nutrition/${id.id}`)
    return data
}

export const getNutrition = async (body) =>{
    const {data} = await $host.get('api/nutrition',body)
    return data
}

