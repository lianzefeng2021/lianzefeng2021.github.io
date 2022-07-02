/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\Users\\admin\\Desktop\\app-manage\\vuepress2+uiplus\\lianzefeng2021.github.io\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-994eef30",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-994eef30").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-3bb1a233",
    path: "/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3bb1a233").then(next)
    },
  },
  {
    name: "v-7107e1ea",
    path: "/accumulate/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7107e1ea").then(next)
    },
  },
  {
    path: "/accumulate/index.html",
    redirect: "/accumulate/"
  },
  {
    name: "v-12b1b555",
    path: "/algorithm/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-12b1b555").then(next)
    },
  },
  {
    path: "/algorithm/index.html",
    redirect: "/algorithm/"
  },
  {
    name: "v-3e9d102a",
    path: "/others/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3e9d102a").then(next)
    },
  },
  {
    path: "/others/index.html",
    redirect: "/others/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]