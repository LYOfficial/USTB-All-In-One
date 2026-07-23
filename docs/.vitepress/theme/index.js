import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import SiteCard from './components/SiteCard.vue'
import SiteGrid from './components/SiteGrid.vue'
import SiteSection from './components/SiteSection.vue'
import QqGroupCard from './components/QqGroupCard.vue'
import ClubCard from './components/ClubCard.vue'
import WeeklyActivities from './components/WeeklyActivities.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('SiteCard', SiteCard)
    app.component('SiteGrid', SiteGrid)
    app.component('SiteSection', SiteSection)
    app.component('QqGroupCard', QqGroupCard)
    app.component('ClubCard', ClubCard)
    app.component('WeeklyActivities', WeeklyActivities)
  }
}
