import { useState, useRef, Component } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../api/instance";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Toaster, toast } from "react-hot-toast";

export const Detail = () => {
  const { id } = useParams();

  async function detailPosts() {
    try {
      const response = await instance.get(
        `https://gitssum.com/api/user/get/profile/${id}`
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

  const mutation = useMutation((userId) => {
    return (
      instance.post(`https://gitssum.com/api/like/user/${userId}`),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
      toast.success("좋아요를 보냈어요! ")
      // alert("좋아요를 보냈어요!")
    );
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  const datas = data.data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    pauseOnHover: false,
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="font-SUIT flex items-center justify-center ">
        <div className=" shadow-xl">
          <div className="relative ">
            <a href="/" className="absolute top-[20px] left-[20px]">
              <img src="/img/backarrowwhite.png" alt="" />
            </a>
            <div>
              <Slider {...settings} className="w-[390px] h-[410px] mb-5">
                <div>
                  <img
                    className="w-[390px] h-[410px] object-cover "
                    src={datas.imageList[0]}
                    alt="pic1"
                  />
                </div>
                <div>
                  <img
                    className="w-[390px] h-[410px] object-cover "
                    src={datas.imageList[1]}
                    alt="pic2"
                  />
                </div>
                <div>
                  <img
                    className="w-[390px] h-[410px] object-cover "
                    src={datas.imageList[2]}
                    alt="pic3"
                  />
                </div>
              </Slider>
            </div>
            <div className="ml-[18px] flex items-center text-2xl pl-2 pt-3 md:flex-row">
              <div className="mr-1 font-bold pr-1 text-[26px]">
                {datas.username}
              </div>
              <div className="text-2xl font-medium">{datas.age}</div>
            </div>
            <span className="pl-2 pt-1 text-sm ml-[18px] ">
              {datas.job} ∙ {datas.residence}
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
              {datas?.stackList.map((stack) => (
                <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                  {stack}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                mutation.mutate(datas.userId);
              }}
              className="ml-[20px]  group relative flex justify-center items-center text-sm rounded-lg bg-[#28CC9E] text-white w-[350px] h-[40px] font-bold mt-[30px] mb-24"
            >
              좋아요
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
