import create from "zustand"

export const modeState = create(set => ({
    mode: "light",
}))

export function changeTheme() {
    if (modeState.getState().mode == "light"){ 
        modeState.setState({ mode: "dark" })
    }
    else {
        modeState.setState({ mode: "light" })
    }
    return modeState.getState().mode
}
