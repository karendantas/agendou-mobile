import { schedule, scheduleSection } from "@/src/@types/schedule";
import { api } from "..";
import { ErrorMessage } from "@/src/utils/errorMessage";
import { Alert } from "react-native";

export async function getSchedules(): Promise<scheduleSection[]>{
    const {data} = await api.get<schedule[]>('/appointments')

    return data.reduce<scheduleSection[]>((sections, schedule) => {
        const section = sections.find(sec => sec.title === schedule.date)

        if (section) {
            section.data.push(schedule)
        }else{
            sections.push({
                title: schedule.date,
                data: [schedule]
            })
        }

        return sections
    }, [])
}

export async function addSchedule(data: schedule){
    try {
        await api.post('/appointments', data)
    } catch (error) {
        const message = ErrorMessage(error)
        Alert.alert("Erro", message)
    }
}

export async function getSchedule(scheduleId: string){
    try {
        const {data} = await api.get(`/appointments/${scheduleId}`)
        return data
    } catch (error) {
        const message = ErrorMessage(error)
        Alert.alert("Erro", message)
    }
}

export async function updateSchedule(scheduleId: string, data: schedule){
    try {
        await api.patch(`/appointments/${scheduleId}`, data)
    } catch (error) {
        const message = ErrorMessage(error)
        Alert.alert("Erro", message)
    }
}

export async function deleteSchedule(scheduleId:string){
    try {
        await api.delete(`/appointments/${scheduleId}`)
    } catch (error) {
        const message = ErrorMessage(error)
        Alert.alert("Erro", message)
    }
}