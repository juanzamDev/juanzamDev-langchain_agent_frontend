import axios from "axios"

export const getAgents = async() => {
    try{
        const response = await axios.get("http://localhost:8002/getAgents")
        // .then((response) => console.log(response.data))
        console.log(response.data);
        // .then(data => console.log(data))
    }catch(error){
        console.error(error)
    }
}


// export const getAgentsTwo = () => {
//     fetch("http://localhost:8002/getAgents")
//     .then((response) => response.json())
//     .then(data => console.log(data))
// }