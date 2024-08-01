import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    loader: true,
    isLoggedIn: false,
    boards: [],
    areBoardsFetched: false,
    toastrMsg: '',
    setToastr: toastrMsg => set({ toastrMsg }, false, 'setToastr'),
    setBoards: (boards) => set({ boards, areBoardsFetched: true }, false, 'setboards'),
    addBoard: board => set((old) => ({ boards: [board, ...old.boards] }), false, "addBoard"),
    setLoginStatus: status => set({
        isLoggedIn: status,
        loader: false,
        boards: [],
        areBoardsFetched: false
    }, false, "setLoginStatus")
})


const usestore = create(devtools(store))
export default usestore;