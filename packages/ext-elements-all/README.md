## @sencha/ext-elements-all

last run: Thu Oct 31 2019 14:28:26 GMT-0400 (Eastern Daylight Time)

## Test with Vanilla JavaScript

- Create a folder named ext-elements-all-example

mac
```sh
mkdir js-ext-elements-all-example
cd js-ext-elements-all-example
```

windows
```sh
md js-ext-elements-all-example
cd js-ext-elements-all-example
```

- In the js-ext-elements-all-example folder, create a package.json file with the following:

```sh
{
  "name": "js-ext-elements-all-example",
  "version": "1.0.0",
  "description": "js-ext-elements-all-example",
  "scripts": {},
  "devDependencies": {
    "@sencha/ext-elements-all": "~7.1.0",
    "http-server": "^0.11.1"
  },
  "author": "",
  "license": "ISC",
  "repository": {}
}
```
- Run the following in the js-ext-elements-all-example folder

mac
```sh
npm install
cp node_modules/@sencha/ext-elements-all/index.html ./index.html
npx http-server -o

```

windows
```sh
npm install
copy node_modules/@sencha/ext-elements-all/index.html ./index.html
npx http-server -o

```

## Test with create-react-app

- Run the following:

```sh
npx create-react-app react-ext-elements-all-example
cd react-ext-elements-all-example
npm install @sencha/ext-elements-all --save
cp node_modules/@sencha/ext-elements-all/ext/css.all.js ./public/css.all.js
cp node_modules/@sencha/ext-elements-all/ext/ext.all.js ./public/ext.all.js
cp node_modules/@sencha/ext-elements-all/react/ReactCell.js ./public/ReactCell.js
```

- Add the following to ./public/index.html

```sh
    <script src="%PUBLIC_URL%/css.all.js"></script>
    <script src="%PUBLIC_URL%/ext.all.js"></script>
    <script src="%PUBLIC_URL%/ReactCell.js"></script>
```

- Replace ./src/App.js with:

```sh
import React from 'react';
import Panel from "@sencha/ext-elements-all/react/Panel";

function App() {
  return (
    <Panel title="hi"></Panel>
  );
}

export default App;
```

- Run the following:

```sh
npm start
```


## Test with an Angular CLI generated app

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@8.3.x


#### Create a new  CLI application

```sh
ng new ng-ext-elements-all --minimal=true --interactive=false -g=true --skipInstall=true
```

#### Open your editor

To open Visual Studio Code, type the following:

```sh
cd ng-ext-elements-all; code .
```

#### Add to package.json

In the dependencies section of package.json, add the following:

```sh
"@sencha/ext-elements-all": "~7.1.0",
"@webcomponents/webcomponentsjs": "^2.3.0",
```

#### Run npm install

in a terminal window at the root of your application, run the following:

```sh
npm install
```

#### Replace src/styles.css (optional)

If you want to get a look at different styling...
Open the src/styles.css file in the editor and replace the contents with the following:

```sh
:root {
    --dark-mode: false;
    --base-color: yellow !important;
    --base-highlight-color: #64b5f6;
    --base-light-color: #bbdefb;
    --base-dark-color: #1976d2;
    --base-pressed-color: #6ab8f7;
    --base-focused-color: #42a5f5;
    --base-invisible-color: rgba(33, 150, 243, 0);
    --base-foreground-color: green !important;
    --accent-color: #ff9800;
    --accent-light-color: #ffe0b2;
    --accent-dark-color: #f57c00;
    --accent-pressed-color: #ffb74d;
    --accent-invisible-color: rgba(255, 152, 0, 0);
    --accent-foreground-color: #222;
    --confirm-color: #7cb342;
    --confirm-pressed-color: #a2cc75;
    --alert-color: #c62828;
    --alert-pressed-color: #de5c5c;
    --color: blue !important;
    --reverse-color: #fff;
    --highlight-color: rgba(17, 17, 17, 0.54);
    --disabled-color: rgba(17, 17, 17, 0.38);
    --reverse-disabled-color: rgba(255, 255, 255, 0.38);
    --divider-color: #e2e2e2;
    --selected-background-color: #e0e0e0;
    --hovered-background-color: #eee;
    --header-background-color: #f5f5f5;
    --faded-color: #e1e1e1;
    --background-color: #fafafa;
    --alt-background-color: #f5f5f5;
    --reverse-background-color: #303030;
    --reverse-alt-background-color: #3a3a3a;
    --overlay-color: rgba(0, 0, 0, 0.03);
    --content-padding: 16px;
    --listitem-selected-background-color: #e0e0e0;
    --reverse-border-color: #e0e0e0;
    --reverse-alt-border-color: #e0e0e0;
}

.x-grid {
    --color: red !important;
}
```


#### Replace src/app/app.module.js

Open the src/app/app.module.js file in the editor and replace the contents with the following:

```sh
declare var Ext: any
import '@sencha/ext-elements-all/ext-elements-all.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Replace src/app/app.component.ts

Open the src/app/app.component.ts file in the editor and replace the contents with the following:

```sh

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ext-panel viewport="true" title="panel" layout="fit">
    <ext-toolbar docked="top">
        <ext-button
            text="click me please"
            (ready)="readyButton($event)"
            (tap)="tapButton($event)"
        >
        </ext-button>
    </ext-toolbar>
    <ext-grid
        [title]="title"
        (ready)="readyGrid($event)"
    >
        <ext-column text="name" dataIndex="name"></ext-column>
        <ext-column text="email" dataIndex="email" flex="1"></ext-column>
    </ext-grid>
</ext-panel>
    `,
    styles: []
})
export class AppComponent {
    title = 'the grid';
    data=[
        {name: 'Marc', email: 'marc@gmail.com'},
        {name: 'Nick', email: 'nick@gmail.com'},
        {name: 'Andy', email: 'andy@gmail.com'},
    ]
    button: any;

    readyButton = (event) => {
        this.button = event.detail.cmp;
    }
    tapButton = (event) => {
        alert('button text: ' + this.button.getText())
    }
    readyGrid(event) {
        var grid = event.detail.cmp;
        grid.setData(this.data)
    }
}

```

#### Run the application

Type the following in a command/terminal window:

```sh
ng serve --open --port 4200
```

a page at http://localhost:4200 opens in a browser window and the EWC application will load

#### imports in the npm package module:
##### @sencha/ext-elements-all/ext-elements-all.module

