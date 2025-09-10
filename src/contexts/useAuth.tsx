import { createContext, useState } from "react"

interface useAuthProps {
    isAuth: boolean
}

export const AuthContext = createContext({} as useAuthProps)

export function AuthProvider ({children}: {children: React.ReactNode}) {
    const [isAuth, setIsAuth] = useState(true)

    return (
        <AuthContext.Provider
            value={{
                isAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}