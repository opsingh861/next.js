import Link from "next/link";

const StudentList = () => {
    const list = ['John', 'Jill', 'Jack'];
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {list.map((student, index) => (
                    <li key={index}><Link href={`/studentlist/${student}`}>{student}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;