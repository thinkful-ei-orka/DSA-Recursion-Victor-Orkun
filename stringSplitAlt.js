function splitString(string, separator) {
     if (string === '') {
          return ''
     }
     const newChar = string[0];
     if (newChar === separator) {
          return ',' + splitString(string.slice(1), separator);
          // return splitString(string.slice(1), separator);
     }
     else {
          return newChar + splitString(string.slice(1), separator);
     }
}

console.log(splitString('02/20/2020', '/'))