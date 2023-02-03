import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ModalBasic from "./Modal";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { PostDetail } from "./PostDetail";

async function fetchPosts() {
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

const Main = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [selectedPost, setSelectedPost] = useState(null);
  const { data, isError, error, isLoading } = useQuery(["posts"], fetchPosts);

  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
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

  return (
    <div className="flex items-center justify-center py-5">
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
                    className="w-[52px] h-[52px] rounded-full flex items-center ml-3"
                    onClick={showModal}
                  />
                  {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
