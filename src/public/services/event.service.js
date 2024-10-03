import http from "../../shared/services/http-common.js";

export class EventService {
    resourceEndPoint = '/events';
    getAllEvents() {
        return http.get(this.resourceEndPoint);
    }
}