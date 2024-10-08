import axiosClient from "@/config/AxiosClient"

export const getAgents = async() => {
    try{
        const response = await axiosClient.get("/getAgents")
        return response.data
        // .then((response) => console.log(response.data))
    }catch(error){
        console.error(error)
    }
}


export const createUser = async(agentData) => {
    try {
        const response = await axiosClient.post("/signup", agentData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const loginUser = async(agentData) => {
    try {
        const response = await axiosClient.post("/login", agentData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


// export const getAgentsTwo = async() => {
//     return await fetch("http://localhost:8002/getAgents")
//         .then((response) => response.json())
//         .then(data => data)
//         .catch(error => {
//             console.error('Error fetching agents:', error);
//             // throw error;
//         });
// }