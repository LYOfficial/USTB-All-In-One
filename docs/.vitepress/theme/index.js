import DefaultTheme from 'vitepress/theme'
import './style.css'
import AppCard from './components/AppCard.vue'
import AppGrid from './components/AppGrid.vue'
import USTBSection from './components/USTBSection.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AppCard', AppCard)
    app.component('AppGrid', AppGrid)
    app.component('USTBSection', USTBSection)
  }
}