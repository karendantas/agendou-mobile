import { Input } from "@/src/components/Input";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Calendar } from "@/src/components/Calendar";
import { schedule } from "@/src/@types/schedule";
import { useState } from "react";
import { Button } from "@/src/components/Button";

export function ScheduleDetail(data: schedule) {
      const [customer, setCustomer] = useState("");
      const [service, setService] = useState("");
      const [date, setDate] = useState("");
      const [time, setTime] = useState("");
    
      const handleSave = () => {
        if (!customer || !service || !date || !time) return;
        onSave({ id: 3, customer, service, date, time, status: "agendado" });
        setCustomer("");
        setService("");
        setDate("");
        setTime("");
        onClose();
      };
    return(
        <View style={styles.container}>
                 <Text style={styles.title}>Novo Agendamento</Text>
       
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
              
                 <View style={styles.actions}>
                   <Button title = "Excluir" variant="secondary"/>
                  
                   <Button title = "Confirmar" />
                 </View>
               </View>

    )
}