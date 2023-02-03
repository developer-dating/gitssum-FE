import { useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();

  async function detailPosts() {
    try {
      const response = await axios.get(
        `https://gitssum.com/api/user/get/otherprofile/${id}`
      );
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isError, error, isLoading } = useQuery(["posts"], detailPosts);

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
    <div className="font-SUIT flex items-center justify-center">
      <div className=" shadow-xl h-[100vh]">
        <div>
          <img
            className="w-[390px] h-[410px]"
            src={datas.imageList[0]}
            alt="logo"
          />

          <div className="ml-[18px] flex items-center text-2xl pl-2 pt-3 md:flex-row">
            <div className="mr-1 font-bold pr-1 text-[26px]">
              {datas.username}
            </div>
            <div className="text-2xl font-medium">{datas.age}</div>
          </div>
          <span className="pl-2 pt-1 text-sm ml-[18px] ">
            {datas.job} 개발자 ∙ {datas.residence}
          </span>
          <p className="ml-[22px]  bg-[#EEEEEE] rounded-xl p-3 w-[350px] text-xs my-3 ">
            {datas.introduction}
          </p>
          <div className="mr-1 font-bold py-1 pl-2 ml-[20px] ">기본 정보</div>
          <div className="flex justify-between px-8 py-1 text-sm ml-[1px] ">
            <span className="text-[#555555]">학력</span>
            <span className=" ">{datas.education}</span>
          </div>
          <div className="flex justify-between px-8 text-sm ml-[1px] ">
            <span className="text-[#555555]">깃헙/블로그링크</span>
            <span>{datas.link}</span>
          </div>

          <div className="mr-1 font-bold ml-[18px]  p-2">기술스택</div>
          <div className="pl-2 flex mb-3 ml-[18px] ">
            {datas.stackList.map((stack) => (
              <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                {stack}
              </button>
            ))}
          </div>
          <button className="ml-[20px]  group relative flex justify-center items-center text-sm rounded-lg bg-[#28CC9E] text-white w-[350px] h-[40px] font-bold mt-[55px] mb-10">
            좋아요
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
