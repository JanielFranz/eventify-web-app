import http from "@/shared/services/http-common.js";

export class AttendeesService {
    resourceEndPoint = '/attendees'

    getAllAttendees() {
        return http.get(this.resourceEndPoint);
    }

    getAttendeeByTicketIdentifier(ticketIdentifier) {
        return http.get(`${this.resourceEndPoint}?ticketIdentifier=${ticketIdentifier}`);
    }
    updateCheckedInStatus(id, newCheckedIn) {
        const data = {
            checkedInAt: newCheckedIn
        }

        return http.patch(`${this.resourceEndPoint}/${id}`, data);
    }
}