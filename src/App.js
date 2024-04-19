import {Switch,Route} from 'react-router-dom'
import './App.css'
import FindDoctors from './components/FindDoctorsPage'


// write your code here
const App = () => (
  <Switch>
   <Route exact path="/"  component={FindDoctors}/>
  </Switch>
)

export default App