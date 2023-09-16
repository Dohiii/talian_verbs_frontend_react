import verbsData from "./db/db";


const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}



async function filterVerbsOnLocalDb(category, zwrotne, osoba, tense) {
  const initialState = {
    category: category.length === 0 ? getRandomElementFromArray(['regularny', 'nieregularny']) : category[0],
    zwrotne: zwrotne.length === 0 ? false : zwrotne[0],
    osoba: osoba.length === 0 ? 'IO' : osoba[0],
    tense: tense.length === 0 ? 'Presente Indicativo' : tense[0]
  };

  const filteredVerb = [];
  verbsData.forEach((verb) => {
    verb.osoba.forEach((verbOsoba) => {



      if (
        verb.zwrotne === initialState.zwrotne &&
        verbOsoba.category === initialState.category &&
        verbOsoba.tense === initialState.tense
      ) {
        let newVerbOsoba = { ...verbOsoba };
        newVerbOsoba.czasownik = verb.czasownik
        newVerbOsoba.tlumaczenie = verb.tlumaczenie
        newVerbOsoba.correctWord = newVerbOsoba[initialState.osoba]
        newVerbOsoba.pluc = initialState.osoba
        filteredVerb.push(newVerbOsoba)
      }
    });
  });

  shuffle(filteredVerb);

  const result = await filteredVerb.find((element) => element.correctWord.length > 0);

  return { verb: result } || 'no such verb';
}

export default filterVerbsOnLocalDb