<script>
import {EventService} from "@/public/services/event.service.js";
import {AttendeesService} from "@/shared/services/attendees.service.js";
import {Eventt} from "@/public/model/event.entity.js";
import {Attendee} from "@/shared/model/attendee.entity.js";
import EventSummaryList from "@/public/components/event-summary-list.component.vue";

export default {
  name: "home",
  components: {EventSummaryList},
  data() {
    return {
      events: [],
      attendees: [],
      eventService: new EventService(),
      attendeesService: new AttendeesService(),
    }
  },
  methods: {
    getAllEvents() {
      this.eventService.getAllEvents().then((response) => {
        console.log('response data', response.data)
        this.events = response.data.map(event => new Eventt(event))
        console.log('events', this.events)
      }).catch(e => console.error(e))
    },
    getAllAttendees() {
      this.attendeesService.getAllAttendees().then((response) => {
        this.attendees = response.data.map(attendee => new Attendee(attendee));
        console.log('attendees', this.attendees)
      }).catch(e => console.error(e))
    }
  },
  created() {
    console.log('In Home')
    this.getAllEvents()
    this.getAllAttendees()
  }

}
</script>

<template>
  <h1>Home</h1>
  <h2>Welcome to Eventify</h2>
  <event-summary-list :attendees="attendees" :events="events"/>
</template>

<style scoped>

</style>