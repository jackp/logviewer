<template>
  <v-layout row>
    <v-flex>
      <v-data-iterator
        content-tag="v-expansion-panel"
        :items="events"
        expand
        loading="primary"
      >
        <v-expansion-panel-content slot="item" slot-scope="props" :key="props.item.RECORD_ID">
          <div slot="header">{{props.item.RECORD_ID}}</div>
          <v-card>
            <v-card-text>{{props.item.RECORD_ID}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-data-iterator>
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
