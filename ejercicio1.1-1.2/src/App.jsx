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
      <Part part = {props.partes[0]} exercises = {props.exercisess[0]} />
      <Part part = {props.partes[1]} exercises = {props.exercisess[1]} />
      <Part part = {props.partes[2]} exercises = {props.exercisess[2]} />
      
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
  const partes = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercisess = [10, 7, 14]
  //const exercises1 = 10
  //const exercises2 = 7
  //const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content partes = {partes} exercisess = {exercisess}/>
      <Total total = {exercisess[0] + exercisess[1] + exercisess[2]} />
    </div>
  )
}

export default App
