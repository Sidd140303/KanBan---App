import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'
import usestore from '../store';

const useApp = () => {
    const { currentUser: { uid } } = getAuth();
    const boardsColRef = collection(db, `users/${uid}/boards`);
    const { setBoards, addBoard } = usestore();

    const createBoard = async ({ name, color }) => {
        try {
            await addDoc(boardsColRef, {
                name,
                color,
                createdAt: serverTimestamp()
            })
            addBoard({ name, color, createdAt: new Date().toLocaleDateString() })
        } catch (error) {
            console.log(error);
            throw (error)

        }
    }
    const fetchBoards = async (setloading) => {
        try {
            const q = query(boardsColRef, orderBy('createdAt', 'desc'))
            const querySnapShot = await getDocs(q)
            const boards = querySnapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id, createdAt: doc.data().createdAt.toDate().toLocaleDateString() }))
            setBoards(boards);

        } catch (error) {
            console.log(error);

        }
        finally {
            if (setloading) setloading(false)
        }
    }


    return { createBoard, fetchBoards }
}
export default useApp; 