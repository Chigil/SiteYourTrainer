import {$authHost, $host} from "./index";

export const createExercise = async (body) =>{
    const {data} = await $authHost.post('api/exercise',body)
    return data
}

export const getExercise = async (body) =>{
    const {data} = await $host.get('api/exercise',body)
    return data
}

