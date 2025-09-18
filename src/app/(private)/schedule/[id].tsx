import { schedule } from "@/src/@types/schedule";
import { getSchedule } from "@/src/api/queries";
import { ScheduleDetail } from "@/src/screens/ScheduleDetail";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";

export default function Screen(){
    const id = useLocalSearchParams()
    const navigation = useNavigation()

    useEffect(() => {
        const hideTabsOnPageFocus = () =>
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }})

        hideTabsOnPageFocus()

        return () =>
        navigation.getParent()?.setOptions({
            tabBarStyle: undefined,
        });
    }, [navigation])

    return <ScheduleDetail scheduleId={id.id as string}  />
}