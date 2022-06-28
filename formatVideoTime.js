const formatVideoTime = (seconds) => {
  try {
    const date = new Date(0)
    date.setSeconds(seconds)
    const time = date.toISOString().slice(11, 19)
    const result = time.startsWith('00:0') ? time.slice(4) : time.startsWith('00') ? time.slice(3) : time.length === 8 && time.startsWith('0') ? time.slice(1) : time
    return result
  } catch (error) {
    return '0:00'
  }
}

formatVideoTime(20) // output: "0:20"
formatVideoTime(135) // output: "2:15"
formatVideoTime(3214) // output: "53:34"
formatVideoTime(32143) // output: "8:55:43"
