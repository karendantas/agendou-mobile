import { Input } from "@/src/components/Input";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { Calendar } from "@/src/components/Calendar";
import { schedule } from "@/src/@types/schedule";
import { useEffect, useState } from "react";
import { Button } from "@/src/components/Button";

import {Picker} from "@react-native-picker/picker"
import { theme } from "@/src/theme/theme";
import { deleteSchedule, getSchedule, updateSchedule } from "@/src/api/queries";
import { router, useRouter } from "expo-router";

interface scheduleDetailProps {
  scheduleId: string
}
export function ScheduleDetail({scheduleId}: scheduleDetailProps) {
      const [scheduleDetail, setScheduleDetail] = useState({} as schedule)
      
      const [customer, setCustomer] = useState("");
      const [service, setService] = useState("");
      const [date, setDate] = useState("");
      const [time, setTime] = useState("");
      const [status, setStatus] = useState<"agendado"| "concluído" | "cancelado">("agendado")
      
      const [loading, setLoading] = useState(false)

      const navigation = useRouter()

      const handleSave = async () => {
        if (!customer || !service || !date || !time) return;
        await updateSchedule(scheduleDetail.id, {
          id: scheduleDetail.id,
          customer,
          service,
          date,
          status,
          time,
        })

        navigation.back()
      };

      const handleDelete = async () => {
        await deleteSchedule(scheduleDetail.id)
        navigation.back()
      }

      async function getDetail(){
        try {
          setLoading(true)
          const data = await getSchedule(scheduleId)
          setScheduleDetail(data)
        } catch (error) {
          setLoading(false)
          return
        } finally{
          setLoading(false)
        }
      }
      useEffect(() => {
        setCustomer(scheduleDetail.customer);
        setService(scheduleDetail.service);
        setDate(scheduleDetail.date);
        setTime(scheduleDetail.time);
        setStatus(scheduleDetail.status)
      },[scheduleDetail] )
    
    useEffect(()=> {
        getDetail()
    }, [scheduleId])

    if (loading) return (
      <View style ={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator />
      </View>
      )
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Agendamento</Text>
       
                   <Input
                       placeholder="Nome do Cliente"
                       value={customer}
                       onChangeText={setCustomer}
                   />
       
                   <Input
                       placeholder="Serviço"
                       value={service}
                       onChangeText={setService}
                   />
       
                   <Calendar
                       onDayPress={(date) => setDate(date.dateString) }
                       markedDates={{[date]: {selected: true, disableTouchEvent: true}}}
                   />
                   <Input
                       placeholder="Hora (HH:mm)"
                       value={time}
                       onChangeText={setTime}
                   />

                  <Picker
                    selectedValue={status}
                    onValueChange={(itemValue) => {
                      setStatus(itemValue)
                    }}
                    style = {styles.input}
                    selectionColor={theme.primary}
                  >
                    <Picker.Item label="agendado" value="agendado"/>
                    <Picker.Item label="concluído" value="concluído"/>
                    <Picker.Item label="cancelado" value="cancelado"/>
                  </Picker>
              
                 <View style={styles.actions}>
                   <Button title = "Excluir" variant="secondary" onPress={handleDelete}/>
                  
                   <Button title = "Confirmar" onPress={handleSave} />
                 </View>
               </View>

    )
}