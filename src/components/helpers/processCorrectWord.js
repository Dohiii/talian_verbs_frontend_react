const processCorrectVerb = (word) => {
  let correctVerbArr = []

  if (word.includes(";") || word.includes(",")) {
    const tempArr = word.split(/[;,]/)
    tempArr.forEach(word => {
      const newWord = word.trim()
      correctVerbArr.push(newWord)
    })
  } else {
    const newWord = word.trim()
    correctVerbArr.push(newWord)
  }
  return correctVerbArr

}

export default processCorrectVerb