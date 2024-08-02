import {
    collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, getDoc, updateDoc, deleteDoc
} from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'
import usestore from '../store';
import { useNavigate } from 'react-router-dom';

const useApp = () => {
    const navigate = useNavigate()
    const { currentUser: { uid } } = getAuth();
    const boardsColRef = collection(db, `users/${uid}/boards`);
    const { boards, setBoards, addBoard, setToastr } = usestore();

    const deleteBoard = async (boardId) => {
        try {
            const docRef = doc(db, `users/${uid}/boards/${boardId}`)
            await deleteDoc(docRef)
            const tBoards = boards.filter(board => board.id !== boardId)
            setBoards(tBoards)
            navigate('/boards')

        } catch (error) {
            setToastr("Error deleting board")
            throw error
        }
    }

    const updateBoardData = async (boardId, tabs) => {
        const docRef = doc(db, `users/${uid}/boardsData/${boardId}`)
        try {
            await updateDoc(docRef, { tabs, lastUpdated: serverTimestamp() })
        } catch (error) {
            console.log(error);
            setToastr("Error updating board")
            throw err
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
            setToastr("Error fetching board")
            throw err
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
            setToastr("Error creating board")
            throw err

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
            setToastr("Error fetching board")

        }
        finally {
            if (setloading) setloading(false)
        }
    }




    return { createBoard, fetchBoards, fetchBoard, updateBoardData, deleteBoard }
}
export default useApp; 