let audios = document.getElementsByTagName('audio')
let videos = document.getElementsByClassName('video')


// for (const audio of audios) {
    // audio.onplay = (event) => {
        // pauseOthers(event.target)
    // }
// }
// function pauseOthers(currentAudio) {
    // for (let audioTag of audios) {
        // if (currentAudio !== audioTag) {
            // audioTag.pause()
            // audioTag.currentTime = 0
        // }
    // }
// }
// 
// for (const video of videos) {
    // video.onplay = (event) => {
        // pauseOthersVideo(event.target)
// 
    // }
// }
// function pauseOthersVideo(currentVideo) {
    // for (let videoTag of videos) {
        // if (currentVideo !== videoTag) {
            // videoTag.pause()
            // videoTag.currentTime = 0
        // }
    // }
// }

for (let video of videos) {
    video.onplay = (event) => {
        pauseOthers(event.target)

    }
    for (let audio of audios) {
        audio.onplay = (event) => {
            pauseOthers(event.target)

        }
    }
}
function pauseOthers(currentVideoAudio) {

    for (const videoTag of videos) {
        for (let audioTag of audios) {
            if (currentVideoAudio !== videoTag && currentVideoAudio !== audioTag) {
                videoTag.pause()
                audioTag.pause()
                videoTag.currentTime = 0
                audioTag.currentTime = 0
            }
        }
    }
}