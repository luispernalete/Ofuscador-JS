# <Ofuscador-Js>
## Installation - Necessary packages

* [NPM Version 10.2.4](https://www.npmjs.com/)
* [Node Version v21.5.0](https://nodejs.org/en)

Copy github project (optional)
[github proyect](https://github.com/luispernalete/Ofuscador-JS.git)
  
Create node project with the command
```bash
npm init
```

Install the following packages 
* **fs** version: 0.0.1-security
* **javascript-obfuscator** version: 4.1.0)

```bash
npm i fs@0.0.1-security
npm i javascript-obfuscator@4.1.0
```

## Creation of folders in the project

In the root folder of the project create the folder
**source-code** will contain the original source code files without obfuscation

In the root folder of the project create the folder
**output-code** will contain the files after obfuscation

![imagen de ejemplo directorio](img/dir.png)

## Creation of Index.js
Create a file in the root folder of the Index.js project and copy the following content
```jsx
const fs = require("fs");
const JavaScriptObfuscator = require('javascript-obfuscator');

//array with all the names of the files in the source-code directory that will be obfuscated
const arraySourceCode = [
    "login.js",
    "background-script.js",
    "home.js",
    "popup.js",
    "buscar.js",
    "scrips.js"
]

//setting
var config = { 
  compact: true,
	controlFlowFlattening: true,
	controlFlowFlatteningThreshold: 1,
	deadCodeInjection: true,
	deadCodeInjectionThreshold: 1,
	debugProtection: false,
	debugProtectionInterval: false,
	disableConsoleOutput: true,
	identifierNamesGenerator: 'hexadecimal',
	log: false,
	mangle: false,
	renameGlobals: false,
	rotateStringArray: true,
	selfDefending: true,
	stringArray: true,
	stringArrayEncoding: ['rc4'],
	stringArrayThreshold: 1,
	stringArrayIndexShift: true,
	stringArrayWrappersCount: 3,
  stringArrayWrappersChainedCalls: true,
	stringArrayWrappersParametersMaxCount: 4, 
  stringArrayWrappersType: 'function',
	unicodeEscapeSequence: false,
	splitStrings: true,
	splitStringsChunkLength: 15,
	transformObjectKeys: true,
	numbersToExpressions: true,
  debugProtectionInterval: 4000
};

//command for obfuscation
function obfuscatefile(nombre){
    fs.readFile("./source-code/"+nombre, "UTF-8", function(err, data) {
        if (err) { 
			throw err;
		}
        var obfuscationResult = JavaScriptObfuscator.obfuscate(data,config);
        fs.writeFile("./output-code/"+nombre, obfuscationResult.getObfuscatedCode(),
        function(err) {
            if(err) { return console.log(err); }
            console.log("File ready and obfuscated: ",nombre);
        });
    });
}

//executing obfuscation on all names in the array
 arraySourceCode.forEach(function(filename) {
    obfuscatefile(filename)
}); 
```

## Run the obfuscator
go to the root directory of the project and run index.js with node

```bash
node index.js
```
## The output
the output of obfuscated files will be in the output-code directory,
the message in the console will be "File ready and obfuscated"

### Details used for compilation
* Windows 10 Enterprise - 22H2 - 19045.3930
* Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz   3.30 GHz 8,00 GB Ram momory
* 64-bit operating system, x64 processor
* Node Version v21.5.0
* NPM Version 10.2.4
* [Used project directory](https://github.com/luispernalete/Ofuscador-JS)
* [JavaScript Obfuscator](https://obfuscator.io/)
* [NPM](https://www.npmjs.com/)
* [NodeJS](https://nodejs.org/en)

### content of package.json
```json
{
  "name": "ofuscador-js",
  "version": "1.0.0",
  "description": "ofuscador para archivos js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "luispernalete88@gmail.com",
  "license": "ISC",
  "dependencies": {
    "fs": "^0.0.1-security",
    "javascript-obfuscator": "^4.1.0"
  }
}

```

### content of package-lock.json
```json
{
  "name": "ofuscador-js",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "ofuscador-js",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "fs": "^0.0.1-security",
        "javascript-obfuscator": "^4.1.0"
      }
    },
    "node_modules/@javascript-obfuscator/escodegen": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@javascript-obfuscator/escodegen/-/escodegen-2.3.0.tgz",
      "integrity": "sha512-QVXwMIKqYMl3KwtTirYIA6gOCiJ0ZDtptXqAv/8KWLG9uQU2fZqTVy7a/A5RvcoZhbDoFfveTxuGxJ5ibzQtkw==",
      "dependencies": {
        "@javascript-obfuscator/estraverse": "^5.3.0",
        "esprima": "^4.0.1",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1"
      },
      "engines": {
        "node": ">=6.0"
      },
      "optionalDependencies": {
        "source-map": "~0.6.1"
      }
    },
    "node_modules/@javascript-obfuscator/estraverse": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@javascript-obfuscator/estraverse/-/estraverse-5.4.0.tgz",
      "integrity": "sha512-CZFX7UZVN9VopGbjTx4UXaXsi9ewoM1buL0kY7j1ftYdSs7p2spv9opxFjHlQ/QGTgh4UqufYqJJ0WKLml7b6w==",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/@types/minimatch": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.5.tgz",
      "integrity": "sha512-Klz949h02Gz2uZCMGwDUSDS1YBlTdDDgbWHi+81l29tQALUtvz4rAYi5uoVhE5Lagoq6DeqAUlbrHvW/mXDgdQ=="
    },
    "node_modules/@types/validator": {
      "version": "13.11.9",
      "resolved": "https://registry.npmjs.org/@types/validator/-/validator-13.11.9.tgz",
      "integrity": "sha512-FCTsikRozryfayPuiI46QzH3fnrOoctTjvOYZkho9BTFLCOZ2rgZJHMOVgCOfttjPJcgOx52EpkY0CMfy87MIw=="
    },
    "node_modules/acorn": {
      "version": "8.8.2",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.8.2.tgz",
      "integrity": "sha512-xjIYgE8HBrkpd/sJqOGNspf8uHG+NOHGOw6a/Urj8taM2EXfdNAH2oFcPeIFfsv3+kz/mJrS5VuMqbNLjCa2vw==",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/array-differ": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/array-differ/-/array-differ-3.0.0.tgz",
      "integrity": "sha512-THtfYS6KtME/yIAhKjZ2ul7XI96lQGHRputJQHO80LAWQnuGP4iCIN8vdMRboGbIEYBwU33q8Tch1os2+X0kMg==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/arrify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-2.0.1.tgz",
      "integrity": "sha512-3duEwti880xqi4eAMN8AyR4a0ByT90zoYdLlevfrvU43vb0YZwZVfxOgxWrLXXXpyugL0hNZc9G6BiB5B3nUug==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/assert": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/assert/-/assert-2.0.0.tgz",
      "integrity": "sha512-se5Cd+js9dXJnu6Ag2JFc00t+HmHOen+8Q+L7O9zI0PqQXr20uk2J0XQqMxZEeo5U50o8Nvmmx7dZrl+Ufr35A==",
      "dependencies": {
        "es6-object-assign": "^1.1.0",
        "is-nan": "^1.2.1",
        "object-is": "^1.0.1",
        "util": "^0.12.0"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.6.tgz",
      "integrity": "sha512-j1QzY8iPNPG4o4xmO3ptzpRxTciqD3MgEHtifP/YnJpIo58Xu+ne4BejlbkuaLfXn/nz6HFiw29bLpj2PNMdGg==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="
    },
    "node_modules/call-bind": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.7.tgz",
      "integrity": "sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chance": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/chance/-/chance-1.1.9.tgz",
      "integrity": "sha512-TfxnA/DcZXRTA4OekA2zL9GH8qscbbl6X0ZqU4tXhGveVY/mXWvEQLt5GwZcYXTEyEFflVtj+pG8nc8EwSm1RQ=="
    },
    "node_modules/char-regex": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz",
      "integrity": "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/charenc": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/charenc/-/charenc-0.0.2.tgz",
      "integrity": "sha512-yrLQ/yVUFXkzg7EDQsPieE/53+0RlaWTs+wBrvW36cyilJ2SaDWfl4Yj7MtLTXleV9uEKefbAGUPv2/iWSooRA==",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/class-validator": {
      "version": "0.14.0",
      "resolved": "https://registry.npmjs.org/class-validator/-/class-validator-0.14.0.tgz",
      "integrity": "sha512-ct3ltplN8I9fOwUd8GrP8UQixwff129BkEtuWDKL5W45cQuLd19xqmTLu5ge78YDm/fdje6FMt0hGOhl0lii3A==",
      "dependencies": {
        "@types/validator": "^13.7.10",
        "libphonenumber-js": "^1.10.14",
        "validator": "^13.7.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/commander": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-10.0.0.tgz",
      "integrity": "sha512-zS5PnTI22FIRM6ylNW8G4Ap0IEOyk62fhLSD0+uHRT9McRCLGpkVNvao4bjimpK/GShynyQkFFxHhwMcETmduA==",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
    },
    "node_modules/crypt": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/crypt/-/crypt-0.0.2.tgz",
      "integrity": "sha512-mCxBlsHFYh9C+HVpiEacem8FEBnMXgU9gy4zmNC+SXAZNB/1idgp/aulFJ4FgCi7GPEVbfyng092GqL2k2rmow==",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ=="
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.0.tgz",
      "integrity": "sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==",
      "dependencies": {
        "get-intrinsic": "^1.2.4"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es6-object-assign": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es6-object-assign/-/es6-object-assign-1.1.0.tgz",
      "integrity": "sha512-MEl9uirslVwqQU369iHNWZXsI8yaZYGg/D65aOgZkeyFJwHYSxilf7rQzXKI7DdDuBPrBXbfk3sl9hJhmd5AUw=="
    },
    "node_modules/eslint-scope": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.1.1.tgz",
      "integrity": "sha512-QKQM/UXpIiHcLqJ5AOyIW7XZmzjkzQXYE54n1++wb0u9V/abW3l9uQnxX8Z5Xd18xyKIMTUAyQ0k1e8pz6LUrw==",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.3.0.tgz",
      "integrity": "sha512-mQ+suqKJVyeuwGYHAdjMFqjCyfl8+Ldnxuyp3ldiMBFKkvytrXUZWaiPCEav8qDHKty44bD+qV1IP4T+w+xXRA==",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw=="
    },
    "node_modules/for-each": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
      "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
      "dependencies": {
        "is-callable": "^1.1.3"
      }
    },
    "node_modules/fs": {
      "version": "0.0.1-security",
      "resolved": "https://registry.npmjs.org/fs/-/fs-0.0.1-security.tgz",
      "integrity": "sha512-3XY9e1pP0CVEUCdj5BmfIZxRBTSDycnbqhIOGec9QYtmVH2fbLpj86CFWkrNOkt/Fvty4KZG5lTglL9j/gJ87w=="
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.4.tgz",
      "integrity": "sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "has-proto": "^1.0.1",
        "has-symbols": "^1.0.3",
        "hasown": "^2.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.0.1.tgz",
      "integrity": "sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==",
      "dependencies": {
        "get-intrinsic": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.1.tgz",
      "integrity": "sha512-7qE+iP+O+bgF9clE5+UoBFzE65mlBiVj3tKCrlNQ0Ogwm0BjpT/gK4SlLYDMybDh5I3TCTKnPPa0oMG7JDYrhg==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.1.tgz",
      "integrity": "sha512-1/th4MHjnwncwXsIW6QMzlvYL9kG5e/CpVvLRZe4XPa8TOUNbCELqmvhDmnkNsAjwaG4+I8gJJL0JBvTTLO9qA==",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "node_modules/inversify": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/inversify/-/inversify-6.0.1.tgz",
      "integrity": "sha512-B3ex30927698TJENHR++8FfEaJGqoWOgI6ZY5Ht/nLUsFCwHn6akbwtnUAPCgUepAnTpe2qHxhDNjoKLyz6rgQ=="
    },
    "node_modules/is-arguments": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.1.tgz",
      "integrity": "sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==",
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.0.10.tgz",
      "integrity": "sha512-jsEjy9l3yiXEQ+PsXdmBwEPcOxaXWLspKdplFUVI9vq1iZgIekeC0L167qeu86czQaxed3q/Uzuw0swL0irL8A==",
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-nan": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/is-nan/-/is-nan-1.3.2.tgz",
      "integrity": "sha512-E+zBKpQ2t6MEo1VsonYmluk9NxGrbzpeeLC2xIViuO2EjU2xsXsBPwTr3Ykv9l08UYEVEdWeRZNouaZqF6RN0w==",
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.13.tgz",
      "integrity": "sha512-uZ25/bUAlUY5fR4OKT4rZQEBrzQWYV9ZJYGGsUmEJ6thodVJ1HX64ePQ6Z0qPWP+m+Uq6e9UugrE38jeYsDSMw==",
      "dependencies": {
        "which-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/javascript-obfuscator": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/javascript-obfuscator/-/javascript-obfuscator-4.1.0.tgz",
      "integrity": "sha512-ckC0VFKQ0/sFtLH9apW/ZLfsP8LuZqZhVEM4VTJ5KLzyLaodW6C1lTU8808eboDmddKyvd2uyRx5bzc0Me0GYg==",
      "hasInstallScript": true,
      "dependencies": {
        "@javascript-obfuscator/escodegen": "2.3.0",
        "@javascript-obfuscator/estraverse": "5.4.0",
        "acorn": "8.8.2",
        "assert": "2.0.0",
        "chalk": "4.1.2",
        "chance": "1.1.9",
        "class-validator": "0.14.0",
        "commander": "10.0.0",
        "eslint-scope": "7.1.1",
        "eslint-visitor-keys": "3.3.0",
        "fast-deep-equal": "3.1.3",
        "inversify": "6.0.1",
        "js-string-escape": "1.0.1",
        "md5": "2.3.0",
        "mkdirp": "2.1.3",
        "multimatch": "5.0.0",
        "opencollective-postinstall": "2.0.3",
        "process": "0.11.10",
        "reflect-metadata": "0.1.13",
        "source-map-support": "0.5.21",
        "string-template": "1.0.0",
        "stringz": "2.1.0",
        "tslib": "2.5.0"
      },
      "bin": {
        "javascript-obfuscator": "bin/javascript-obfuscator"
      },
      "engines": {
        "node": "^12.22.0 || ^14.0.0 || ^16.0.0 || ^17.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/javascript-obfuscator"
      }
    },
    "node_modules/js-string-escape": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/js-string-escape/-/js-string-escape-1.0.1.tgz",
      "integrity": "sha512-Smw4xcfIQ5LVjAOuJCvN/zIodzA/BBSsluuoSykP+lUvScIi4U6RJLfwHet5cxFnCswUjISV8oAXaqaJDY3chg==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha512-0OO4y2iOHix2W6ujICbKIaEQXvFQHue65vUG3pb5EUomzPI90z9hsA1VsO/dbIIpC53J8gxM9Q4Oho0jrCM/yA==",
      "dependencies": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/libphonenumber-js": {
      "version": "1.10.56",
      "resolved": "https://registry.npmjs.org/libphonenumber-js/-/libphonenumber-js-1.10.56.tgz",
      "integrity": "sha512-d0GdKshNnyfl5gM7kZ9rXjGiAbxT/zCXp0k+EAzh8H4zrb2R7GXtMCrULrX7UQxtfx6CLy/vz/lomvW79FAFdA=="
    },
    "node_modules/md5": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/md5/-/md5-2.3.0.tgz",
      "integrity": "sha512-T1GITYmFaKuO91vxyoQMFETst+O71VUPEU3ze5GNzDm0OWdP8v1ziTaAEPUr/3kLsY3Sftgz242A1SetQiDL7g==",
      "dependencies": {
        "charenc": "0.0.2",
        "crypt": "0.0.2",
        "is-buffer": "~1.1.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/mkdirp": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-2.1.3.tgz",
      "integrity": "sha512-sjAkg21peAG9HS+Dkx7hlG9Ztx7HLeKnvB3NQRcu/mltCVmvkF0pisbiTSfDVYTT86XEfZrTUosLdZLStquZUw==",
      "bin": {
        "mkdirp": "dist/cjs/src/bin.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/multimatch": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/multimatch/-/multimatch-5.0.0.tgz",
      "integrity": "sha512-ypMKuglUrZUD99Tk2bUQ+xNQj43lPEfAeX2o9cTteAmShXy2VHDJpuwu1o0xqoKCt9jLVAvwyFKdLTPXKAfJyA==",
      "dependencies": {
        "@types/minimatch": "^3.0.3",
        "array-differ": "^3.0.0",
        "array-union": "^2.1.0",
        "arrify": "^2.0.1",
        "minimatch": "^3.0.4"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/object-is": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.5.tgz",
      "integrity": "sha512-3cyDsyHgtmi7I7DfSSI2LDp6SK2lwvtbg0p0R1e0RvTqF5ceGx+K2dfSjm1bKDMVCFEDAQvy+o8c6a7VujOddw==",
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/opencollective-postinstall": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/opencollective-postinstall/-/opencollective-postinstall-2.0.3.tgz",
      "integrity": "sha512-8AV/sCtuzUeTo8gQK5qDZzARrulB3egtLzFgteqB2tcT4Mw7B8Kt7JcDHmltjz6FOAHsvTevk70gZEbhM4ZS9Q==",
      "bin": {
        "opencollective-postinstall": "index.js"
      }
    },
    "node_modules/optionator": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
      "dependencies": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.6",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "word-wrap": "~1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha512-ESF23V4SKG6lVSGZgYNpbsiaAkdab6ZgOxe52p7+Kid3W3u3bxR4Vfd/o21dmN7jSt0IwgZ4v5MUd26FEtXE9w==",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/process": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
      "integrity": "sha512-cdGef/drWFoydD1JsMzuFf8100nZl+GT+yacc2bEced5f9Rjk4z+WtFUTBu9PhOi9j/jfmBPu0mMEY4wIdAF8A==",
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/reflect-metadata": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.1.13.tgz",
      "integrity": "sha512-Ts1Y/anZELhSsjMcU605fU9RE4Oi3p5ORujwbIKXfWa+0Zxs510Qrmrce5/Jowq3cHSZSJqBjypxmHarc+vEWg=="
    },
    "node_modules/set-function-length": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.1.tgz",
      "integrity": "sha512-j4t6ccc+VsKwYHso+kElc5neZpjtq9EnRICFZtWyBsLojhmeF/ZBd/elqm22WJh/BziDe/SBiOeAt0m2mfLD0g==",
      "dependencies": {
        "define-data-property": "^1.1.2",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.3",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/string-template": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string-template/-/string-template-1.0.0.tgz",
      "integrity": "sha512-SLqR3GBUXuoPP5MmYtD7ompvXiG87QjT6lzOszyXjTM86Uu7At7vNnt2xgyTLq5o9T4IxTYFyGxcULqpsmsfdg=="
    },
    "node_modules/stringz": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/stringz/-/stringz-2.1.0.tgz",
      "integrity": "sha512-KlywLT+MZ+v0IRepfMxRtnSvDCMc3nR1qqCs3m/qIbSOWkNZYT8XHQA31rS3TnKp0c5xjZu3M4GY/2aRKSi/6A==",
      "dependencies": {
        "char-regex": "^1.0.2"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tslib": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.5.0.tgz",
      "integrity": "sha512-336iVw3rtn2BUK7ORdIAHTyxHGRIHVReokCR3XjbckJMK7ms8FysBfhLR8IXnAgy7T0PTPNBWKiH514FOW/WSg=="
    },
    "node_modules/type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha512-ZCmOJdvOWDBYJlzAoFkC+Q0+bUyEOS1ltgp1MGU03fqHG+dbi9tBFU2Rd9QKiDZFAYrhPh2JUf7rZRIuHRKtOg==",
      "dependencies": {
        "prelude-ls": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/util": {
      "version": "0.12.5",
      "resolved": "https://registry.npmjs.org/util/-/util-0.12.5.tgz",
      "integrity": "sha512-kZf/K6hEIrWHI6XqOFUiiMa+79wE/D8Q+NCNAWclkyg3b4d2k7s0QGepNjiABc+aR3N1PAyHL7p6UcLY6LmrnA==",
      "dependencies": {
        "inherits": "^2.0.3",
        "is-arguments": "^1.0.4",
        "is-generator-function": "^1.0.7",
        "is-typed-array": "^1.1.3",
        "which-typed-array": "^1.1.2"
      }
    },
    "node_modules/validator": {
      "version": "13.11.0",
      "resolved": "https://registry.npmjs.org/validator/-/validator-13.11.0.tgz",
      "integrity": "sha512-Ii+sehpSfZy+At5nPdnyMhx78fEoPDkR2XW/zimHEL3MyGJQOCQ7WeP20jPYRz7ZCpcKLB21NxuXHF3bxjStBQ==",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.14.tgz",
      "integrity": "sha512-VnXFiIW8yNn9kIHN88xvZ4yOWchftKDsRJ8fEPacX/wl1lOvBrhsJ/OeJCXq7B0AaijRuqgzSKalJoPk+D8MPg==",
      "dependencies": {
        "available-typed-arrays": "^1.0.6",
        "call-bind": "^1.0.5",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "engines": {
        "node": ">=0.10.0"
      }
    }
  }
}

```

