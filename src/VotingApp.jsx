import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'


//TODO falta el store
export const VotingApp = () => {
  return (
    <>

        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>

    </>
  )
}
