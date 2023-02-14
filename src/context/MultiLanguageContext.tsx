import { useState, createContext } from "react"

const MultiLanguageContext = createContext({
  langType: "en",
  setLangType: (val : string) => {},
})

export default MultiLanguageContext

export function MultiLanguageProvider(props) {
    const [langType, setLangType] = useState("en")
    const value = { langType , setLangType }
  
    return (
      <MultiLanguageContext.Provider value={value}>
        {props.children}
      </MultiLanguageContext.Provider>
    )
}