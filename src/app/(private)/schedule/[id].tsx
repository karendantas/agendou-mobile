import { ScheduleDetail } from "@/src/screens/ScheduleDetail";
import { useLocalSearchParams } from "expo-router";

export default function Screen(){
    const id = useLocalSearchParams()
    console.log(id)
    return <ScheduleDetail />
}