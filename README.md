# auto-bind-react

Automatically bind methods to their class instance for React

## Install

```
npm install auto-bind-react
```

## Usage

```js
import React, {Component} from 'react';
import AutoBind from 'auto-bind-react';

export default class Hello extends Component {
    constructor() {
        super();
        AutoBind(this);
        this.state = {
            slogan: 'I am so cool!'
        };
    }
    say() {
        alert(this.state.slogan);
    }
    render() {
        return (
            <div onClick={this.say}>
                Click me to say hello!
            </div>
        );
    }
}
```

## License

MIT © [Wang Sijie](http://sijie.wang)