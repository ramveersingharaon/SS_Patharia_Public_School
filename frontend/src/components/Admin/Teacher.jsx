import React, { useEffect, useState } from 'react'
import './Teacher.css'
import { FaArrowLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { createTeacher, deleteTeacher, getTeacher } from '../../redux/actions/teacherAction';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, clearMessage } from '../../redux/reducers/teacherSlices';

const Teacher = () => {
    const { teachers, error, message } = useSelector(state => state.teacher)
    const dispatch = useDispatch()

    const initialState = {
        name: "",
        subject: ""
    }
    const [teacherData, setTeacherData] = useState(initialState)


    const onChangeHandler = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
    }

    const imageHandler = (e) => {
        const Reader = new FileReader();
        Reader.readAsDataURL(e.target.files[0]);
        Reader.onload = () => {
            if (Reader.readyState == 2) {
                setTeacherData({ ...teacherData, avatar: Reader.result })
            }
        }
    }

    const submitTeacherHandler = async () => {
        await dispatch(createTeacher(teacherData))
        dispatch(getTeacher())
        setTeacherData(initialState)
    }

    useEffect(() => {
        dispatch(getTeacher())
    }, [])

    //DELETE TEACHER
    const deleteTeacherHandle = async (_id) => {
        await dispatch(deleteTeacher(_id))
        dispatch(getTeacher())

    }


    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearError())
        }
        if (message) {
            toast.success(message)
            dispatch(clearMessage())
        }
    }, [message, error, dispatch])

    return (
        <div className='teacher'>
            <div className="teacherFormContainer">
                <h1 style={{ textAlign: "center" }}>ADD TEACHER</h1>
                <form className='teacherForm'>
                    <input type="text" name='name' value={teacherData.name} placeholder='Name' onChange={onChangeHandler} />
                    <input type="text" name='subject' value={teacherData.subject} placeholder='Subject' onChange={onChangeHandler} />
                    <input type="file" accept='image/' onChange={imageHandler} />
                </form>
                <button className='addTeacherBtn' onClick={submitTeacherHandler}>Add Teacher</button>
            </div>
            <div className="teacherTeamContainer">
                {teachers.map((teacher) => {
                    return <div className="adminTeacherCard" key={teacher._id}>
                        <div className="teacherImage"><img src={teacher.avatar.url} alt="teacher" /></div>
                        <h2>{teacher.name}</h2>
                        <h3>{teacher.subject}</h3>
                        <button className='deleteTeacherBtn' onClick={() => deleteTeacherHandle(teacher._id)} >Delelete</button>
                    </div>
                })}
            </div>

            <div className="back">
                <NavLink to="/admin"> <button className='backAdmin'><FaArrowLeft />  Back</button></NavLink>
            </div>
        </div>
    )
}
export default Teacher
