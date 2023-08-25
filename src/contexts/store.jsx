import { createContext, useContext, useState } from "react";
const Context = createContext()



export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(undefined)
    const [file, setFile] = useState('/assets/favicon.ico')


    const handleUpload = (e) => {
        const newfile = e.target.files[0]
        const reader = new FileReader()

        reader.onload = () => {
            setFile(reader.result)
        }
        if (newfile) {
            reader.readAsDataURL(newfile)
        }
    }

    return (
        <Context.Provider
            value={{
                activeMenu,
                setActiveMenu,
                darkMode,
                setDarkMode,
                file,
                handleUpload,
                setFile,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)