import React, { createContext, useState } from "react";

interface AppContextInterface {
    xMode: boolean;
    toggleTheme: any;
    person1Win: number;
    person2Win: number;
    addPerson1Win: any;
    addPerson2Win: any;
}

const ThemeContext = createContext<AppContextInterface | null>(null);

const ThemeProvider = (props: any) => {
    const [xMode, setXMode] = useState<boolean>(true);
    const toggleTheme = () => {
        setXMode(!xMode)
    }
    const [person1Win, setPerson1Win] = useState<number>(0);
    const [person2Win, setPerson2Win] = useState<number>(0);
    const addPerson1Win = () => {
        setPerson1Win(person1Win+1);
    }
    const addPerson2Win = () => {
        setPerson2Win(person2Win+1);
    }

    return (
        <div>
            <ThemeContext.Provider value={{xMode, toggleTheme, person1Win, person2Win, addPerson1Win, addPerson2Win}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export {ThemeContext, ThemeProvider};