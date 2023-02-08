import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { getChatList } from "../../api/instance";
import { useRecoilState } from "recoil";
import { otherNickName, otherImg, otherUserName, year } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/instance";

async function fetchPosts() {
  try {
    const response = await instance.get("api/room");
    return response;
  } catch (error) {
    console.log(error);
  }
}

const Chat = () => {
  const [otherNickname, setOtherNickName] = useRecoilState(otherNickName);
  const [otherimg, setOtherImg] = useRecoilState(otherImg);
  const [otherUsername, setOtherUserName] = useRecoilState(otherUserName);
  const [Year, setYear] = useRecoilState(year);
  const navigate = useNavigate();

  const { data, isError, error, isLoading } = useQuery(["posts"], fetchPosts);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  const onClickHandler = (e) => {
    setOtherNickName(e?.user.userId);
    setOtherImg(e?.user.imageList[0]);
    setOtherUserName(e?.user.nickname);
    setYear(e?.lastMessage.roomCreatedAt);
    navigate(`/messageRoom/${e.roomName}`);
  };

  return (
    <div className="font-SUIT flex items-center justify-center ">
      <div className="shadow-xl h-[100vh]">
        <div className="ml-[20px] ">
          <div className="w-[372px] flex flex-wrap ">
            <div className="flex flex-col mt-[40px] ">
              <div className="flex flex-row mb-[20px] ml-[20px] ">
                <p className="text-[#000] text-2xl font-bold ">메세지</p>
              </div>
              {data.data?.map((post, idx) => (
                <div
                  className="w-[370px] h-[100px] ml-[-10px] flex items-center hover:bg-slate-100 cursor-pointer"
                  onClick={() => onClickHandler(post)}
                  key={idx}
                >
                  <div className="flex flex-row ml-[20px]">
                    <div
                      style={{
                        backgroundImage: `url(${post.user.imageList[0]})`,
                      }}
                      className="w-[65px] h-[65px] rounded-full bg-cover"
                    />
                    <div className="flex flex-col ml-[15px] mb-[4px] justify-center">
                      <div className="flex flex-row">
                        <p className="mr-2 font-bold text-[18px]">
                          {post.user.nickname}
                        </p>
                      </div>
                      <p className="text-[14px] text-[#555]">
                        {post.lastMessage.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
