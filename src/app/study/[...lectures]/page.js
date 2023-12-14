'use client'
const Lecture = ({ params }) => {
    // console.log(params)
    const { day, lecture } = params.lectures
    console.log(params.lectures[0])
    console.log(params.lectures[1])
    return (
        <div>
            <h1>College day: {params.lectures[0]}</h1>
            <h2>Lecture No: {params.lectures[1]}</h2>
        </div>
    )
}

export default Lecture