import { Client } from '@dokoo/content-api'
import Vue, {PluginObject} from 'vue'

export interface DokooClientOptions {
  spaceId: string
  token: string
}

export interface DokooPluginOptions {
  clients: {[key: string]: DokooClientOptions}
}

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $dokoo: {[key: string]: Client}
  }

  interface VueConstructor {
    $dokoo: {[key: string]: Client}
  }
}

export default (options: DokooPluginOptions) => {
  return {
    install (V: typeof Vue) {
      const dokoo = Object.assign({}, ...Object.keys(options.clients).map(key => {
        return {
          [key]: new Client(options.clients[key])
        }
      }))
      V.$dokoo = dokoo
      V.prototype.$dokoo = dokoo
    }
  }
}
