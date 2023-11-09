// Write your function here
const getElementsGreaterThan10AtProperty = (obj, key) => {
    if(!(Array.isArray(obj[key])) || !obj[key] || obj[key].length === 0) return undefined;

    const filteredArray = obj[key].filter(el => el > 10);
    return filteredArray;
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]