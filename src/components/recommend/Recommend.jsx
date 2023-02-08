import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ModalBasic from "../main/Modal";
import { Toaster, toast } from "react-hot-toast";
import { instance } from "../../api/instance";
import axios from "axios";

async function fetchRecommend() {
  try {
    const response = await instance.get(
      "https://gitssum.com/api/user/get/recommendation"
    );
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }const myPromise = fetchData();

    return response;
  } catch (error) {
    console.log(error);
  }
}

const Recommend = () => {
  const navigate = useNavigate();

  const { data, isError, error, isLoading } = useQuery(
    ["recommend"],
    fetchRecommend
  );

  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  if (isLoading) return toast("Waiting...");
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  const onClickHandler = () => {
    navigate("/addrecommend");
  };
  const onClicksHandler = () => {
    navigate("/putrecommend");
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="font-SUIT flex items-center justify-center ">
        <div className=" shadow-xl h-[100vh]">
          <div className="ml-[20px]">
            <div className="w-[371px] flex flex-wrap reletive mb-20 drop-shadow-md">
              <div className="flex flex-col mt-[40px]">
                <p className="text-[#000] text-2xl font-bold ">For You</p>
                <p className="text-[#333] text-normal font-normal mt-2 ">
                  원하는 상대의 조건을 설정하고 추천받으세요.
                </p>
                {data?.data.profileList.length === 0 ? (
                  <>
                    <div className="w-[350px] h-[450px] flex flex-col items-center justify-center">
                      <img
                        src="/img/recomendbasicicon.png"
                        alt="NotARecommendLogo"
                      />
                      <div className="mt-[30px] text-[14px]">
                        &nbsp;개발자 님의 취향을 설정하면,
                        <br /> 해당하는 상대의 카드를 보여줘요!
                      </div>
                    </div>
                    <div className="w-[350px] h-[100px] flex items-center justify-center">
                      <button
                        onClick={onClickHandler}
                        className="flex w-[200px] h-[48px] justify-center items-center rounded-md border border-[#28CC9E] text-[#28CC9E] font-bold hover:bg-[#28CC9E] hover:text-[#fff] duration-300"
                      >
                        <p>취향 설정하기</p>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[350px] h-[100px] flex pt-[28px]">
                      <button
                        onClick={onClicksHandler}
                        className="flex w-[89px] h-[34px] justify-center items-center rounded-full px-[8px] py-[12px] border border-[#28CC9E] text-[#28CC9E] font-medium hover:bg-[#28CC9E] hover:text-[#fff] duration-300 text-[14px]"
                      >
                        <p>취향 재설정</p>
                      </button>
                    </div>
                    <div className="flex w-[400px] flex-wrap">
                      {data?.data.profileList.map((post, idx) => (
                        <div className="flex flex-col mb-[34px]" key={idx}>
                          <a
                            href={`/userdetail/${post.userId}`}
                            className="w-[167px] h-[167px]  bg-center bg-cover bg-no-repeat relative mr-[16px] cursor-pointer  duration-300 rounded-xl"
                            style={{
                              backgroundImage: `url(${post.imageList[0]})`,
                            }}
                          >
                            <div>
                              <img
                                src="/img/like2.png"
                                alt="LikeLogo"
                                className="w-[32px] h-[32px] absolute right-[10px] bottom-[10px]"
                                onClick={showModal}
                              />
                            </div>
                          </a>
                          <div className="flex flex-row items-center">
                            <div className="text-[18px] font-bold mr-1">
                              {post.username}
                            </div>
                            <div className="text-[16px] font-medium">
                              {post.age}
                            </div>
                          </div>
                          <div className="flex flex-row items-center">
                            <img
                              src="/img/backicon.png"
                              alt="BackIcon"
                              className="w-[16px] h-[13px] mr-1"
                            />
                            <div>{post.job}</div>
                          </div>
                          <div className="flex flex-row items-center">
                            <img
                              src="/img/arrowicon.png"
                              alt="ArrowIcon"
                              className="w-[14px] h-[14px] mr-1"
                            />
                            <div>{post.residence}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 z-10 w-[760px] min-w-[2030px] m-auto">
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
      </div>
    </>
  );
};

export default Recommend;
