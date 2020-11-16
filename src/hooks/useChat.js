import { useRef, useEffect, useState } from 'react'
import io from 'socket.io-client'
import {
  WS_ENDPOINT,
  MESSAGE_EVENT,
  NEW_TEXT_MESSAGE_EVENT,
  NEW_IMAGE_MESSAGE_EVENT,
  IS_TYPING_EVENT,
  TYPING_EVENT
} from '../config';

const useChat = (username) => {
  const [messages, setMessages] = useState([]);
  const [typers, setTypers] = useState({});
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(WS_ENDPOINT, {
      pingInterval: 15000,
      pingTimeout: 30000,
      query: { username },
      transports: ['websocket']
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [WS_ENDPOINT, username]);

  useEffect(() => {
    socketRef.current.on(MESSAGE_EVENT, message => {
      setMessages((messages) => {
        return [...messages, message].sort(function(a, b) {
          return (a.time < b.date) ? 1 : ((a.time > b.time) ? -1 : 0);
        });
      });
    });

    socketRef.current.on(IS_TYPING_EVENT, (typers) => {
      setTypers(typers)
    });
  }, []);

  const sendTextMessage = message => {
    socketRef.current.emit(NEW_TEXT_MESSAGE_EVENT, message)
  };

  const sendImageMessage = (message) => {
    socketRef.current.emit(NEW_IMAGE_MESSAGE_EVENT, message);
  };

  const sendTypingStatus = status => {
    socketRef.current.emit(TYPING_EVENT, status)
  };

  return {
    messages,
    typers,
    sendTextMessage,
    sendImageMessage,
    sendTypingStatus,
  }
};

export default useChat
