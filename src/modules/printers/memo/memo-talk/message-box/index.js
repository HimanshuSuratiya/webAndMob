import { useEffect, useRef, useState, createRef } from "react";
import clsx from 'clsx';
import ChatItem from '../chat-item';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import useStyles from "./style";
import moment from 'moment';
import VisibilitySensor from 'react-visibility-sensor';
import { useTranslation } from 'react-i18next';


const defaultState = {
  topMessaageId: null,
  bottomMessageId: null,
  onBottom: false,
};

const noop = () => {};

const MessageBox = ({
  isFetchingMessages = false,
  isFetchingOldMessages = false,
  deviceInfoId = null,
  messageList = [],
  totalMessages = 0,
  previewImage = noop,
  onScrollTop = noop,
  onDelete = noop,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [state, setState]= useState(defaultState);
  const messageBoxRef = useRef(null);
  const messageBoxEndRef = useRef(null);

  const scrollToBotom = () => {
    messageBoxEndRef?.current?.scrollIntoView(true);
  };

  const handleScroll = (evt) => {
    const { scrollTop } = evt.currentTarget;
    if (scrollTop === 0) {
      onScrollTop();
    }
  };

  useEffect(() => {
    const messageBoxElem = messageBoxRef?.current;
    messageBoxElem.onscroll = handleScroll;
  }, [totalMessages, messageList, deviceInfoId]);

  useEffect(() => {
    if (messageList.length && state.topMessaageId === null && state.bottomMessageId === null) {
      const filterMessages = messageList.filter(message => message?.type !== 'day');
      scrollToBotom();
      setState(prevState => ({
        ...prevState,
        topMessaageId: filterMessages[0]?.messageId,
        bottomMessageId: filterMessages[filterMessages.length - 1]?.messageId
      }));
    }

    if (messageList.length && state.topMessaageId && state.bottomMessageId) {
      const topChat = document.getElementById(`chatid-${state.topMessaageId}`);

      const filterMessages = messageList.filter(message => message?.type !== 'day');
      
      if (filterMessages[0]?.typeOfList === 1) {
        topChat?.scrollIntoView(true);
      } else if (filterMessages[0]?.typeOfList === 2 && state.onBottom) {
        scrollToBotom();
      }

      setState(prevState => ({
        ...prevState,
        topMessaageId: filterMessages[0]?.messageId,
        bottomMessageId: filterMessages[filterMessages.length - 1]?.messageId
      }));
    }

    if (!messageList.length) {
      setState(prevState => ({
        ...prevState,
        topMessaageId: null,
        bottomMessageId: null
      }))
    }
  }, [messageList]);

  return (
    <div className={clsx('h-100', classes.messageBox)} ref={messageBoxRef}>
      {isFetchingMessages ? (
        <div className='d-flex f-align-center f-justify-center h-100'>
          <CircularProgress />
        </div>
      ) : 
        <>
          {!deviceInfoId && (
            <div className='d-flex f-align-center f-justify-center h-100'>
              <Typography variant='h5'>
                {t('selectPrinterChat')}
              </Typography>
            </div>
          )}
          {deviceInfoId && !isFetchingMessages && !messageList.length && (
            <div className='d-flex f-align-center f-justify-center h-100'>
            <Typography variant='h5'>
              {t('chatNoMemo')}
            </Typography>
          </div>
          )}
          <div>
            {!!isFetchingOldMessages && (
              <div className='d-flex f-align-center f-justify-center mt-2'>
                <CircularProgress />
              </div>
            )}
            {deviceInfoId && messageList.map((message = {}, index) => (
              message?.type === 'day' ? (
                <div
                  className={clsx('d-flex f-justify-center p-4', classes.dateWrapper)}
                >
                <Typography style={{ color: '#616161' }} variant='caption'>{moment(message.date, 'DD-MM-YYYY').format("YYYY-MM-DD")}</Typography>
              </div>
              ): (
                <ChatItem
                  position={message?.from === 'me' ? 'right' : 'left'}
                  text={message?.data}
                  author={message?.author}
                  date={message?.timestamp}
                  image={message?.image}
                  messageId={message?.messageId}
                  previewImage={previewImage}
                  isFetchingMessages={isFetchingMessages}
                  onDelete={onDelete}
                />
              )
            ))}
            <VisibilitySensor onChange={(onBottom) => setState(prevState => ({ ...prevState, onBottom }))} scrollCheck>
              <div ref={messageBoxEndRef} style={{visibility: 'none'}}>-</div>
            </VisibilitySensor>
          </div>
        </>
      }
    </div>
  );
};

export default MessageBox;