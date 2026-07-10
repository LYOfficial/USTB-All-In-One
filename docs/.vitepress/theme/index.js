import DefaultTheme from 'vitepress/theme'
import './style.css'
import SiteCard from './components/SiteCard.vue'
import SiteGrid from './components/SiteGrid.vue'
import SiteSection from './components/SiteSection.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SiteCard', SiteCard)
    app.component('SiteGrid', SiteGrid)
    app.component('SiteSection', SiteSection)
  }
}