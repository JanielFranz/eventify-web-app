<script>
export default {
  name: "form-check-in",
  data(){
    return {
      ticketIdentifier: ''
    }
  },
  methods: {
    //#region Event Handler
    onSubmit() {
      this.$emit('ticket-validated', this.ticketIdentifier);
    }
  }
}
</script>

<template>
  <div>
    <h2>Check In</h2>
    <div>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="ticket-identifier">Ticket Identifier</label>
          <input type="text" id="ticket-identifier" v-model="ticketIdentifier" required/>
        </div>
        <div>
          <button type="submit">Check-In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>