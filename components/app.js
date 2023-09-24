
export const startWebcam  = (video) => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
    }).then((stream) => {
        video.srcObject = stream
    }).catch((error) => {
        console.error(error)
    })
}
  
export const app = () => {

    return `
        <header>
            <div class="logo">
                <h1>Skycheck</h1>
            </div>
        </header> 
        <div class="video">
            <video id="video-previewer" autoplay></video>
        </div>
    `
}

