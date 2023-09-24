
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
        <div class="overlay"></div>
        <header>
            <div class="logo">
                <h1>
                    Skycheck 
                    <span class="material-symbols-outlined">
                        done
                    </span>
                </h1>
            </div>
        </header> 
        <nav>
            <div class="nav">
                <a href="#">
                    <span class="material-symbols-outlined">
                        group
                    </span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        widgets
                    </span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        manage_accounts
                    </span>
                </a>
                    <span class="material-symbols-outlined">
                        home_app_logo
                    </span>
                </a>
            </div>
        </nav>
        <div class="video">
            <video id="video-previewer" autoplay></video>
        </div>
        
    `
}

