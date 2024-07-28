'use client'
import {createContext, useContext, useState} from 'react'

const appContext = createContext({
    token: '',
    setToken: (token: string) => {}
})


export const useAppContext = () => {
    const context = useContext(appContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context
}

const AppProvider = ({ children, initialToken = '' } : {children: React.ReactNode, initialToken?: string}) => {
    const [token,setToken] = useState(initialToken)
  return (
    <appContext.Provider value={{ token, setToken }}>
        {children}
    </appContext.Provider>
  )
}

export default AppProvider