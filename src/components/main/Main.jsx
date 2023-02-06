import React, { useState } from "react";
import axios from "axios";
import { instance } from "../../api/instance";
import { Toaster, toast } from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
// import { PostDetail } from "./PostDetail";

async function fetchPosts() {
  try {
    const response = await instance.get(
      "https://gitssum.com/api/user/get/profiles"
    );
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    return response;
  } catch (error) {
    console.log(error);
  }
}

const Main = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [selectedPost, setSelectedPost] = useState(null);
  const { data, isError, error, isLoading } = useQuery(["posts"], fetchPosts);

  const { userId } = useParams();

  const mutation = useMutation((like) => {
    return (
      instance.post(`https://gitssum.com/api/like/user/${userId}`, like),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
      toast.success("좋아요를 보냈어요! ")
    );
  });

  const [modal, setModal] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState();

  const toggleModal = (username) => {
    setModal(!modal);
    setSelectedUsername(username);
  };
  // const queryClient = useQueryClient();
  // queryClient.clear();
  // const queryCache = queryClient.getQueryCache();

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  const datas = data.data;
  console.log(datas);

  return (
    <div className="font-SUIT flex items-center justify-center py-5 ">
      <div className=" shadow-xl">
        <div className="ml-8 drop-shadow-xl">
          <div className="mt-[24px] flex relative">
            <img
              src="/img/homelogo.png"
              alt="HomeLogo"
              className="w-[94px] h-[30px] ml-3"
            />
          </div>
          {datas.profileList.map((post, index) => (
            <div className="w-[359px] flex flex-wrap reletive mb-20">
              <div
                className="w-[350px] h-[572px] mt-10 bg-center bg-cover bg-no-repeat relative mr-7 cursor-pointer hover:scale-110 duration-300 rounded-xl"
                style={{
                  backgroundImage: `url(${post.imageList[0]})`,
                }}
              >
                <div className="flex text-[#fff] absolute bottom-[150px] left-[20px]">
                  <div className="flex space-x-2">
                    <p className="text-2xl font-bold">{post.username}</p>
                    <p className="text-xl flex items-center justify-center">
                      {post.age}
                    </p>
                  </div>
                </div>
                <a
                  href={`/userdetail/${post.userId}`}
                  className="absolute bottom-[161px] right-[20px]"
                >
                  <img
                    src="/img/detailicon.png"
                    alt="DetailIcon"
                    className="w-5 h-5 cursor-pointer "
                  />
                </a>

                <div className="flex text-[#fff] absolute bottom-[125px] left-[20px] space-x-2 text-sm">
                  <p>{post.job} 개발자</p>
                  <p className="mr-2 ml-2 ">.</p>
                  <p>{post.residence}</p>
                </div>
                <div className="flex text-[#fff] absolute bottom-[84px] left-[20px] space-x-2 text-xs flex-wrap">
                  {post.stackList.map((stack) => (
                    <p className=" bg-[#000]/[.3] px-3 py-2 rounded-full mt-2">
                      {stack}
                    </p>
                  ))}
                </div>

                <div className="flex absolute bottom-[20px] right-[20px]">
                  <img
                    src="/img/buttton_like.png"
                    alt="HomeLogo"
                    className="w-[52px] h-[52px] rounded-full flex items-center duration-300 ml-3"
                    onClick={() => toggleModal(post.username)}
                  />
                </div>

                {modal && post.username === selectedUsername && (
                  <div className="font-SUIT rounded-xl bg-white w-[333px] h-[371px] absolute top-[91%] left-[84%] translate-x-[-84%] translate-y-[-85%] ">
                    <hr className="mx-auto w-[40px] h-[6px] bg-[#D9D9D9] rounded-3xl mt-3 mb-8"></hr>
                    <img
                      className="w-[96px] h-[96px] mr-2 rounded-full ml-[120px] my-2 mt-3"
                      src={post.imageList[0]}
                      alt="profilePhoto"
                    />
                    <p className=" mx-auto justify-center flex items-center mb-5 text-[16px] font-bold">
                      {post.username}
                    </p>
                    <p className=" font-bold ml-6 text-[20px]">
                      좋아요를 보내시겠어요?
                    </p>
                    <button
                      className="mx-auto relative flex justify-center items-center text-[16px] rounded-lg bg-[#28CC9E] text-white hover:bg-[#fff] hover:text-[#28CC9E] border hover:border-[#28CC9E]  duration-300 w-[290px] h-[48px]  mt-3 "
                      onClick={() => {
                        mutation.mutate({});
                      }}
                    >
                      좋아요
                    </button>
                    <button
                      className="mx-auto flex justify-center items-center text-[16px] rounded-lg  w-[290px] h-[48px] hover:bg-[#fff] hover:text-[#28CC9E] border hover:border-[#28CC9E]  duration-300 mt-2"
                      onClick={() => toggleModal(post.username)}
                    >
                      다음에 할게요
                    </button>
                    <hr className="mx-auto w-[134px] h-[5px] bg-[#000000] rounded-3xl mt-3"></hr>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
