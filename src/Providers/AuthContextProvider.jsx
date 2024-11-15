/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext=createContext(null)
const AuthProvider=({children})=>{
    const [isSpanish,setIsSpanish] = useState(false)

    const allValues={isSpanish,setIsSpanish}
    return(
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;