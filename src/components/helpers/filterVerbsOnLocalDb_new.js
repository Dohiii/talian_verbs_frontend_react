import verbsData from "../../assets/db/db";


const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


async function filterVerbsOnLocalDb_new(category, zwrotne, osoba, tense) {

  const initialState = {
    category: "",
    zwrotne: false,
    osoba: "",
    tense: ""
  }

  // working with category
  if (category.length === 0) {
    let categoryVal = getRandomElementFromArray(['regularny', 'nieregularny'])
    initialState.category = categoryVal
  }
  if (category.length === 1) {
    let categoryVal = category[0]
    initialState.category = categoryVal
  }
  if (category.length === 2) {
    let categoryVal = getRandomElementFromArray(category)
    initialState.category = categoryVal
  }

  // working with zwrotne
  if (zwrotne.length === 0) {
    let zwrotneVal = false
    initialState.zwrotne = zwrotneVal
  }
  if (zwrotne.length === 1) {
    let zwrotneVal = zwrotne[0]
    initialState.zwrotne = zwrotneVal
  }
  if (zwrotne.length === 2) {
    let zwrotneVal = getRandomElementFromArray(zwrotne)
    initialState.zwrotne = zwrotneVal
  }

  //working with osoba
  if (osoba.length === 0) {
    let osobaVal = "IO"
    initialState.osoba = osobaVal
  }
  if (osoba.length === 1) {
    let osobaVal = osoba[0]
    initialState.osoba = osobaVal
  }
  if (osoba.length >= 2) {
    let osobaVal = getRandomElementFromArray(osoba)
    initialState.osoba = osobaVal
  }
  //working with tense
  if (tense.length === 0) {
    let tenseVal = "Presente Indicativo"
    initialState.tense = tenseVal
  }
  if (tense.length === 1) {
    let tenseVal = tense[0]
    initialState.tense = tenseVal
  }
  if (tense.length >= 2) {
    let tenseVal = getRandomElementFromArray(tense)
    initialState.tense = tenseVal
  }

  // const allVerbs = await Verb.find({ zwrotne: initialState.zwrotne })

  // console.log(verbsData)

  let allVerbs = await verbsData.filter(element => element["zwrotne"] === initialState.zwrotne)


  let filteredVerb = []

  allVerbs.forEach(verb => {
    verb.osoba.forEach(osoba => {

      // create a mutable variable that i can modify
      const newOsoba = { ...osoba };
      if (osoba.category === initialState.category && osoba.tense === initialState.tense) {
        newOsoba.czasownik = verb.czasownik
        newOsoba.tlumaczenie = verb.tlumaczenie
        newOsoba.correctWord = osoba[initialState.osoba]
        newOsoba.pluc = initialState.osoba
        filteredVerb.push(newOsoba)
      }
    })
  });

  shuffle(filteredVerb)

  let result = await filteredVerb.find(element => element[initialState.osoba].length > 0)

  // let getRandomVerb = getRandomElementFromArray(filteredVerb)

  if (!result) {
    result = "no such verb"
  }

  return { verb: result }
}


export default filterVerbsOnLocalDb_new