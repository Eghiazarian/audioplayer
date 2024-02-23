let mediaPlayers = document.getElementsByClassName('mediaPlayer')


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

for (let mediaPlayer of mediaPlayers) {
    mediaPlayer.onplay = (event) => {
        pauseOthers(event.target)
    }
}
function pauseOthers(currentMediaPlayer) {

    for (let mediaPlayer of mediaPlayers) {
        if (mediaPlayer !== currentMediaPlayer) {
            mediaPlayer.pause()
            mediaPlayer.currentTime = 0
        }
    }
}