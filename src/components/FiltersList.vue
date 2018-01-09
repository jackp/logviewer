<template>
  <v-navigation-drawer fixed permanent clipped stateless app width="200">
    <v-list dense expand>
      <v-subheader>Cities</v-subheader>
      <v-list-group v-for="(devices, city) in filters" :key="city" no-action>
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{city}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="device in devices" :key="device">
          <v-list-tile-content>
            <v-list-tile-title>{{device}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    events: Array
  },
  computed: {
    filters() {
      return this.events.reduce((prev, curr) => {
        if (prev.hasOwnProperty(curr.city)){
          prev[curr.city] = [...new Set([...prev[curr.city], curr.device])];
        } else {
          prev[curr.city] = [curr.device];
        }
        return prev;
      }, {});
    }
  }
}
</script>

<style>

</style>
