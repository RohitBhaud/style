import './App.css'
import { Flex } from "./components/flex"
import { Btn1, Btn2 } from './components/button'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState("dark")


  return (
    <div className="App">

      <div>
        <h2>Theme is: {theme}</h2>

        <Btn2 theme={theme}>
          Clicked Me
        </Btn2>

        <Btn2
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
          }}
        >Change Theme</Btn2>

      </div>



      <Btn1>SignIn</Btn1>
      <Btn1>LogIn</Btn1>

      <h3>Without flex</h3>

      <div>
        <Btn1>One</Btn1>
      </div>
      <div>
        <Btn1>Two</Btn1>
      </div>

      <h3>Using flex</h3>
      <Flex>
        <div>
          <Btn1>One</Btn1>
        </div>
        <div>
          <Btn1>Two</Btn1>
        </div>
      </Flex>
    </div>

  )
}

export default App