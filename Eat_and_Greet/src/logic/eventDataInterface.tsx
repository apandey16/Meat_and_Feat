export interface EventData {
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

  export function toDateTime(secs : number) {
    const t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}