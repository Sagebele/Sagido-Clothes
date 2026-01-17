import axios from "axios";


export function getErrorMessage(err: unknown) {
    if (axios.isAxiosError(err)) {
        return err.response?.data?.message || err.message || "Request failed";
    }
    if (err instanceof Error) return err.message;
    
    return "Something went wrong";
}
