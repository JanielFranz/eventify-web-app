<script>
import {Eventt} from "@/public/model/event.entity.js";

export default {
  name: "event-summary-item",
  props: {
    event: {
      type: Eventt,
      required: true
    },
    attendees: {
      type: Array,
      required: true
    }
  },
  computed: {
    getRegisteredAttendees() {
      const eventId = this.event.id;
      const attendeesList = this.attendees.filter(attendee =>{
        return attendee.eventId === eventId;
      })

      console.log('attendees filtered list', attendeesList);

      return attendeesList.length;
    },
    getAttendancePercentage() {
      const allAttendeesLength = this.attendees.length;
      const registeredAttendeesLength = this.getRegisteredAttendees;

      return (registeredAttendeesLength / allAttendeesLength) * 100;
    }
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <h3>{{ event.name }}</h3>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center">
          {{ event.description }}
        </span>
      </p>
    </template>
    <template #footer>
      <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center">
          Registered Attendees: {{ getRegisteredAttendees }}
        </span>
      </p>
      <p class="flex align-content-start flex-wrap mt-4">
        Attendance %: {{ getAttendancePercentage }} %
      </p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>