export default class Event {
    Category: string;
    Date: Date;
    EndTime: string;
    Host: string;
    StartTime: string;
    Title: string;
    id: number;
    description: string;
    spots: number;
    participants: string[];

    constructor(category : string, date : Date, endTime : string, host : string, startTime : string, title : string, id : number, description : string, spots : number, participants : string[]){
        this.Category = category;
        this.Date = date;
        this.EndTime = endTime;
        this.Host = host;
        this.StartTime = startTime;
        this.Title = title;
        this.id = id;
        this.description = description;
        this.spots = spots;
        this.participants = participants;
    }
    
  }
