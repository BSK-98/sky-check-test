import './style.css'
import { app, startWebcam } from './components/app'

document.querySelector('#app').innerHTML = app ()

startWebcam (document.querySelector('#video-previewer'))

