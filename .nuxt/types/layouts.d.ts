import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Acer/Desktop/AwecodeWebsite/Awecode-Nuxt3-CV2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}