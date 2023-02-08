import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import SockJS from "sockjs-client";
import Stomp, { Message } from "stompjs";
import { baseURL } from "../../api/instance";
import { getDetailChat } from "../../api/instance";
import { otherNickName, otherImg, otherUserName, year } from "../../atoms";
import { instance } from "../../api/instance";

async function getChats(e) {
  try {
    const response = await instance.post(`api/message`, e);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const ChatRoom = () => {
  const textRef = useRef(null);
  const { id } = useParams();
  const otherName = useRecoilValue(otherNickName);
  // const myNickName = localStorage.getItem("nickname");
  const myNickName = localStorage.getItem("nickname");
  const url = baseURL;
  const queryClient = useQueryClient();
  const otherImage = useRecoilState(otherImg);
  const otherUsername = useRecoilState(otherUserName);
  const pageCounter = 1;
  const talkListRef = useRef(null);
  const Year = useRecoilState(year);
  //----------------------------------------------

  const roadMessageBox = {
    roomName: id,
    userId: +myNickName,
    toUserId: otherName,
    // page: pageCounter,
  };
  // 입력받은 message값
  const [message, setMessage] = useState("");
  // chat내용 리스트
  const [chatList, setChatList] = useState([]);
  // 서버에서 get해온 이전 채팅 조회부분
  const { data, isSuccess, isLoading, error, isError } = useQuery(
    ["chat", roadMessageBox],
    () => getChats(roadMessageBox),
    {
      onSuccess: (data) => {
        setChatList(data?.data);
      },
    }
  );

  const messageBoxRef = useRef();
  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };
  // 스크롤 최하단으로 내리기
  const scrollToBot = () => {
    window.scrollTo(0, document?.body.scrollHeight);
  };
  //------------------------------------------------

  // stompclient생성부분
  const sock = new SockJS("https://gitssum.com/ws-stomp");
  const client = Stomp.over(sock);

  client.heartbeat.outgoing = 20000;
  client.heartbeat.incoming = 20000;
  client.debug = (f) => f;

  const connectStomp = () => {
    client.connect({ myNickName }, onConnect, onError);
  };

  useEffect(() => {
    if (isSuccess) {
      setChatList(data?.data);
      queryClient.invalidateQueries(["chat"]);
      scrollToBottom();
    }
  }, [isSuccess, data?.data]);

  useEffect(() => {
    connectStomp();
    scrollToBottom();
  }, []);

  const onConnect = () => {
    userEnter();
    scrollToBot();
    setChatList(data?.data);
    onSub();
    // 연결되면 이전데이터로 chatlist 설정
    scrollToBottom();
  };

  const onError = () => {
    console.log("error");
  };

  const onSub = () => {
    client.subscribe(`sub/message/${id}`, (e) => onMessageRecieve(e));
  };

  //-------------------------------------------------

  const onMessageRecieve = (e) => {
    // 메세지가 오면 받아온 데이터의 body를 json.parse해서 data 라는 변수에 넣음
    queryClient.invalidateQueries(["chat"]);
    scrollToBottom();
    let data = JSON.parse(e.body);
    if (data.type === "TALK") {
      getChats().then((res) => {
        return setChatList([...res?.data]);
      });
    }
  };

  const userEnter = () => {
    let payload = {
      type: "ENTER",
      roomId: id,
      message: "입장",
    };
    client.send(`/pub/message`, {}, JSON.stringify(payload));
    scrollToBottom();
    queryClient.invalidateQueries(["chat"]);
  };

  const sendMessage = () => {
    if (message) {
      let payload = {
        type: "TALK",
        roomName: id,
        senderId: myNickName,
        message: message,
        receiverId: otherName,
      };
      client.send(`/pub/message`, {}, JSON.stringify(payload));
      setMessage("");
      scrollToBottom();
      queryClient.invalidateQueries(["chat"]);
    }
  };

  const enterMessage = (e) => {
    e.preventDefault();
    sendMessage();
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <div className="font-SUIT flex items-center justify-center">
      <div className=" shadow-xl relative h-[100vh] ">
        <div className="ml-[20px]">
          <div className="w-[372px] flex flex-wrap ">
            <div className="flex flex-col mt-[40px]">
              <div className="flex flex-row mb-[20px] ml-[20px] items-center space-x-[115px]">
                <a href="/message">
                  <img
                    src="/img/backarrow.png"
                    alt="BackArrowIcon"
                    className="w-[8px] h-[16px]"
                  />
                </a>
                <div className="flex space-x-1 items-center">
                  <div
                    style={{
                      backgroundImage: `url(${otherImage[0]})`,
                    }}
                    className="w-[32px] h-[32px] rounded-full bg-cover"
                  ></div>
                  <p className="text-[16px] font-bold">{otherUsername}</p>
                </div>
                <img
                  src="/img/togglebtn.png"
                  alt="ToggleBtn"
                  className="w-[18px] h-[4px]"
                />
              </div>

              <div className="flex flex-col items-center text-[14px] text-[#555]">
                <div className="mb-[8px] mt-[16px]">대화를 시작해보세요</div>
                <div>
                  {Year[0].slice(0, 4)}년 {Year[0].slice(6, 7)}월{" "}
                  {Year[0].slice(9, 10)}일
                </div>
              </div>
              <div className="mt-[65px] relative">
                <div
                  ref={messageBoxRef}
                  className="w-[360px] max-h-[420px] min-h-[580px] sm:min-h-[420px] md:h-[350px] lg:h-[360px] xl:-h-[580px] 2xl:min-h-[620px] overflow-y-scroll scrollbar-hide"
                >
                  {chatList?.message?.map((List, idx) =>
                    List?.senderId === Number(myNickName) ? (
                      <div
                        className=" flex flex-col items-end mb-[20px] mr-[10px]"
                        key={idx}
                      >
                        <div className="flex">
                          <p className="text-[#B8B8B8] text-[12px] mr-1 flex items-end">
                            {List?.createdAt}
                          </p>
                          <span className="inline-block px-[20px] py-[12px] bg-[#28CC9E] rounded-[12px] rounded-br-[2px] text-[14px] text-[#fff] text-left">
                            {List?.message}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col mb-[20px]" key={idx}>
                        <div className="flex items-center space-x-3">
                          <div
                            style={{
                              backgroundImage: `url(${otherImage[0]})`,
                            }}
                            className="w-[43px] h-[43px] rounded-full bg-cover"
                          ></div>
                          <div className="flex">
                            <span className="inline-block px-[20px] py-[12px] bg-[#E8E8E8] rounded-[12px] rounded-bl-[2px] text-[14px] text-[#000] text-left">
                              {List?.message}
                            </span>
                            <p className="text-[#B8B8B8] text-[12px] ml-1 flex items-end">
                              {List?.createdAt}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="fixed bottom-[45px] mr-[2px]  ml-[5px] border-t-[2px]">
                <div className="mt-[10px] flex flex-row items-center">
                  <form
                    onSubmit={(e) => enterMessage(e)}
                    className="mt-[10px] flex flex-row items-center"
                  >
                    <input
                      type="text"
                      className="w-[312px] h-[40px] rounded-lg bg-neutral-200 outline-1 p-2 focus:outline-[#28CC9E] text-xs"
                      placeholder="메세지 보내기"
                      ref={talkListRef}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <div
                      onClick={enterMessage}
                      className="cursor-pointer w-[36px] h-[35px]"
                    >
                      <img src="/img/msgcheckbtn.png" alt="MSGCheck" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
