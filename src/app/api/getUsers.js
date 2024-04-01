import axios from "axios"

export const getUsers = async() => {
    try{
        const response = await axios.get("https://rickandmortyapi.com/api/character/1")
        // .then((response) => console.log(response.data))
        console.log(response.data);
        // .then(data => console.log(data))
    }catch(error){
        console.error(error)
    }
}

export const getUsersTwo = () => {
    fetch("https://rickandmortyapi.com/api/character/2")
    .then((response) => response.json())
    .then(data => console.log(data))
}