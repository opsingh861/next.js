// 'use client'

export const Student = ({ params }) => {
    return (
        <div>
            <h1>Student details</h1>
            <h2>{params.student}</h2>
        </div>
    )
}

export default Student;