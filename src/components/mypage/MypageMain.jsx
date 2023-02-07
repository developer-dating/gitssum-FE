import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { instance } from "../../api/instance";

async function fetchMypage() {
  try {
    const response = await instance.get(
      "https://gitssum.com/api/user/get/mypage"
    );
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const MypageMain = () => {
  const { data, isError, error, isLoading } = useQuery(["posts"], fetchMypage);

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
    <div className="shadow-xl w-[390px] h-[100vh] mx-auto font-SUIT">
      <p className=" mx-auto flex  text-[24px] font-bold mb-2 pt-10 pl-4">
        <div className="mx-1 flex title-font font-medium items-center pr-1 text-gray-900 md:mb-0">
          <img className="w-[34px] h-[30px]" src="img/heart.png " alt="logo" />
        </div>
        내 프로필
      </p>
      <div className="flex justify-center pr-24  items-center ">
        <div className="pt-5 flex">
          <img
            className="w-[80px] h-[80px]  mr-2 rounded-xl"
            src={data?.data.imageList[0]}
            alt="profilePhoto"
          />
          <div>
            <div className="mx-auto flex items-center pl-2 ">
              <div className="mr-1 font-bold text-[18px] pr-1">
                {datas.username}
              </div>
              <div className="text-[16px]">29</div>
            </div>
            <span className="pl-2 text-[12px]">
              {datas.job} ∙ {datas.residence}
            </span>
            <div className="text-[12px]">
              <div className="flex pl-1.5">
                {datas?.stackList.map((stack) => (
                  <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                    {stack}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/setprofile" style={{ textDecoration: "none" }}>
        <button className="mx-auto group relative flex justify-center items-center text-[16px] rounded-lg bg-[#28CC9E] text-white w-[350px] h-[48px] hover:bg-[#fff] hover:text-[#28CC9E] border hover:border-[#28CC9E]  duration-300 mt-5 mb-20">
          정보 수정하기
        </button>{" "}
      </Link>
    </div>
  );
};

export default MypageMain;
