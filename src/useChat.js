import { useRef, useEffect, useState } from 'react'
import io from 'socket.io-client'

const MESSAGE_EVENT = 'message';
const NEW_TEXT_MESSAGE_EVENT = 'text-message';
const NEW_IMAGE_MESSAGE_EVENT = 'image-message';
const IS_TYPING_EVENT = 'is-typing';
const TYPING_EVENT = 'typing';

const useChat = (username) => {
  const ENDPOINT = `https://pager-hiring.herokuapp.com/`;
  const [messages, setMessages] = useState([]);
  const [typers, setTypers] = useState({});
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(ENDPOINT, {
      reconnectionDelayMax: 10000,
      query: { username },
      transports: ['websocket']
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [ENDPOINT, username]);

  useEffect(() => {
    socketRef.current.on(MESSAGE_EVENT, message => {
      setMessages((messages) => [...messages, message]);
    });

    socketRef.current.on(IS_TYPING_EVENT, (typers) => {
      setTypers(typers)
    });
  }, []);

  const sendTextMessage = message => {
    socketRef.current.emit(NEW_TEXT_MESSAGE_EVENT, message)
  };

  const sendTypingStatus = status => {
    socketRef.current.emit(TYPING_EVENT, status)
  };

  return {
    messages,
    typers,
    sendTextMessage,
    sendTypingStatus,
  }
};

export default useChat
