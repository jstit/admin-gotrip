import React, { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

const Theme = (props) => {
    const { children } = props;
    const [state, setState] = useState({
        themeMode: "light",
    });

    const onToggleTheme = (theme) => {
        if (theme) {
            setState((prevState) => ({ ...prevState, themeMode: theme }));
        } else {
            setState((prevState) => ({
                ...prevState,
                themeMode: prevState.themeMode === "light" ? "dark" : "light",
            }));
        }
    };

    const exportValue = useMemo(() => {
        return {
            themeMode: state.themeMode,
            onToggleTheme,
        };
    }, [state]);

    return (
        <ThemeContext.Provider value={exportValue}>
            <div className={`${state.themeMode} sidebar-expand`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default Theme;
