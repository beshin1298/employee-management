import './App.css'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import EmployeeComponent from './component/EmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <ListEmployeeComponent></ListEmployeeComponent>}></Route>
        <Route path='/employees' element= { <ListEmployeeComponent></ListEmployeeComponent>}></Route>
        <Route path='/add-employee' element= { <EmployeeComponent></EmployeeComponent>}></Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
