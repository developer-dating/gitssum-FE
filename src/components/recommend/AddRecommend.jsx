import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import StackCard from "./StackCard";
import { Toaster, toast } from "react-hot-toast";
import { instance } from "../../api/instance";

const AddRecommend = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  queryClient.clear();
  const mutationCache = queryClient.getMutationCache();
  mutationCache.clear();

  const mutation = useMutation((rocm) => {
    return (
      instance.post("https://gitssum.com/api/user/save/recommendation", rocm),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
      toast.success("취향 설정 완료!")
    );
  });

  const [checkedItems, setCheckedItems] = useState("");
  const [age, setAge] = useState("");
  const [residence, setResidence] = useState("");
  const [stack, setStack] = useState("Java");

  // 유효성 검사
  const [ageMessage, setAgeMessage] = useState("");
  const [isAge, setIsAge] = useState(false);
  const [residenceMessage, setResidenceMessage] = useState("");
  const [isResidence, setIsResidence] = useState(false);

  const onChangeAge = (e) => {
    setAge(e.target.value);
    if (e.target.value === "") {
      setIsAge(false);
    } else {
      setIsAge(true);
    }
  };

  const onChangeResidence = (e) => {
    setResidence(e.target.value);
    if (e.target.value === "") {
      setIsResidence(false);
    } else {
      setIsResidence(true);
    }
  };

  const datas = [
    { title: "Python", stack: "Python" },
    { title: "C", stack: "C" },
    { title: "C++", stack: "C++" },
    { title: "C#", stack: "C#" },
    { title: "Java", stack: "Java" },
    { title: "React", stack: "React" },
    { title: "JavaScript", stack: "JavaScript" },
    { title: "Assembly language", stack: "Assembly language" },
    { title: "SQL", stack: "SQL" },
    { title: "PHP", stack: "PHP" },
    { title: "Object-C", stack: "Object-C" },
    { title: "GO", stack: "GO" },
    { title: "Delphi/Objective Pascal", stack: "Delphi/Objective Pascal" },
    { title: "MATLAB", stack: "MATLAB" },
    { title: "Fortran", stack: "Fortran" },
    { title: "R", stack: "R" },
    { title: "Perl", stack: "Perl" },
    { title: "Ruby", stack: "Ruby" },
    { title: "Classic Visual Basic", stack: "Classic Visual Basic" },
  ];

  const checkedItemHandler = (code, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, code]);
    } else if (!isChecked && checkedItems.find((one) => one === code)) {
      const filter = checkedItems.filter((one) => one !== code);
      setCheckedItems([...filter]);
    }
  };

  return (
    <div className="font-SUIT flex items-center justify-center">
      <div className="shadow-xl pb-10 h-[100vh]">
        <div className="ml-5">
          <div className="w-96 flex lex items-center justify-center flex-wrap">
            <div className="flex flex-col mt-10">
              <a
                href="/recommend"
                className=" text-[#000] text-2xl font-bold ml-[-18px]"
              >
                <img src="/img/backarrowlogo.png" alt="BackarrowLogo" />
              </a>
              <p className="text-[#333] text-2xl font-bold mt-[20px]">
                취향 설정
              </p>
              <p className="text-[#333] text-xl font-bold mt-[40px]">
                지역 설정
              </p>

              <div className="space-x-[10px]">
                <select
                  value={residence}
                  onChange={onChangeResidence}
                  type="text"
                  className="w-[350px] h-[40px] border border-[#eee] rounded-[8px] mt-3 font-[14px] pl-3 bg-[#eee]"
                >
                  <option defaultValue="" selected hidden>
                    지역 선택
                  </option>
                  <option value="서울">서울</option>
                  <option value="경기">경기</option>
                  <option value="인천">인천</option>
                  <option value="강원">강원</option>
                  <option value="대전">대전</option>
                  <option value="충남">충남</option>
                  <option value="충북">충북</option>
                  <option value="부산">부산</option>
                  <option value="울산">울산</option>
                  <option value="경남">경남</option>
                  <option value="경북">경북</option>
                  <option value="대구">대구</option>
                  <option value="광주">광주</option>
                  <option value="전남">전남</option>
                  <option value="전북">전북</option>
                  <option value="제주">제주</option>
                </select>
              </div>
              <p className="text-[#333] text-xl font-bold mt-[40px]">
                나이 설정
              </p>
              <div>
                <select
                  value={age}
                  onChange={onChangeAge}
                  type="text"
                  selected="selected"
                  className="w-[350px] h-[40px] border border-[#eee] rounded-[8px] mt-3 font-[14px] pl-3 bg-[#eee]"
                >
                  <option defaultValue="" selected hidden>
                    나이대 선택
                  </option>
                  <option value="20-24세">20-24세</option>
                  <option value="25-29세">25-29세</option>
                  <option value="30-34세">30-34세</option>
                  <option value="35-39세">35-39세</option>
                </select>
              </div>
              <p className="text-[#333] text-xl font-bold mt-[40px]">
                선호 기술스택
              </p>
              <p className="text-[#333] text-[12px] font-normal mt-[8px]">
                선호 개발 언어를 3개 이하로 선택해주세요.
              </p>
              <div>
                <ul className="flex text-[#555] left-5 text-xs flex-wrap">
                  {datas?.map((data, index) => (
                    <StackCard
                      key={index}
                      data={data.title}
                      checkedItem={checkedItems}
                      checkedItemHandler={checkedItemHandler}
                    />
                  ))}
                </ul>
                <button
                  disabled={!(isAge && isResidence)}
                  className="disabled:bg-[#a09e9e] flex w-[350px] h-[48px] justify-center items-center rounded-md border hover:border-[#28CC9E] text-[#fff] font-bold bg-[#28CC9E] hover:bg-[#fff] hover:text-[#28CC9E] duration-300 my-[80px]"
                  onClick={() => {
                    mutation?.mutate({
                      age: age,
                      residence: residence,
                      stacks: checkedItems,
                    });
                    navigate(`/recommend`);
                  }}
                >
                  <p>취향 설정하기</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecommend;
