import { schedule, scheduleSection } from "@/src/@types/schedule";
import { api } from "..";

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
    await api.post('/appointments', data)
}