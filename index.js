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
    debugProtectionInterval: true
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
