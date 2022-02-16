# Dokoo Vue Plugin

## Installation

```
yarn add @dokoo/vue
```

Configure the plugin in your `main.js`:

```javascript
import Vue from 'vue'
import Dokoo from '@dokoo/vue'

Vue.use(Dokoo({
  clients: {
    default: {
      spaceId: '<your-space-id>',
      token: '<your-auth-token>'
    }
  }
}))
```

## Usage
You are ready to go! Use it in any of your component:

```javascript
export default {
  data () {
    return {
      hits: []
    }
  },
  async fetch () {
    const feed = this.$dokoo.default.feeds.getFeed('<your-feed-id>')
    const { hits } = await feed.get()
    this.hits = hits
  }    
}
```

Read more documentation on the Javascript Dokoo Client:
- https://github.com/Dokoo-io/sdk-js/wiki/API
