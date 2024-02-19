# <Ofuscador-Js>


## Installation - Necessary packages

Create node project with the command

```bash
npm init
```

install the following packages (fs version 0.0.1-security,javascript-obfuscator version 4.1.0)

```bash
npm i fs@0.0.1-security
npm i javascript-obfuscator@4.1.0
```

## Creation of folders in the project

In the root folder of the project create the folder
**source-code** will contain the original source code files without obfuscation

In the root folder of the project create the folder
**output-code** will contain the files after obfuscation

![imagen de ejemplo directorio](img/directorio.png)

## Creation of Index.js
Create a file in the root folder of the Index.js project and copy the following content
```jsx
import { createRoot } from 'react-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```


