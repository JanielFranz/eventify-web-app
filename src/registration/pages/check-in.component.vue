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
      console.log('the attendee inside the validation process', attendee)
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
        if(response.data.length > 0) {
          this.attendee = new Attendee(response.data[0])
          console.log('at in event handler',this.attendee)
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
  <form-check-in @ticket-validated="onValidateTicket($event)"/>
</template>

<style scoped>

</style>