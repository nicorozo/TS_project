import Greeter from './Components/Greeter/Greeter'
import Person from './Components/Greeter/Person'
import PersonList from './Components/Greeter/PersonList'
import Status from './Components/Greeter/Status'
import Button from './Components/Greeter/Button'
import './App.css'

function App() {
const personName = {
  first:'Nicolas',
  last: 'Rozo'
}
const nameList = [
  {
  first:'Nicolas',
  last: 'Rozo'
},{
  first:'Nicolas',
  last: 'Rozo'
},{
  first:'Nicolas',
  last: 'Rozo'
}]

  return (
    <>
      
      <Greeter text={'The count is '} messageCount={20} isLoggedIn={true}></Greeter>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
      <Status status='error'/>
      <Button handleClick={(event,id) =>{
        console.log('Clicked', event,id)
      }}></Button>
    </>
  )
}

export default App
