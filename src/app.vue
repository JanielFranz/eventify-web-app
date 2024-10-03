<script>
import {LogoApiService} from "@/public/services/logo-api.service.js";
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";

const eventifyUrl = 'https://eventify.io';
export default {
  name: 'app',
  components: {LanguageSwitcher},
  data() {
    return {
      items: [
        { label: 'Home', to: '/home'},
        { label: 'Check In', to: '/check-in'}
      ],
      logoService: new LogoApiService()
    }
  },
  methods: {
    getLogoFromUrl() {
      return this.logoService.getLogo(eventifyUrl);
    }
  }
}
</script>

<template>
  <div class="flex flex-column">
    <header>
      <pv-toolbar class="bg-primary">
        <template #start>
          <pv-avatar aria-label="Company logo" :image="getLogoFromUrl()" shape="circle" class="mr-4"/>
          <h2>ISO 27001:2022 certified</h2>
        </template>
        <template #center>
          <div class="flex-column">
            <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
              <pv-button :href="href" class="p-button-text" @click="navigate">{{ item.label }}</pv-button>
            </router-link>
          </div>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-toolbar>
    </header>
    <main>
      <router-view/>
    </main>
  </div>

</template>

<style scoped>

</style>
