export default class Event {
    parameter : {
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
}

    constructor(parameter : any){
        this.parameter.Category = parameter.category;
        this.parameter.Date = parameter.date;
        this.parameter.EndTime = parameter.endTime;
        this.parameter.Host = parameter.host;
        this.parameter.StartTime = parameter.startTime;
        this.parameter.Title = parameter.title;
        this.parameter.id = parameter.id;
        this.parameter.description = parameter.description;
        this.parameter.spots = parameter.spots;
        this.parameter.participants = parameter.participants;
    }

  }
