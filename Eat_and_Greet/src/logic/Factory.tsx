import Event from '../logic/event';

export default function createDefaultPostData(){
    return (new Event({Category : "", Date : new Date(), StartTime :"", EndTime :"", Host: "", Title : "Loading Events Now", id :-1, description : "", spots : 0, participants : []}));
}