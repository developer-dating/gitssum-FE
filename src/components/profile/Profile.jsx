import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { useNavigate, useParams } from "react-router-dom";
import StackCard from "../recommend/StackCard";

export default function Profile() {
  const { id } = useParams();

  const mutation = useMutation((prof) => {
    return (
      axios.post(`http://localhost:4000/posts`, prof), alert("프로필 설정 성공")
    );
  });

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
  const [showImages, setShowImages] = useState([]);

  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
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
          <div className="font-SUIT flex items-center justify-center py-5">
            <div className="ml-8">
              <p className="mx-auto mt-5 flex flex-wrap  md:flex-row items-center text-3xl font-bold mb-10">
                <div className="mx-1 flex title-font font-medium items-center  text-gray-900 md:mb-0">
                  <img className="pr-1" src="img/heart.png " alt="logo" />
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
                <div className="inline-grid grid-cols-3 w-[350px]">
                  {showImages.map((image, id) => (
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
                        <img
                          src="img/delete_pic.png"
                          className=" "
                          alt="delete"
                        />
                      </button>
                    </div>
                  ))}
                  <label htmlFor="input-file" onChange={handleAddImages}>
                    <input
                      className="hidden"
                      type="file"
                      id="input-file"
                      multiple
                    />

                    <img
                      className="w-[90px] h-[90px] m-1 cursor-pointer"
                      src="img/photo_add.png "
                      alt="logo"
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
                  className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-1.5 br-8 focus:outline-[#28CC9E] text-xs"
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
                <input
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  className="w-[350px] h-[40px] rounded-md mb-3 bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E] text-xs"
                  placeholder="자신에 대해 간단히 소개해주세요~"
                ></input>
                <hr className="w-[350px] h-0.5 bg-gray-200 rounded-3xl my-6"></hr>
                <div className="mt-2 mx-auto flex flex-wrap md:flex-row items-center mb-4">
                  <div className="mr-1 font-bold text-sm">선호 기술스택</div>
                  <div className="text-xs text-[#FF4E4E]">
                    (※최대 5개까지 선택)
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
                      home: residence,
                      stack: checkedItems,
                      imageList: showImages,
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
