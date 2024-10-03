export class Attendee {
    constructor ({ id, firstName, lastName,
                     eventId, ticketIdentifier, checkedInAt = null}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eventId = eventId;
        this.ticketIdentifier = ticketIdentifier;
        this.checkedInAt = new Date(checkedInAt);
    }
}