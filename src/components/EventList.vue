<template>
  <v-layout row>
    <v-flex>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="event in events" :key="event.RECORD_ID">
          <div slot="header">{{event.RECORD_ID}}</div>
          <v-card>
            <v-card-text>{{event.RECORD_ID}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    events: Array
  }
};
</script>
