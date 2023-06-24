import './App.css'
import { ImageUploader, ImageLoader } from './components/templates'

function App() {

  return (
    <main className='App'>
        {/* <ImageUploader titleText='Upload your image' subTitleText='File should be Jpeg, Png...' dragAndDropText='Drag & Drop your image Here' imgSrc='image.svg' imgAltText='ilustrative image icon' buttonText='Choose a file'/> */}
        <ImageLoader text='Uploading...'/>
        <footer  className='App--footer'>
          <p>created by <b>janncarx</b> - devChallenges.io</p>
        </footer>
    </main>
  )
}

export default App
