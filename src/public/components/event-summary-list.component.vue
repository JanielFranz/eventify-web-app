<script>
import EventSummaryItem from "@/public/components/event-summary-item.component.vue";

export default {
  name: "event-summary-list",
  components: {EventSummaryItem},
  props: {
    events: {
      type: Array,
      required: true
    },
    attendees: {
      type: Array,
      required:true
    }
  }
}
</script>

<template>
  <div v-for="event in events">
    <event-summary-item :attendees="attendees" :event="event"/>
  </div>
</template>

<style scoped>

</style>