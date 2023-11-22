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

    constructor(parameter : any){
        this.Category = parameter.Category;
        this.Date = parameter.Date;
        this.EndTime = parameter.EndTime;
        this.Host = parameter.Host;
        this.StartTime = parameter.StartTime;
        this.Title = parameter.Title;
        this.id = parameter.id;
        this.description = parameter.description;
        this.spots = parameter.spots;
        this.participants = parameter.participants;
    }

  }
