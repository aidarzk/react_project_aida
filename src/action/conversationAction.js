import ConversationList from "../component/Conversation/ConversationList"

export const getUserName = (userName) => ({
  type: 'SAVE_SELECTED_USERNAME',
  payload: userName
})
export const addNewMessage = (newMessage) => ({
  type: 'ADD_NEW_MESSAGE',
  payload: newMessage
})
export const addConversation = (name) => ({
  type: 'ADD_NEW_CONVERSATION',
  payload: name
})
export const getPicture = (picture) => ({
  type: 'SAVE_SELECTED_PICTURE',
  payload: picture
})
export const getEmail = (email) => ({
  type: 'SAVE_SELECTED_EMAIL',
  payload: email
})
export const getConversationList = (ConversationList) => ({
  type: 'GET_CONVERSATION_LIST',
  payload: ConversationList
})
export const getConversationId = (conversationId) => ({
  type: 'SAVE_CONVERSATION_ID',
  payload: conversationId
})
