<script>
import {Attendee} from "@/registration/model/attendee.entity.js";
import {AttendeesService} from "@/shared/services/attendees.service.js";
import FormCheckIn from "@/registration/components/form-check-in.component.vue";

export default {
name: "check-in",
  components: {FormCheckIn},
  data() {
    return{
      attendee: new Attendee({}),
      attendeeService: new AttendeesService()
    }
  },
  methods: {
  //#region Utility Methods
    validationProcess(attendee) {
      if(attendee.checkedInAt === null) {
        this.attendeeService.updateCheckedInStatus(attendee.id, new Date().toISOString())
      } else {
        console.log('attendee already checked in')
      }
    },
    //#endregion
  //#region Event Handler
    onValidateTicket(ticketIdentifier) {
      this.attendeeService.getAttendeeByTicketIdentifier(ticketIdentifier).then((response) => {
        if(response.status === 200) {
          this.attendee = new Attendee(response.data)
          this.validationProcess(this.attendee)
        }
        else {
          console.log('ticket doesnt exist')
        }
      })
    }
    //#endregion
  }
}
</script>

<template>
  <form-check-in @ticket-validated="onValidateTicket"/>
</template>

<style scoped>

</style>