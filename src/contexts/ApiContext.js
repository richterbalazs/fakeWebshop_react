import { createContext, useEffect,  useState } from "react";
import { myAxios } from "./MyAxios";

    export const ApiContext = createContext("");
    export const ApiProvider = ({children}) => {
        const [termekLista, setTermekLista]=useState([]);
            const getAdat= async(vegpont) => {
                try {
                    const response = await myAxios.get(vegpont);
                    //console.log("adat:", response.data);
                    setTermekLista(response.data);
                }
                catch (err){
                    console.log("Hiba történt az adat elküldésekor", err);
                } finally {
                    
                }
            }

            let vegpont="/products";
            
            /* useeffect hook segítségével hívjuk meg az aszinkron get lépéseket */

            useEffect(()=>{
                getAdat(vegpont);
            },[]);

        return ( 
        <ApiContext.Provider value={{termekLista}}>
            {children}
        </ApiContext.Provider>
        );
    };