
const initial = {
  userName: '',
  email: '',
  picture: '',
  messageList: [],
  conversationList: []
}
const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'SAVE_SELECTED_USERNAME':
      return {
        ...state,
        userName: action.payload
      }
    case 'ADD_NEW_MESSAGE':
      return {
        ...state,
        messageList: [
          ...state.messageList, {
            text: action.payload,
            date: new Date().getHours(),
            sender: 1,
            receiver: 3
          }
        ]
      }
    case 'GET_CONVERSATION_LIST':
      return {
        ...state,
        conversationList: action.payload
      }

    case 'SAVE_SELECTED_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    // case 'SAVE_SELECTED_PICTURE':
    //   return {
    //     ...state,
    //     picture: action.payload
    //   }
    default:
      return state
    // case 'ADD_NEW_CONVERSATION':
    //   return {
    //     ...state,
    //     conversation: [
    //       ...state.conversation,
    //       {
    //         firstName: action.payload
    //       }
    //     ]
    //   }
  }
}
export default conversation
