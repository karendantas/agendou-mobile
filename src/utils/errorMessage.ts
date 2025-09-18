import { AxiosError } from "axios";

export function ErrorMessage(error:any){
    if (error instanceof AxiosError){
        const message = error.response?.data.message
        if (Array.isArray(message)) return message.join(', ')
        if (typeof message === 'string') return message
        else return 'Erro desconhecido';
    }
    if (error instanceof Error) return error.message
    return 'Erro desconhecido'
}