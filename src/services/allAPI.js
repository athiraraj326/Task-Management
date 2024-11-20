import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// user register API
export const registerAPI = async (reqBody)=>{
    return await commonAPI('POST',`${SERVERURL}/register`,reqBody)
}

// user login API
export const loginAPI = async (reqBody)=>{
    return await commonAPI('POST',`${SERVERURL}/login`,reqBody)
}

// add Task
export const addTaskAPI = async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVERURL}/add-task`,reqBody,reqHeader)
}

// get all user tasks
export const userTaskAPI = async (reqHeader)=>{
    return await commonAPI('GET',`${SERVERURL}/user-tasks`,{},reqHeader)
}

// update tasks
export const updateTaskAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${SERVERURL}/${id}/edit-task`,reqBody,reqHeader)
}

// delete task
export const userTaskDeleteAPI = async (id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVERURL}/${id}/delete`,{},reqHeader)
}