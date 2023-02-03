import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";

async function fetchLikes() {
  try {
    const response = await axios.get(
      "https://gitssum.com/api/user/get/all/profiles"
    );
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    return response;
  } catch (error) {
    console.log(error);
  }
}
const Chat = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [selectedPost, setSelectedPost] = useState(null);

  const { data, isError, error, isLoading } = useQuery(["likes"], fetchLikes);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <div className="flex items-center justify-center">
      <div className=" shadow-xl h-[100vh] relative">
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
                      backgroundImage: `url(${data.data.profileList[0].imageList[0]})`,
                    }}
                    className="w-[32px] h-[32px] rounded-full bg-cover"
                  ></div>
                  <p className="text-[16px] font-bold">
                    {data.data.profileList[0].username}
                  </p>
                </div>
                <img
                  src="/img/togglebtn.png"
                  alt="ToggleBtn"
                  className="w-[18px] h-[4px]"
                />
              </div>
              <div className="flex flex-col items-center text-[14px] text-[#555]">
                <div className="mb-[8px] mt-[16px]">대화를 시작해보세요</div>
                <div>2023년 1월 13일</div>
              </div>
              <div className="mt-[65px] relative">
                <div className="flex flex-col items-end mb-[20px] mr-[10px]">
                  <div>
                    <span className="inline-block px-[20px] py-[12px] bg-[#28CC9E] rounded-[12px] rounded-br-[2px] text-[14px] text-[#fff] text-left">
                      개발 좋아하시나요?
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end mb-[20px] mr-[10px]">
                  <div>
                    <span className="inline-block px-[20px] py-[12px] bg-[#28CC9E] rounded-[12px] rounded-br-[2px] text-[14px] text-[#fff] text-left">
                      개발 좋아하시나요?개발 좋아하시나요?개발 좋아하시나요?개발
                      좋아하시나요?개발 좋아하시나요?개발 좋아하시나요?개발
                      좋아하시나요?개발 좋아하시나요?개발 좋아하시나요?
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mb-[20px]">
                  <div className="flex items-center space-x-3">
                    <div
                      style={{
                        backgroundImage: `url(${data.data.profileList[0].imageList[0]})`,
                      }}
                      className="w-[43px] h-[43px] rounded-full bg-cover"
                    ></div>
                    <div>
                      <span className="inline-block px-[20px] py-[12px] bg-[#E8E8E8] rounded-[12px] rounded-bl-[2px] text-[14px] text-[#000] text-left">
                        그러니까 가입 했겠죠 ㅎㅎ
                      </span>
                    </div>
                  </div>
                </div>
                <div className="fixed bottom-[45px] mr-[2px]  ml-[5px] border-t-[2px]">
                  <div className="mt-[20px] flex flex-row items-center">
                    <input
                      type="text"
                      className="w-[312px] h-[40px] rounded-lg bg-neutral-200 outline-1 p-2 focus:outline-[#28CC9E] text-xs"
                      placeholder="메세지 보내기"
                    />
                    <div className="cursor-pointer w-[36px] h-[35px]">
                      <img src="/img/msgcheckbtn.png" alt="MSGCheck" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
