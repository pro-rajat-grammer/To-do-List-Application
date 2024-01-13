import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './Home.module.css'

const Todo = () => {

    let deleteTask = (e) => {
        axios.delete(`http://localhost:5000/employee/${e}`)
        window.location.assign('Todo')
    }

    let [name, setname] = useState('')
    let dname = (e) => { setname(e.target.value) }
    let formHandle = (e) => {
        window.location.assign('Todo')

        e.preventDefault()

        let load = {
            name: name
        }
        axios.post("http://localhost:5000/employee", load)
    }

    // get
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/employee")
            .then((e) => { setdata(e.data) })
    }, [])
    return (

        <div id={style.main}>

            <div id={style.header}>

                <h2>TODO </h2>

                <div>
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">TODO</a>
                </div>

            </div>

            <div id={style.input}>

            <input type="text" onChange={dname} placeholder='ENTER YOUR TASK' />

            <button onClick={formHandle}>submit</button>

            </div>


            <div id={style.tasklist}>
                {data.map((e) => {
                    return (
                        <div >
                            <h2> TASK : {e.name}</h2>
                            <button onClick={() => { deleteTask(e.id) }}>remove </button>
                        
                        </div>
                    )
                })}
            </div>

        </div>)

}

export default Todo
