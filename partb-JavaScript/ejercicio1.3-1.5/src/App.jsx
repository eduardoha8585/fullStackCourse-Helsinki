import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

const Part = (props) => {

  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.partes} {props.exercisess}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content partes = {part1.name} exercisess = {part1.exercises}/>
      <Content partes = {part2.name} exercisess = {part2.exercises}/>
      <Content partes = {part3.name} exercisess = {part3.exercises}/>
      <Total total = {part1.exercises + part2.exercises + part3.exercises}  />
    </div>
  )
}

export default App
