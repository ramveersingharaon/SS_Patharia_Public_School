import React, { useEffect } from 'react'
import './TeacherTeam.css'
import { useDispatch } from 'react-redux'
import { getTeacher } from '../../redux/actions/teacherAction'
import { useSelector } from 'react-redux'


const TeacherTeam = () => {
    const { teachers } = useSelector(state => state.teacher)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTeacher())

    }, [])

    return (
        <>
            {teachers.map((teacher) => {
                return <div className="TeamCardBox" key={teacher._id}>
                    <img src={teacher.avatar.url} alt="teacher" />
                    <h2>{teacher.name}</h2>
                    <h3>{teacher.subject}</h3>

                </div>
            })}




        </>
    )
}

export default TeacherTeam
