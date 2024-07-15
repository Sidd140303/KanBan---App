import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'

const useApp = () => {
    const { currentUser: { uid } } = getAuth();
    const boardsColRef = collection(db, `users/${uid}/boards`);

    const createBoard = async ({ name, color }) => {
        try {
            await addDoc(boardsColRef, {
                name,
                color,
                createdAt: serverTimestamp()
            })

        } catch (error) {
            console.log(error);
            throw (error)

        }
    }
    const fetchBoards = async () => {
        try {
            const querySnapShot = await getDocs(boardsColRef)
            const boards = querySnapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            console.log(boards);

        } catch (error) {
            console.log(error);
            throw (error)

        }
    }


    return { createBoard, fetchBoards }
}
export default useApp; 