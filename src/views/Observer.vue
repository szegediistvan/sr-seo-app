<template>
  <div class="observer-page">
    <h2 class="page-title">Analízis</h2>
    <v-row>
      <v-col>
        <v-card color="primary" dark>
          <v-card-text class="pa-3">
            <div class="analyze-wrapper">
              <v-text-field
                outlined
                hide-details
                v-model="url"
              />
              <v-btn color="black" @click="getData" class="analyze-btn">
                Elemzés
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" cols="12">
        <google-preview :url="sefUrl"
                        :title="getTitle"
                        :description="getDescription"
                        :base-url="config_url"/>
        <v-card class="mt-10">
          <v-card-title>
            <h3>Meta beállítások</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <form-group>
                <form-row label="Kulcsszó">
                  <v-text-field
                    outlined
                    dense
                    v-model="keyword"
                  />
                </form-row>
              </form-group>
              <form-group>
                <form-row label="Keresőbarát URL">
                  <v-text-field
                    outlined
                    dense
                    v-model="sefUrl"
                  />
                </form-row>
              </form-group>
              <form-group>
                <form-row label="Meta title">
                  <v-text-field
                    outlined
                    dense
                    v-model="metaTitle"
                  />
                </form-row>
              </form-group>
              <form-group>
                <form-row label="Meta leírás">
                  <v-textarea
                    outlined
                    dense
                    v-model="metaDescription"
                  />
                </form-row>
              </form-group>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card>
          <v-card-title>
            <h3>Kulcsszó alapú ellenőrzés</h3>
          </v-card-title>
          <v-card-text>
            <keyword-checker
              :valid="checkKeywordInText('sefUrl')"
              :success-message="`A megadott <strong>'${keyword}'</strong> kulcsszó szerepel a <strong>keresőbarát URL</strong>-ben`"
              :error-message="`A megadott <strong>'${keyword}'</strong> kulcsszó nem szerepel a <strong>keresőbarát URL</strong>-ben`"
            />
            <keyword-checker
              :valid="checkKeywordInText('metaTitle')"
              :success-message="`A megadott <strong>'${keyword}'</strong> kulcsszó szerepel a <strong>meta title</strong>-ben`"
              :error-message="`A megadott <strong>'${keyword}'</strong> kulcsszó nem szerepel a <strong>meta title</strong>-ben`"
            />
            <keyword-checker
              :valid="checkKeywordInText('metaDescription')"
              :success-message="`A megadott <strong>'${keyword}'</strong> kulcsszó szerepel a <strong>meta leírás</strong>ban`"
              :error-message="`A megadott <strong>'${keyword}'</strong> kulcsszó nem szerepel a <strong>meta leírás</strong>ban`"
            />
            <transition name="fade">
              <div v-if="loading">
                <keyword-checker
                  :valid="false"
                  :success-message="`A megadott <strong>'${keyword}'</strong> kulcsszó szerepel a <strong>bevezető szöveg</strong>ben`"
                  :error-message="`A megadott <strong>'${keyword}'</strong> kulcsszó nem szerepel a <strong>bevezető szöveg</strong>ben`"
                />
                <keyword-checker
                  :valid="false"
                  :success-message="`Az oldalon található <strong>h2</strong> elemben szerepel a <strong>'${keyword}'</strong> kulcsszó`"
                  :error-message="`Az oldalon található <strong>h2</strong> elemben nem szerepel a <strong>'${keyword}'</strong> kulcsszó`"
                />
                <keyword-checker
                  :valid="false"
                  :success-message="`Az oldalon található <strong>h3</strong> elemben szerepel a <strong>'${keyword}'</strong> kulcsszó`"
                  :error-message="`Az oldalon található <strong>h3</strong> elemben nem szerepel a <strong>'${keyword}'</strong> kulcsszó`"
                />
                <keyword-checker
                  :valid="false"
                  :success-message="`Az oldalon <strong>7</strong> darab kép van, aminél hiányzik az <strong>alt</strong> attributum értéke`"
                  :error-message="`Az oldalon <strong>7</strong> darab kép van, aminél hiányzik az <strong>alt</strong> attributum értéke`"
                />
                <keyword-checker
                  :valid="false"
                  :success-message="`A blog cikk több mint <strong>2000</strong> karaktert tartalmaz`"
                  :error-message="`A blog cikk kevesebb mint <strong>2000</strong> karaktert tartalmaz`"
                />
                <v-alert
                  class="text-center mt-6"
                  text
                  color="info"
                >
                  <div>Az oldalon még további <strong>10</strong> potenciálisan javítandó SEO probléma van. Válts <strong>PRÉMIUM</strong> csomagra és tudd meg mivel tehetnél többet!</div>
                  <onboarding/>
                </v-alert>
              </div>
            </transition>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <template v-if="loading">
          <form-group>
            <form-row label="Blog cikk szövege">
              <v-card>
                 <v-card-text>
                   <div class="original-content" v-html="blogContent"></div>
                 </v-card-text>
              </v-card>
            </form-row>
          </form-group>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GooglePreview from '@/components/GooglePreview'
import KeywordChecker from '@/components/KeywordChecker'
import Onboarding from '@/components/Onboarding'
import axios from 'axios'

export default {
  name: 'Observer',
  components: {
    KeywordChecker,
    GooglePreview,
    Onboarding
  },
  data () {
    return {
      loading: false,
      blogContent: '',
      url: 'https://www.shoprenter.hu/blog/seo-trendek-2021-igy-optimalizalj-jovore',
      keyword: 'seo',
      sefUrl: 'seo-trendek-2021-igy-optimalizalj-jovore',
      config_url: '',
      product_id: '510',
      metaDescription: 'Kíváncsi vagy a 2021-es SEO trendekre? Ebben a cikkünkben összeszedtünk 7 fontos változást a jövőre nézve, amelyek segíthetik a SEO-dat!',
      metaTitle: 'SEO trendek 2021 - Így optimalizáld webáruházad - Shoprenter Blog',
      activeLanguage: 1,
      replace: {}
    }
  },
  computed: {
    getTitle () {
      return this.replaceTags(this.metaTitle)
    },
    getDescription () {
      return this.replaceTags(this.metaDescription)
    }
  },
  methods: {
    getData () {
      const self = this
      axios
        .get('example.html')
        .then(function (response) {
          self.loading = true
          self.blogContent = response.data
        })
    },
    checkKeywordInText (text) {
      const textValue = this[text]
      const keywords = this.keyword.split(' ')
      if (keywords.every(keyword => textValue.toLowerCase().includes(keyword.toLowerCase()))) {
        return true
      }
      return false
    },
    replaceTags (string) {
      if (!string) {
        string = ''
      }
      if (this.product_id && this.replace[this.activeLanguage]) {
        Object.keys(this.replace[this.activeLanguage]).forEach((key) => {
          string = string.replace(
            new RegExp(`\\[${key}\\]`, 'gi'),
            this.replace[this.activeLanguage][key] || ''
          )
        })
      }
      return string
    }
  }
}
</script>
