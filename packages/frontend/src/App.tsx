import './App.css'
import Button from './components/atoms/button'
import Paragraph from './components/atoms/paragraph'

function App() {

  return (
    <main className='main'>
      <Paragraph text='Drag & Drop your image here' className='paragraph paragraph--gray-2'/>
      <Button text='Choose a file' className='button'/>
    </main>
  )
}

export default App
