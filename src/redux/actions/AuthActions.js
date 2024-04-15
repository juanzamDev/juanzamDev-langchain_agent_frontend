import axiosClient from "@/config/AxiosClient";
import { getInfo } from "../features/userSlice";

export function LoginAction(user) {
    return async()=>{
        try {
            const { data } = await axiosClient.post("/login", user)
            console.log(data);
            dispatch(getInfo(data))
        } catch (error) {
            console.log("error")
        }
    }
}