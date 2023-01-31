export function playSample(audioElementId, drumId) {
  document.getElementById(audioElementId).play()
  document.getElementById('display').innerText = drumId
}
