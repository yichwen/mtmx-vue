import Vue from 'vue'
import Router from 'vue-router'
import Translator from '@/components/Translator'
import BatchTranslator from '@/components/BatchTranslator'
import MT103 from '@/components/MT103'
import PACS00800108 from '@/components/PACS00800108'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/single-translator'
    },
    {
      path: '/single-translator',
      name: 'SingleTranslator',
      component: Translator
    },
    {
      path: '/batch-translator',
      name: 'BatchTranslator',
      component: BatchTranslator
    },
    {
      path: '/mt/mt103',
      name: 'MT103',
      component: MT103
    },
    {
      path: '/iso/pacs-008-001-08',
      name: 'PACS00800108',
      component: PACS00800108
    }
  ]
})
