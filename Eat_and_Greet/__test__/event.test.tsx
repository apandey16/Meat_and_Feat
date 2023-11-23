import EventManager from "../src/logic/EventManager";

describe("Event Controller Tests", () => {

    test("Get Event By Id", async () => {
        const eventController = new EventManager("Testing", "eatngreetrome@gmail.com");
        const testEvent = await eventController.getEventDataById("-1");
        expect(testEvent.Category).toBe("Testing");
        expect(testEvent.Title).toBe("Unit Testing");
    })

    test("Get User's Past Events Hosted", async () => {
        const eventController = new EventManager("Testing", "eatngreetrome@gmail.com");
        const testEvent = await eventController.getUserPastEventsData(true);
        const event = testEvent[0]!;
        expect(event.Category).toBe("Testing");
        expect(event.Title).toBe("Unit Testing");
        expect(event.Host).toBe("test account");
        expect(event.id).toBe("-1");
    });

    test("Get User's Past Attended Events", async() => {
        const eventController = new EventManager("Testing", "eatngreetrome@gmail.com");
        const testEvent = await eventController.getUserPastEventsData(false);
        const event = testEvent[0]!;
        expect(event.Category).toBe("Testing");
        expect(event.Title).toBe("Not Host Testing");
        expect(event.Host).toBe("test account 2");
        expect(event.id).toBe("-2");
    });

});