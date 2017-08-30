import Vue from 'vue'
let bus = new Vue();
class EventBus {
    static getBus(){
        return bus;
    }
}
export default EventBus