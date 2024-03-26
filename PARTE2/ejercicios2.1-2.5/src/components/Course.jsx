const Header = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>{props.course.name} {props.course.exercises}</p>
        </>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <>
            <p><strong>Number of exercises {total}</strong></p>
        </>
    )
}

const Course = ({ course }) => {
    const partes = course.parts
    //const partes = course.map(cours => cours.parts)
    //const names = course.map(cours => cours.name)
    return (
        <>
            <Header name={course.name} />
            {partes.map(part =>
                <Part key={part.id} course={part} />
            )}
            <Total parts={partes} />

        </>
    )
}

export default Course