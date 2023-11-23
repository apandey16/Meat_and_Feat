import EventManager from '../src/logic/EventManager';

describe('Test toDateTime conversion', () => {
  test('has 1 child', () => {
    const EventController = new EventManager("All", "eatngreetrome@gmail.com");

    const input = 1000
    const output = "Thu Jan 01 1970";
    expect(EventController.toDateTime(input).toDateString()).toBe(output);
  });
});