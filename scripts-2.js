//count how many letters occur eachtime in a file/string
//First convert everything to an array
//match if a character exist then - Filter out characters we don't need
// Change everything to lowercase
// Use reduce to make an object of counter of characters
// use Object entries to convert to 2D Array


const source = `
<!doctype html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8">
    <title>New Tab</title>
    <style>
      body {
        background: #35363A;
        margin: 0;
      }

      #backgroundImage {
        border: none;
        height: 100%;
        pointer-events: none;
        position: fixed;
        top: 0;
        visibility: hidden;
        width: 100%;
      }

      [show-background-image] #backgroundImage {
        visibility: visible;
      }
    </style>
  </head>
  <body>
    <iframe id="backgroundImage" src="chrome-untrusted://new-tab-page/custom_background_image?url=https%3A%2F%2Flh4.googleusercontent.com%2Fproxy%2FgZlOVFyNDQCMjas48-vhA14DTOrvxCUaD3WDka0smfv7PM-_E71X40yi4TY_8LA4sRBbTNgL6cZFCRrumW-gKAO18G_xDTjLRz6S%3Dw3840-h2160-p-k-no-nd-mv"></iframe>
    <ntp-app></ntp-app>
    <script type="module" src="new_tab_page.js"></script>
    <link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
    <link rel="stylesheet" href="shared_vars.css">
  </body>
</html>
`

const isCharacterValid = (char) => {
    return char.match(/[a-zA-Z0-9]/)
}

const toLowerCase = (char) => char.toLowerCase()

const sortByValue = (a,b) => {
    //because it's 2D array we want to sort base on the 
    // second value which is the count
    return a[1] - b[1]
} 

const accumolatorCounter = ( charCountTotal, char) => {
    charCountTotal[char]
        ? charCountTotal[char] =  charCountTotal[char] +1
        : charCountTotal[char] =1
    return charCountTotal
}

const filteredArray = source
    .split('') //split each character into an item of an array
    .filter(isCharacterValid) //vaildate characters
    .map(toLowerCase)
    .reduce(accumolatorCounter, {})

const sortedArray = Object
    .entries(filteredArray)
    .sort(sortByValue)
    
console.log(filteredArray, 'sroted array', sortedArray)

