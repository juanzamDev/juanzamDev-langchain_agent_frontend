import axios from "axios"

export const tenderAgentQuery = async(query, files) => {
  console.log(query)
  console.log(files)
    try{
        const response = await axios.post("https://", {
            prompt: query,
            files: files
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
        // .then((response) => console.log(response.data))
        // .then(data => console.log(data))
    }catch(error){
        console.error(error)
    }
}