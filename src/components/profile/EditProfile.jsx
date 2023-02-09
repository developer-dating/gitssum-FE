import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { useNavigate, useParams } from "react-router-dom";
import StackCard from "../recommend/StackCard";
import { Toaster, toast } from "react-hot-toast";
import { instance } from "../../api/instance";
import { Link } from "react-router-dom";
import { useCallback } from "react";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const mutation = useMutation((prof) => {
  //   return (
  //     instance.put("/api/user/modify/mypage", prof),
  //     toast.success("프로필 등록 성공!")
  //   );
  // });
  const [checkedItems, setCheckedItems] = useState([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [link, setLink] = useState("");
  const [job, setJob] = useState("");
  const [residence, setResidence] = useState("");
  const [education, setEducation] = useState("");
  const [stack, setStack] = useState("");
  const [file, setFile] = useState([]);

  // 유효성 검사
  const [nameMessage, setNameMessage] = useState("");
  const [isName, setIsName] = useState(false);
  const [introMessage, setIntroMessage] = useState("");
  const [isIntro, setIsIntro] = useState(false);
  const [genderMessage, setGenderMessage] = useState("");
  const [isGender, setIsGender] = useState(false);
  const [ageMessage, setAgeMessage] = useState("");
  const [isAge, setIsAge] = useState(false);
  const [educationMessage, setEducationMessage] = useState("");
  const [isEducation, setIsEducation] = useState(false);
  const [jobMessage, setJobMessage] = useState("");
  const [isJob, setIsJob] = useState(false);
  const [residenceMessage, setResidenceMessage] = useState("");
  const [isResidence, setIsResidence] = useState(false);
  const [linkMessage, setLinkMessage] = useState("");
  const [isLink, setIsLink] = useState(false);
  const [checkedItemsMessage, setCheckedItemsMessage] = useState("");
  const [isCheckedItems, setIsCheckedItems] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success("프로필 설정 완료!");
    const formData = new FormData();
    formData.append("username", username);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("introduction", introduction);
    formData.append("link", link);
    formData.append("job", job);
    formData.append("residence", residence);
    formData.append("education", education);
    formData.append("multipartFile", file);
    formData.append("stacks", checkedItems);
    toast.success("프로필이 등록되었어요!");

    instance({
      method: "put",
      url: "https://gitssum.com/api/user/modify/mypage",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
      .then((result) => {
        console.log("요청성공");
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
    // mutation.mutate(formData);
  };

  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append("file", uploadFile);
      setFile(uploadFile);
      console.log(uploadFile);
      console.log("===useState===");
      console.log(file);
    }
  };

  const onPrint = () => {
    console.log(file);
  };

  const onChangeName = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 6) {
      setNameMessage("2자 이상, 6자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("사용 가능한 닉네임입니다.");
      setIsName(true);
    }
  };

  const onChangeIntro = (e) => {
    setIntroduction(e.target.value);
    if (e.target.value.length < 10 || e.target.value.length > 100) {
      setIntroMessage("10자-100자 내로 소개글을 작성해주세요.");
      setIsIntro(false);
    } else {
      setIntroMessage("");
      setIsIntro(true);
    }
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
    if (e.target.value === "") {
      setIsGender(false);
    } else {
      setIsGender(true);
    }
  };

  const onChangeEducation = (e) => {
    setEducation(e.target.value);
    if (e.target.value === "") {
      setIsEducation(false);
    } else {
      setIsEducation(true);
    }
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
    if (isNaN(e.target.value)) {
      setAgeMessage("나이는 숫자로만 기입해주세요.");
      setIsAge(false);
    } else if (!isNaN(e.target.value)) {
      setAgeMessage("");
      setIsAge(true);
    }
  };

  const onChangeJob = (e) => {
    setJob(e.target.value);
    if (e.target.value === "") {
      setIsJob(false);
    } else {
      setIsJob(true);
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

  const onChangeLink = (e) => {
    setLink(e.target.value);
    if (e.target.value.length === 0) {
      setIsLink(false);
    } else {
      setIsLink(true);
    }
  };

  const handleDeleteImage = (id) => {
    setFile(file.filter((_, index) => index !== id));
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
    { title: "Pearl", stack: "Pearl" },
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

  // const onChange = (e) => {
  //   const img = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", img);
  // };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div className="font-SUIT flex items-center justify-center py-5">
        <div className=" shadow-xl">
          <div className="ml-[20px]">
            <p className="w-[372px] mt-5 flex flex-wrap  md:flex-row items-center text-[24px] font-bold mb-10">
              <div className="mx-1 flex title-font font-medium items-center  text-gray-900 md:mb-0">
                <img
                  className="w-[34px] h-[30px] mr-1"
                  src="img/heart.png "
                  alt="logo"
                />
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
              {/* {file.map((image, id) => (
                <div key={id}>
                  <img
                    className="w-[90px] h-[90px] flex relative"
                    src={image}
                    alt={`${image}-${id}`}
                  />
                  <button
                    className=" absolute "
                    onClick={() => handleDeleteImage(id)}
                  >
                    <img src="img/delete_pic.png" className=" " alt="delete" />
                  </button>
                </div>
              ))} */}
              <label htmlFor="profile-upload">
                <input
                  multiple
                  className=""
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  onChange={onChangeImg}
                />
                <img
                  className="w-[90px] h-[90px] m-1 cursor-pointer"
                  src="img/photo_add.png "
                  alt="logo"
                />
              </label>
              <hr className="w-[350px] h-0.5 bg-[#D9D9D9] rounded-3xl my-6"></hr>
              <div className="mx-auto flex flex-wrap  items-center mt-3 mb-1">
                <div className="mr-1 font-bold text-sm">성별</div>
                <div className="text-xs text-[#FF4E4E]">
                  (※프로필에 표시되는 성별로, 이후 변경할 수 없습니다.)
                </div>
              </div>
              <select
                value={gender}
                onChange={onChangeGender}
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
              <div className="text-xs p-1"></div>
              <div className="mx-auto  items-center flex mt-3 mb-1">
                <div className="mr-1 font-bold text-sm">닉네임</div>
                <div className="text-xs text-[#FF4E4E]">
                  (※프로필에 표시되는 닉네임으로, 이후 변경할 수 없습니다.)
                </div>
              </div>
              <div className="grid">
                <input
                  className=" w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E]  text-xs"
                  placeholder="본명 또는 닉네임을 입력해주세요."
                  value={username}
                  onChange={onChangeName}
                ></input>
                <div className="text-xs p-1">
                  {username.length > 0 && (
                    <span className={`message ${isName ? "success" : "error"}`}>
                      {nameMessage}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="mx-auto items-center mt-3">
                  <div className="mr-1 font-bold text-sm">나이</div>
                  <input
                    value={age}
                    onChange={onChangeAge}
                    placeholder="나이 입력"
                    className=" w-[350px] h-[40px] rounded-lg bg-neutral-200 outline-1 p-2 focus:outline-[#28CC9E] text-xs mt-0.5 "
                  ></input>
                </div>
                <div className="text-xs p-1">
                  {age.length > 0 && (
                    <span className={`message ${isAge ? "success" : "error"}`}>
                      {ageMessage}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="mx-auto flex flex-wrap md:flex-row  mt-3 mb-1">
                    <div className="mr-1 font-bold text-sm">학력</div>
                  </div>
                  <select
                    value={education}
                    onChange={onChangeEducation}
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
                onChange={onChangeJob}
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
                onChange={onChangeLink}
                className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E] text-xs"
                placeholder="링크 주소를 입력해주세요."
              ></input>

              <div className="mx-auto flex flex-wrap md:flex-row items-center mt-3 mb-1">
                <div className="mr-1 font-bold text-sm">거주지</div>
              </div>
              <div className="mx-auto flex flex-wrap  md:flex-row items-center">
                <select
                  value={residence}
                  onChange={onChangeResidence}
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
              <div className="mt-6 mx-auto flex flex-wrap md:flex-row items-center mb-1">
                <div className="mr-1 font-bold text-sm">한 줄 소개</div>
              </div>
              <div className="grid">
                <input
                  value={introduction}
                  onChange={onChangeIntro}
                  className="w-[350px] h-[40px] rounded-md  bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E] text-xs"
                  placeholder="자신에 대해 간단히 소개해주세요~"
                ></input>
                <div className="text-xs p-1">
                  {introduction.length > 0 && (
                    <span
                      className={`message ${isIntro ? "success" : "error"}`}
                    >
                      {introMessage}
                    </span>
                  )}
                </div>
              </div>
              <hr className="w-[350px] h-0.5 bg-gray-200 rounded-3xl my-6"></hr>
              <div className="mt-2 mx-auto flex flex-wrap md:flex-row items-center mb-4">
                <div className="mr-1 font-bold text-sm">선호 기술스택</div>
                <div className="text-xs text-[#FF4E4E]">
                  (※최대 3개까지 선택)
                </div>
              </div>
              <ul className="flex text-[#555] left-5 text-xs flex-wrap w-[350px]">
                {datas.map((data, index) => (
                  <StackCard
                    key={index}
                    data={data.title}
                    checkedItem={checkedItems}
                    checkedItemHandler={checkedItemHandler}
                  />
                ))}
              </ul>
            </form>

            <button
              className="disabled:bg-[#a09e9e] text-[16px] rounded-lg bg-[#28CC9E] text-white  w-[350px] h-[40px] font-bold mt-10 mb-[120px]"
              onClick={onSubmitHandler}
              disabled={
                !(
                  isName &&
                  isIntro &&
                  isGender &&
                  isAge &&
                  isEducation &&
                  isJob &&
                  isResidence &&
                  isLink
                )
              }
            >
              설정 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
