'use client'
import './style.css'

import { useState } from "react"

const User = () => {
    const [color, setColor] = useState({ color: 'red' })
    return (
        <div>
            <h1>User Page</h1>
            <h2 style={color}>Use of inline css</h2>
            <button onClick={() => setColor({ color: 'blue' })}>Click Me</button>
            <h3>Use of css module</h3>
        </div >
    )
}

export default User