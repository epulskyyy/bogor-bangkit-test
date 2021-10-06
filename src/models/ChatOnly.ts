export interface ChatMessage {
  id: number;
  content: string;
  status: string;
  sender: string;
  receiver: string;
  createdDate: string;
}
export interface UserInfo {
  id: number;
  email: string;
}
