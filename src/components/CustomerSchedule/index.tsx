import { schedule } from "@/src/@types/schedule";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function CustomerSchedule ({ customer, date, service, time, status="agendado"}: schedule) {
    const statusColors: Record<string, string> = {
        agendado: "#4CAF50", 
        cancelado: "#F44336", 
        concluído: "#2196F3", 
    };
    
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.customer}>{customer}</Text>
                <Text
                style={[
                    styles.status,
                    { backgroundColor: statusColors[status] || "#999" },
                ]}
                >
                {status}
                </Text>
            </View>

            <Text style={styles.service}>{service}</Text>
            <Text style={styles.date}>
                {date} às {time}
            </Text>
        </View>
    )
}