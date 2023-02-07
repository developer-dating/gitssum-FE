// import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { otherNickName } from "../../atoms";
import { instance } from "../../api/instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { createChatRoom } from "../../api/instance";
import { Toaster, toast } from "react-hot-toast";

async function fetchLikes() {
  try {
    const response = await instance.get(
      "https://gitssum.com/api/like/get/likeme"
    );
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    return response;
  } catch (error) {
    console.log(error);
  }
}

const LikeMe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [otherNickname, setOtherNickName] = useRecoilState(otherNickName);
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(createChatRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(["chat"]);
    },
  });
  const { data, isError, error, isLoading } = useQuery(["likes"], fetchLikes);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  const onChatHandler = (e) => {
    toast.success(`축하드려요 ${e.username}님과 연결되었습니다!`);
    mutateAsync({ toUserId: e.userId });
    setOtherNickName(e.userId);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="font-SUIT flex items-center justify-center ">
        <div className=" shadow-xl  h-[100vh]">
          <div className="ml-[20px]">
            <div className="w-[372px] flex flex-wrap  ">
              <div className="flex flex-col mt-[40px] ">
                <div className="flex flex-row mb-[40px] ">
                  <img
                    src="/img/likelogo.png"
                    alt="likelogo"
                    className="w-[32px] h-[30px] mr-2"
                  />
                  <p className="text-[#000] text-2xl font-bold ">받은 좋아요</p>
                </div>
                {data.data.likeFeed.map((post, index) => (
                  <div className="w-[370px] h-[130px] ml-[-10px] border-b-[2px] flex items-center ">
                    <div className="flex flex-row ml-[10px]">
                      <div
                        style={{
                          backgroundImage: `url(${post.imageList[0]})`,
                        }}
                        className="w-[90px] h-[90px] rounded-[10px] bg-cover"
                        key="index"
                      />
                      <div className="flex flex-col ml-2 mb-[4px]">
                        <div className="flex flex-row">
                          <p className="mr-2 font-bold text-[20px]" key="index">
                            {post.username}
                          </p>
                          <span className="font-normal text-[18px] mr-2">
                            {post.age}
                          </span>
                        </div>

                        <p className="text-[14px]" key="index">
                          {post.job} . {post.residence}
                        </p>
                        <div className="flex flex-row mt-[5px]">
                          <button
                            className="w-[90px] h-[32px] bg-[#28CC9E] text-[#fff] rounded-[8px] mr-[8px] hover:bg-[#fff] border hover:border-[#28CC9E] hover:text-[#28CC9E] duration-300"
                            onClick={() => onChatHandler(post)}
                          >
                            <p>연결하기</p>
                          </button>
                          <button className="w-[90px] h-[32px] rounded-[8px] border border-gray text-[#000] hover:bg-[grey] hover:text-[#fff] duration-300">
                            <p>관심 없음</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeMe;
