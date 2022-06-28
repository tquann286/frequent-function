const formatFileSize = (size) => {
  let i = Math.floor(Math.log(size) / Math.log(1024))

  return `${(size / Math.pow(1024, i)).toFixed(1)} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`
}

formatFileSize(32143332) // output: "30.7 MB"
formatFileSize(8904869085) // output: "8.3 GB"
