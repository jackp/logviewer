<template>
  <v-app>
    <!-- App Header -->
    <v-toolbar app fixed clipped-left dark color="primary">
      <v-toolbar-title>CIVIQ</v-toolbar-title>
        <v-menu
          lazy
          :close-on-content-click="false"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            label="Start Date"
            v-model="startDate"
            prepend-icon="event"
            solo
            readonly
          ></v-text-field>
          <v-date-picker v-model="startDate" no-title scrollable actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>
        <v-menu
          lazy
          :close-on-content-click="false"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            label="End Date"
            v-model="endDate"
            prepend-icon="event"
            solo
            readonly
          ></v-text-field>
          <v-date-picker v-model="endDate" no-title scrollable actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>
    </v-toolbar>
    <filters-list :events="events"/>
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs8><event-list :events="events"/></v-flex>
          <v-flex xs2><statistics-list :events="events"/></v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import moment from 'moment';
import config from './config';
import EventList from "./components/EventList";
import FiltersList from './components/FiltersList';
import StatisticsList from './components/StatisticsList';

export default {
  components: {
    EventList,
    FiltersList,
    StatisticsList
  },
  created: async function () {
    this.events = await this.getEventData();
  },
  data: () => ({
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    events: []
  }),
  methods: {
    getEventData() {
      const query = `?format=json&startDate=12/05/2017&endDate=01/05/2018`;

      return fetch(`${config.apiUrl}${query}`, {
        headers: config.apiDefaultHeaders
      }).then(response => response.json())
      .catch(err => console.error(err));
    },
  }
};
</script>
