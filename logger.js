// Console.log
function logger(log, type = 'log') {
  return console[type](log)
}

export default logger