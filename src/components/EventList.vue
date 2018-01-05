<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-list>
          <v-list-tile v-for="event in events" v-bind:key="event.id">
            <v-list-tile-content>
              <v-list-tile-title>{{event.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    events: [{ id: 1, name: "test1" }, { id: 2, name: "test2" }]
  })
};
</script>
