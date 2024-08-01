import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'
import usestore from '../store';

const useApp = () => {
    const { currentUser: { uid } } = getAuth();
    const boardsColRef = collection(db, `users/${uid}/boards`);
    const { setBoards, addBoard } = usestore();

    const updateBoardData = async (boardId, tabs) => {
        const docRef = doc(db, `users/${uid}/boardsData/${boardId}`)
        try {
            await updateDoc(docRef, { tabs })
        } catch (error) {
            console.log(error);

        }
    }

    const fetchBoard = async (boardId) => {
        const docRef = doc(db, `users/${uid}/boardsData/${boardId}`)
        try {
            const doc = await getDoc(docRef)
            if (doc.exists) {
                return doc.data()
            }
            else return null
        } catch (error) {
            console.log(error);
        }
    }

    const createBoard = async ({ name, color }) => {
        try {
            const doc = await addDoc(boardsColRef, {
                name,
                color,
                createdAt: serverTimestamp()
            })
            addBoard({ name, color, createdAt: new Date().toLocaleString('en-US'), id: doc.id })
        } catch (error) {
            console.log(error);
            throw (error)

        }
    }
    const fetchBoards = async (setloading) => {
        try {
            const q = query(boardsColRef, orderBy('createdAt', 'desc'))
            const querySnapShot = await getDocs(q)
            const boards = querySnapShot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                createdAt: doc.data().createdAt.toDate().toLocaleString('en-US')
            }))
            setBoards(boards);

        } catch (error) {
            console.log(error);

        }
        finally {
            if (setloading) setloading(false)
        }
    }


    return { createBoard, fetchBoards, fetchBoard, updateBoardData }
}
export default useApp; 