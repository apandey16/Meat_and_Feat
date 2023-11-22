import Event from '../logic/event';

export default function createDefaultPostData(){
    return (new Event("", new Date(), "", "", "", "Loading Events Now", -1, "", 0, []));
}