<template>
  <div class="seo-preview">
    <v-card>
      <v-card-title>
          <h3>Google előnézet</h3>
      </v-card-title>
      <v-card-text>
        <template v-if="showPreview">
          <div class="title text-truncate">
            {{ title.substring(0, titleMax) }}
            {{ title.length > titleMax ? '...' : '' }}
          </div>
          <div class="url">{{ getUrl }}</div>
          <div class="description">
            {{ description.substring(0, descriptionMax) }}
            {{ description.length > descriptionMax ? '...' : '' }}
          </div>
        </template>
        <div v-else>Add a Meta Tag Name, or Meta Description to see, how it will look like, in the web search result</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SeoPreview',
  props: {
    baseUrl: {
      required: false,
      default: false
    },
    title: {
      required: true
    },
    url: {
      required: true
    },
    description: {
      required: true
    }
  },
  data () {
    return {
      descriptionMax: 160,
      titleMax: 70
    }
  },
  computed: {
    showPreview () {
      return this.title || this.description
    },
    getUrl () {
      return this.baseUrl
        ? `${this.baseUrl.replace(/\/$/, '')} › ${this.url.replace(/\//g, ' › ')}`
        : this.url
    }
  }

}
</script>

<style lang="scss">
.seo-preview {
  max-width: 600px;
  .title {
    font-size: 20px;
    min-height: 26px;
    line-height: 1.3;
    color: #1a0dab;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .url {
    font-size: 16px;
    padding-top: 1px;
    line-height: 1.5;
    color: #006621;
  }
  .description {
    line-height: 1.57;
    word-wrap: break-word;
    color: #545454;
  }
}
</style>
