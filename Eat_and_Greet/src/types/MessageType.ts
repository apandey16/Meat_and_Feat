import { Timestamp, DocumentReference } from "firebase/firestore";

interface MessageType {
  Text: string;
  Time: Timestamp;
  User: DocumentReference;
}

export default MessageType;
