import Vue from 'vue'
import en from 'vuetify/es5/locale/en'
import hu from 'vuetify/es5/locale/hu'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export const userPreset = {
  lang: {
    locales: { en, hu },
    current: 'hu'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#09305d',
        success: '#3AAA81',
        error: '#F4541D',
        warning: '#F8AF24',
        info: '#3394F3'
      }
    }
  }
}

export default new Vuetify(userPreset)
