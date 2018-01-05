<template>
  <v-layout row>
    <v-flex>
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
    </v-flex>
    <v-spacer/>
    <v-flex>
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    startDate: null,
    endDate: null
  })
};
</script>

