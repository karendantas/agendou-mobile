import { schedule, scheduleSection } from "@/src/@types/schedule";
import { Button } from "@/src/components/Button";
import { CustomerSchedule } from "@/src/components/CustomerSchedule";
import { Header } from "@/src/components/Header";
import { Input } from "@/src/components/Input";
import { useEffect, useState } from "react";
import { ScrollView, SectionList, Text, View } from "react-native";
import { ScheduleModal } from "../CreateSchedule";
import { Link } from "expo-router";
import { theme } from "@/src/theme/theme";
import { addSchedule, getSchedules } from "@/src/api/queries";

export function Home () {
    const [openCreateScheduleModal, setOpenCreateScheduleModal] = useState(false)
    const [customersScheduled, setCustomersScheduled] = useState<scheduleSection[]>([])

    async function loadSchedules () {
        const mappedSchedules = await getSchedules()
        setCustomersScheduled(mappedSchedules)
    }

    useEffect(() => {
        loadSchedules()
    }, [customersScheduled])

    async function handleCreateNewSchedule(newSchedule: schedule){
        await addSchedule(newSchedule)
    }
    

    return (
        <View style = {{flex:1, paddingHorizontal:12, paddingTop: 120 }}>
            <Header />
            
            <View>
                <View style ={{alignSelf: "flex-end", marginTop: 20}}>

                    <Button 
                        title="Criar agendamento" 
                        icon="plus" 
                        iconPosition="left"
                        width={200}
                        onPress={() => setOpenCreateScheduleModal(true)}
                    />
                </View>
            
                <SectionList
                    sections={customersScheduled} 
                    keyExtractor={(item, index) => item.time + index}
                        renderItem={({item}) => (
                            <Link href={`/(private)/schedule/${item.id}` as any} style= {{marginBottom:12}}>
                            
                            <CustomerSchedule 
                                id = {item.id}
                                customer={item.customer} 
                                date={item.date} 
                                service={item.service} 
                                status={item.status} 
                                time={item.time}
                            />
                            </Link>
                        )}
                        renderSectionHeader={({section: {title}}) => (
                        <Text style = {{fontSize: 20, fontWeight: 700, color: theme.secondary}}>{title}</Text>
                        )}
                    contentContainerStyle = {{
                        paddingBottom: 70
                    }}
                    showsVerticalScrollIndicator = {false}
                />
          
                        
            </View>

           <ScheduleModal 
                visible = {openCreateScheduleModal} 
                onClose={() => setOpenCreateScheduleModal(false)}
                onSave={(newSchedule) => handleCreateNewSchedule(newSchedule)}
            />
        </View>
    )
}