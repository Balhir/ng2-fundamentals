import { Component } from  '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcomming Angual 2 Events</h1>
        <hr/>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '11/11/2017',
        time: '12:00',
        price: 399.99,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            adress: 'Nowa 2',
            city: 'Warszawa',
            country: 'Polska',
        }
    }
}