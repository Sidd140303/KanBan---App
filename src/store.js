import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    loader: true,
    isLoggedIn: false,
    setLoginStatus: status => set({
        isLoggedIn: status,
        loader: false
    }, false, "setLoginStatus")
})


const usestore = create(devtools(store))
export default (usestore);