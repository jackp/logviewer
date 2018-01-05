<template>
  <v-app>
    <app-header />
    <v-content>
      <v-container fluid>
        <date-range-picker/>
        <event-list/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import DateRangePicker from "./components/DateRangePicker";
import EventList from "./components/EventList.vue";

export default {
  components: {
    AppHeader,
    DateRangePicker,
    EventList
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{ icon: "bubble_chart", title: "Inspire" }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
