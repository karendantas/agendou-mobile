import { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/components/Input";
import { schedule } from "@/src/@types/schedule";



import { Button } from "@/src/components/Button";
import { Calendar } from "@/src/components/Calendar";

interface ScheduleModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: schedule) => void;
}

export function ScheduleModal({ visible, onClose, onSave }: ScheduleModalProps) {
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

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
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
            <Button title = "Cancelar" onPress={onClose} variant="secondary"/>
           
            <Button title = "Confirmar" onPress={handleSave}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
