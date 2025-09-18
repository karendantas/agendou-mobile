import { scheduleSection } from "@/src/@types/schedule";
import { getSchedules } from "@/src/api/queries";
import { Calendar } from "@/src/components/Calendar";
import { theme } from "@/src/theme/theme";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function CalendarSchedule () {
    const [customersScheduled, setCustomersScheduled] = useState<scheduleSection[]>([])
    
    async function loadSchedules () {
        const mappedSchedules = await getSchedules()
        setCustomersScheduled(mappedSchedules)
    }
    
    useEffect(() => {
        loadSchedules()
    }, [customersScheduled])
    
    const markedDates = useMemo(() => {
        const marks: Record<string, any> = {}
        customersScheduled.forEach(schedule => {
         
            marks[schedule.title] = {
                selected: true,
                marked: true,
                color: theme.error                      
            }
          
        })
        return marks
    }, [customersScheduled])
    return (
        <View style = {styles.container}>
            <Text>Seus agendamentos no calendário!</Text>
            <Calendar 
                markedDates={markedDates}
            />
        </View>
    )
}