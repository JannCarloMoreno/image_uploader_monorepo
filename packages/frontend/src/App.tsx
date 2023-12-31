import './App.css'
import { ImageUploader, ImageLoader, Resume } from './components/templates'

function App() {

  return (
    <main className='App'>
        {/* <ImageUploader titleText='Upload your image' subTitleText='File should be Jpeg, Png...' dragAndDropText='Drag & Drop your image Here' imgSrc='image.svg' imgAltText='ilustrative image icon' buttonText='Choose a file'/> */}
        {/* <ImageLoader text='Uploading...'/> */}
        <Resume iconSrc='/success_icon.svg' text='Uploaded Successfully!' imgSrc='/imagen-prueba.jpg' buttonText='Copy Link' altText='' url='https://prueba.com.co' />
        <footer  className='App--footer'>
          <p>created by <b>janncarx</b> - devChallenges.io</p>
        </footer>
    </main>
  )
}

export default App
