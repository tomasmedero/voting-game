import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import { NavBar } from '../components'


export const AppRouter = () => {



  return (
    <>
    <NavBar />
      <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        
       
      </Routes>
    </>
  )
}
