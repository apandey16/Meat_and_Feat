import Event from '../logic/event';

export default function createDefaultPostData(){
    return (new Event({Category : "test", Date : new Date(), EndTime: "", Host : "", StartTime : "", Title : "Loading Events Now", id : -1, description : "", spots : 0, participants : []}));
}