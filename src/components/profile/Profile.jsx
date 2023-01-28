import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Navigate } from "react-router";

export default function Profile() {
  const mutation = useMutation((prof) => {
    return (
      axios.post("http://localhost:3001/posts", prof), alert("프로필 설정 성공")
    );
  });

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [link, setLink] = useState("");
  const [job, setJob] = useState("");
  const [residence, setResidence] = useState("");
  const [education, setEducation] = useState("");
  const [myImage, setMyImage] = useState("");

  const addImage = (e) => {
    const nowSelectImageList = e.target.files;
    const nowImageURLList = [...myImage];
    for (let i = 0; i < nowSelectImageList.length; i += 1) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setMyImage(nowImageURLList);
  };

  return (
    <div>
      {mutation.isLoading ? (
        "Loading..."
      ) : (
        <>
          {mutation.isError ? (
            <div>error occured: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <Navigate to="/"></Navigate> : null}
          <div className="flex items-center justify-center py-5">
            <div className="ml-8">
              <p className="mx-auto mt-5 flex flex-wrap  md:flex-row items-center text-3xl font-bold mb-10">
                <div className="mx-1 flex title-font font-medium items-center  text-gray-900 md:mb-0">
                  <img class="" src="img/heart.png " alt="logo" />
                </div>
                내 프로필 설정
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mx-auto  items-center mb-3">
                  <div className="mr-1 font-bold text-sm mb-1">프로필 사진</div>
                  <div className="text-xs text-[#FF4E4E]">
                    (※프로필에 표시되는 이미지로, 3장 이상 업로드해주세요.)
                  </div>
                </div>
                <button>
                  <img
                    className="w-[90px] h-[90px]"
                    src="img/photo_add.png "
                    alt="logo"
                  />
                </button>
                <div>
                  <label
                    htmlFor="input-file"
                    className="OOTDWrite-input-file"
                    onChange={addImage}
                  >
                    <input
                      type="file"
                      multiple="multiple"
                      id="input-file"
                      accept=".jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                <hr className="w-[350px] h-0.5 bg-[#D9D9D9] rounded-3xl my-6"></hr>
                <div className="mx-auto flex flex-wrap  items-center mt-3 mb-1">
                  <div className="mr-1 font-bold text-sm">성별</div>
                  <div className="text-xs text-[#FF4E4E]">
                    (※프로필에 표시되는 성별로, 이후 변경할 수 없습니다.)
                  </div>
                </div>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className=" w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-1.5 br-8 focus:outline-[#28CC9E] text-xs"
                  name="성별 선택"
                >
                  <option
                    className="rounded-md"
                    value=""
                    disabled
                    selected
                    hidden
                  >
                    성별 선택
                  </option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </select>
                <div className="mx-auto  items-center flex mt-3 mb-1">
                  <div className="mr-1 font-bold text-sm">닉네임</div>
                  <div className="text-xs text-[#FF4E4E]">
                    (※프로필에 표시되는 닉네임으로, 이후 변경할 수 없습니다.)
                  </div>
                </div>
                <input
                  className=" w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E]  text-xs"
                  placeholder="본명 또는 닉네임을 입력해주세요."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <div>
                  <div className="mx-auto items-center mt-3">
                    <div className="mr-1 font-bold text-sm">나이</div>
                    <input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="나이 입력"
                      className=" w-[350px] h-[40px] rounded-lg bg-neutral-200 outline-1 p-2 focus:outline-[#28CC9E] text-xs mt-0.5 "
                    ></input>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="mx-auto flex flex-wrap md:flex-row  mt-3 mb-1">
                      <div className="mr-1 font-bold text-sm">학력</div>
                    </div>
                    <select
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      className=" w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-1.5  focus:outline-[#28CC9E] text-xs"
                      name="학력 선택"
                    >
                      <option
                        className="rounded-md"
                        value=""
                        disabled
                        selected
                        hidden
                      >
                        학력 선택
                      </option>
                      <option value="고졸">고졸</option>
                      <option value="초대졸">초대졸</option>
                      <option value="대졸">대졸</option>
                      <option value="대학원">대학원</option>
                    </select>
                  </div>
                </div>
                <div className="mx-auto flex flex-wrap md:flex-row items-center mt-3 mb-1">
                  <div className="mr-1 font-bold text-sm">직업 또는 분야</div>
                </div>
                <select
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 focus:outline-[#28CC9E] text-xs p-1.5"
                  name="직업 선택"
                >
                  <option
                    className="rounded-md"
                    value=""
                    disabled
                    selected
                    hidden
                  >
                    직업 선택
                  </option>
                  <option value="프론트">프론트</option>
                  <option value="백엔드">백엔드</option>
                  <option value="풀스택">풀스택</option>
                  <option value="디자이너">디자이너</option>
                  <option value="PM">PM</option>
                  <option value="DBA">DBA</option>
                </select>
                <div className="mx-auto flex flex-wrap md:flex-row items-center mt-3 mb-1">
                  <div className="mr-1 font-bold text-sm">깃헙/블로그 링크</div>
                </div>
                <input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E] text-xs"
                  placeholder="링크 주소를 입력해주세요."
                ></input>
                <div className="mx-auto flex flex-wrap md:flex-row items-center mt-3 mb-1">
                  <div className="mr-1 font-bold text-sm">거주지</div>
                </div>
                <div className="mx-auto flex flex-wrap  md:flex-row items-center">
                  <select
                    value={residence}
                    onChange={(e) => setResidence(e.target.value)}
                    className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1   focus:outline-[#28CC9E] text-xs p-1.5"
                    name="지역 선택"
                  >
                    <option
                      className="rounded-md"
                      value=""
                      disabled
                      selected
                      hidden
                    >
                      거주지 선택
                    </option>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="경북">경북</option>
                    <option value="경남">경남</option>
                    <option value="전북">전북</option>
                    <option value="전남">전남</option>
                    <option value="충북">충북</option>
                    <option value="충남">충남</option>
                    <option value="강원">강원</option>
                    <option value="제주">제주</option>
                    <option value="인천">인천</option>
                  </select>
                </div>
                <div className="mt-6 mx-auto flex flex-wrap md:flex-row items-center mb-1">
                  <div className="mr-1 font-bold text-sm">한 줄 소개</div>
                </div>
                <input
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  className="w-[350px] h-[40px] rounded-md mb-3 bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E] text-xs"
                  placeholder="자신에 대해 간단히 소개해주세요~"
                ></input>
                <hr className="w-[350px] h-0.5 bg-gray-200 rounded-3xl my-6"></hr>
                <div className="mt-2 mx-auto flex flex-wrap md:flex-row items-center mb-4">
                  <div className="mr-1 font-bold text-sm">선호 기술스택</div>
                </div>
                <div className="flex mb-3">
                  <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                    Python
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    C
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    Java
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    C++
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    C#
                  </button>
                </div>
                <div className="flex mb-3">
                  <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                    Visual Basic
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1  rounded-full">
                    JavaScript
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    Assembly Language
                  </button>
                </div>
                <div className="flex mb-3">
                  <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                    SQL
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    PHP
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    Objective-C
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    Go
                  </button>
                </div>
                <div className="flex mb-3">
                  <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                    Delphi/Objective Pascal
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    MATLAB
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    Fortran
                  </button>
                </div>
                <div className="flex mb-2">
                  <button className="bg-[#EEEEEE] px-3 py-1 mr-1 rounded-full">
                    Swift
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    Classic Visual Basic
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    R
                  </button>
                  <button className="bg-[#EEEEEE] px-3 py-1 mx-1 rounded-full">
                    Pearl
                  </button>
                </div>

                <button
                  className=" text-sm rounded-lg bg-[#28CC9E] text-white w-[350px] h-[40px] font-bold mt-10 mb-20"
                  onClick={() =>
                    mutation.mutate({
                      username: username,
                      age: age,
                      introduction: introduction,
                      link: link,
                      gender: gender,
                      education: education,
                      job: job,
                      residence: residence,
                      myImage: myImage,
                    })
                  }
                >
                  설정 완료
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
