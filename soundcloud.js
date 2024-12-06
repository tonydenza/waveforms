const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

// Define the waveform gradient
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
gradient.addColorStop(0, '#656666') // Top color
gradient.addColorStop((canvas.height * 0.7) / canvas.height, '#656666') // Top color
gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#B1B1B1') // Bottom color
gradient.addColorStop(1, '#B1B1B1') // Bottom color

// Define the progress gradient
const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
progressGradient.addColorStop(0, '#EE772F') // Top color
progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, '#EB4926') // Top color
progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#F6B094') // Bottom color
progressGradient.addColorStop(1, '#F6B094') // Bottom color

// Create the waveform
const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: gradient,
  progressColor: progressGradient,
  barWidth: 2,
  url: 'tracks/160.wav',
})

// Play/pause on click
wavesurfer.on('interaction', () => {
  wavesurfer.playPause()
})

// Hover effect
{
  const hover = document.querySelector('#hover')
  const waveform = document.querySelector('#waveform')
  waveform.addEventListener('pointermove', (e) => (hover.style.width = `${e.offsetX}px`))
}

// Current time & duration
{
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secondsRemainder = Math.round(seconds) % 60
    const paddedSeconds = `0${secondsRemainder}`.slice(-2)
    return `${minutes}:${paddedSeconds}`
  }

  const timeEl = document.querySelector('#time')
  const durationEl = document.querySelector('#duration')
  wavesurfer.on('decode', (duration) => (durationEl.textContent = formatTime(duration)))
  wavesurfer.on('timeupdate', (currentTime) => (timeEl.textContent = formatTime(currentTime)))
}

const setlist = [
  { artist: "14", track: "Funky Pills", time: "00:00:00" },
  { artist: "Ramu", track: "Name One", time: "00:02:07" },
  { artist: "14", track: "Funky Pills", time: "00:03:15" },
  { artist: "Shadow Child", track: "P&O", time: "00:05:06" },
  { artist: "Ramu", track: "Name One", time: "00:05:57" },
  { artist: "Shadow Child", track: "P&O", time: "00:07:37" },
  { artist: "Willis Anne", track: "Direct Effect", time: "00:07:49" },
  { artist: "Shadow Child", track: "P&O", time: "00:08:01" },
  { artist: "Motorist", track: "Drip", time: "00:11:02" },
  { artist: "Willis Anne", track: "Direct Effect", time: "00:11:46" },
  { artist: "Tim Reaper & Dwarde", track: "Couch Surfing w/ DJ Sofa)", time: "00:16:15" },
  { artist: "Extra Spicy", track: "nickname - Simon Said", time: "00:19:17" },
  { artist: "Bakey", track: "Poison Dart", time: "00:23:04" },
  { artist: "Brieuc", track: "Soirée au Chantier [COMICSANS4]", time: "00:25:52" },
  { artist: "Soul Mass Transit System", track: "Stand By Me", time: "00:29:40" },
  { artist: "Alex Reece", track: "Chill Pill [2015 Re-Master]", time: "00:32:33" },
  { artist: "LUZ1E", track: "Early Reflections", time: "00:36:41" },
  { artist: "Alex Reece", track: "Chill Pill [2015 Re-Master]", time: "00:37:15" },
  { artist: "Duskope", track: "Give It To Me", time: "00:39:55" },
  { artist: "Motorist", track: "Blast Route", time: "00:43:01" },
  { artist: "Duskope", track: "Give It To Me", time: "00:43:36" },
  { artist: "Janeret", track: "Andromeda", time: "00:46:12" },
  { artist: "Motorist", track: "Blast Route", time: "00:47:06" },
  { artist: "LUZ1E", track: "Hyperfunk (Deep 8reak Cut)", time: "00:51:12" },
  { artist: "Ghettopír", track: "Way Back Home", time: "00:54:42" },
  { artist: "LUZ1E", track: "Hyperfunk (Deep 8reak Cut)", time: "00:55:09" },
  { artist: "Rick Wade", track: "Quantum Jit", time: "00:57:09" },
  { artist: "Aphex Twin", track: "Polynomial-C", time: "01:00:49" },
  { artist: "LUZ1E", track: "Ridin", time: "01:04:28" },
  { artist: "Baltra", track: "Battery Boys (Baltra Instrumental Remix)", time: "01:07:44" },
  { artist: "Choopsie", track: "Away", time: "01:12:15" }
];