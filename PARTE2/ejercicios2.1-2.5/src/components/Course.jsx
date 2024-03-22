const Header = (props) => {
    console.log('Header', props)
    return (
        <>
            <h1>{props.course.name}</h1>
        </>
    )
}

const Content = (props) => {
    console.log('Content', props)
    return (
        <>
            <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
            <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
            <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
        </>
    )
}

const Course = ({ course }) => {
    console.log('Course', course);
    return (
        <>
            <Header course={course} />
            <Content course={course} />
        </>
    )
}

export default Course