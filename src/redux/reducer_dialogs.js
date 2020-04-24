import { dialogsAPI } from '../api/api';

const ADD_MESSAGE = 'reducer_dialogs/ADD_MESSAGE';
const GET_NEW_MESSAGES = 'reducer_dialogs/GET_NEW_MESSAGES';
const PUT_UP_DIALOG = 'reducer_dialogs/PUT_UP_DIALOG';
const SET_HAS_NEW_MESSAGES = 'reducer_dialogs/SET_HAS_NEW_MESSAGES';
const SET_CURRENT_DIALOG = 'reducer_dialogs/SET_CURRENT_DIALOG';
const SET_NEED_REFRESH = 'reducer_dialogs/SET_NEED_REFRESH';
const GET_DIALOGS = 'reducer_dialogs/GET_DIALOGS';
const GET_MESSAGES = 'reducer_dialogs/GET_MESSAGES';

let initialState = {
    messages: [],
    dialogs: [],
    selectedDialogId: null,
    newMessagesCount: 3,
    needRefresh: false,
    currentDialogMessagesCount: 0
}
window.initialState = initialState

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS:
        case SET_CURRENT_DIALOG:
        case SET_NEED_REFRESH:
        case GET_MESSAGES:
            return {
                ...state, ...action.payload
            }
        case PUT_UP_DIALOG:
            return {
                ...state,
                dialogs: [
                    state.dialogs.find(d => d.id == action.userId),
                    ...state.dialogs.filter(d => d.id != action.userId)]
            }
        case GET_NEW_MESSAGES:
            return {
                ...state,
                newMessagesCount: action.newMessagesCount
            }
        case SET_HAS_NEW_MESSAGES:
            return {
                ...state,
                dialogs: [...state.dialogs.map(d => {
                    if (d.id == action.userId) return { ...d, hasNewMessages: action.status }
                    else return d;
                })]
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.newMessage]
            };

        default: return state;
    }
}

export const getDialogsTC = () => async (dispatch) => {
    let dialogs = await dialogsAPI.getDialogs()
    dispatch(getDialogsAC(dialogs))
}
export const getMessagesTC = (userId) => async (dispatch) => {
    let result = await dialogsAPI.getMessages(userId)
    if (result.messages.some(m => !m.viewed)) {
        dispatch(setNeedRefresh(true))
    }
    dispatch(getMessagesAC(result.messages, result.totalCount))
    dispatch(setHasNewMessagesAC(userId, false))
}
export const startDialogTC = (userId) => async (dispatch, getState) => {
    let ers = await dialogsAPI.putDialogUp(userId)
    let dialog = getState().dialogsPage.dialogs.find(d => d.id == userId)
    if (dialog) {
        dispatch(putUpDialogAC(userId))
    } else {
        dispatch(getDialogsTC())
    }
}
export const sendMessageTC = (userId, newMessage) => async (dispatch) => {
    let res = await dialogsAPI.sendMessage(userId, newMessage);
    if (res.resultCode === 0) {
        dispatch(addMessageAC(res.data.message));
        dispatch(putUpDialogAC(userId))
    }
}
export const initTC = (userId) => async (dispatch) => {
    if (!!userId) {
        dispatch(startDialogTC(userId))
        await dispatch(getMessagesTC(userId))
        await dispatch(setCurrentDialogAC(userId))
        dispatch(getDialogsTC())
    } else {
        dispatch(getDialogsTC())
    }
}
export const updateDialogTC = (userId) => (dispatch) => {
    if (!!userId) {
        dispatch(getMessagesTC(userId))
        dispatch(setCurrentDialogAC(userId))
    }
    dispatch(getDialogsTC())
}
export const getNewMessagesTC = () => async (dispatch, getState) => {
    let state = getState();
    let count = await dialogsAPI.getNewMessagesCount();
    if (state.dialogsPage.newMessagesCount !== count || state.dialogsPage.needRefresh) {
        dispatch(setNeedRefresh(false))
        dispatch(getNewMessagesAC(count));
        dispatch(getDialogsTC());
        if (state.dialogsPage.selectedDialogId != null) {
            dispatch(getMessagesTC(state.dialogsPage.selectedDialogId))
        }
    }

}

const getDialogsAC = (dialogs) => ({ type: GET_DIALOGS, payload: { dialogs } })
const putUpDialogAC = (userId) => ({ type: PUT_UP_DIALOG, userId })
const setHasNewMessagesAC = (userId, status) => ({ type: SET_HAS_NEW_MESSAGES, userId, status })
export const setCurrentDialogAC = (selectedDialogId) => ({
    type: SET_CURRENT_DIALOG, payload: { selectedDialogId }
})
const getMessagesAC = (messages, currentDialogMessagesCount) => ({
    type: GET_MESSAGES, payload:
        { messages, currentDialogMessagesCount }
})
const setNeedRefresh = (status) => ({ type: GET_MESSAGES, payload: { status } })
const addMessageAC = (newMessage) => ({ type: ADD_MESSAGE, newMessage })
export const getNewMessagesAC = (newMessagesCount) => ({ type: GET_NEW_MESSAGES, newMessagesCount });



export default dialogsReducer;