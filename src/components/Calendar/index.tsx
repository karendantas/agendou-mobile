import { theme } from "@/src/theme/theme"
import { ptBR } from "@/src/utils/calendarUtils"
import {
    Calendar as RNCalendar,
    LocaleConfig,
    CalendarProps
} from "react-native-calendars"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export function Calendar({...rest}:CalendarProps){

    return (
        <RNCalendar
            hideExtraDays
            style = {{
                borderColor: "#e5e7eb",
                borderRadius: 12,
                borderWidth: 1,
            }}
             theme={{
                selectedDayBackgroundColor: theme.primary,
                monthTextColor: theme.primary,
                arrowColor: theme.primary,
                }}

            {...rest}
        
        />
    )
}