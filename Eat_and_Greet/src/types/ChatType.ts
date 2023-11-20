import { DocumentReference } from "firebase/firestore";
import MessageType from "./MessageType";

interface ChatType {
    Id: string;
    Members: DocumentReference[];
    Messages: MessageType[];
    Title: string;
}

export default ChatType;