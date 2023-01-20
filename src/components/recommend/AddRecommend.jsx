import React, { useState } from "react";

const AddRecommend = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const datas = [
    { title: "Python", content: "Python" },
    { title: "C", content: "C" },
    { title: "C++", content: "C++" },
    { title: "C#", content: "C#" },
    { title: "Java", content: "Java" },
    { title: "React", content: "React" },
    { title: "JavaScript", content: "JavaScript" },
    { title: "Assembly language", content: "Assembly language" },
    { title: "SQL", content: "SQL" },
    { title: "PHP", content: "PHP" },
    { title: "Object-C", content: "Object-C" },
    { title: "GO", content: "GO" },
    { title: "Delphi/Objective Pascal", content: "Delphi/Objective Pascal" },
    { title: "MATLAB", content: "MATLAB" },
    { title: "Fortran", content: "Fortran" },
    { title: "R", content: "R" },
    { title: "Perl", content: "Perl" },
    { title: "Ruby", content: "Ruby" },
    { title: "Classic Visual Basic", content: "Classic Visual Basic" },
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
    <div className="flex items-center justify-center py-5">
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
            <p className="text-[#333] text-xl font-bold mt-[40px]">지역 설정</p>
            <p className="text-[#333] text-[12px] font-normal mt-[8px]">
              지역은 구 단위로 최소 1개 이상 최대 2개까지 설정할 수 있어요
            </p>

            <div className="space-x-[10px]">
              <select
                type="text"
                className="w-[170px] h-[40px] border border-[#28CC9E] rounded-[8px] mt-8 text-[#28CC9E] font-[14px] text-center"
              >
                <option>--- 지역 ---</option>
                <option value="서울특별시 강동구">서울특별시 강동구</option>
                <option value="서울특별시 강남구">서울특별시 강남구</option>
                <option value="서울특별시 강북구">서울특별시 강북구</option>
                <option value="서울특별시 강서구">서울특별시 강서구</option>
                <option value="서울특별시 송파구">서울특별시 송파구</option>
                <option value="서울특별시 은평구">서울특별시 은평구</option>
                <option value="서울특별시 서대문구">서울특별시 서대문구</option>
                <option value="서울특별시 서초구">서울특별시 서초구</option>
              </select>
              <select
                type="text"
                className="w-[170px] h-[40px] border border-[#28CC9E] rounded-[8px] mt-8 text-[#28CC9E] font-[14px] text-center"
              >
                <option>--- 지역 ---</option>
                <option value="서울특별시 강동구">서울특별시 강동구</option>
                <option value="서울특별시 강남구">서울특별시 강남구</option>
                <option value="서울특별시 강북구">서울특별시 강북구</option>
                <option value="서울특별시 강서구">서울특별시 강서구</option>
                <option value="서울특별시 송파구">서울특별시 송파구</option>
                <option value="서울특별시 은평구">서울특별시 은평구</option>
                <option value="서울특별시 서대문구">서울특별시 서대문구</option>
                <option value="서울특별시 서초구">서울특별시 서초구</option>
              </select>
            </div>
            <p className="text-[#333] text-xl font-bold mt-[40px]">나이 설정</p>
            <div className="text-[#555] font[14px]">
              <input
                type="text"
                className="w-[350px] h-[40px] bg-[#eee] rounded-[8px] mt-[8px] pl-2"
                placeholder="나이 입력"
              />
            </div>
            <p className="text-[#333] text-xl font-bold mt-[40px]">
              선호 기술스택
            </p>
            <p className="text-[#333] text-[12px] font-normal mt-[8px]">
              선호 개발 언어를 5개 미만으로 선택해주세요.
            </p>
            <div>
              <div className="flex text-[#555] left-5 text-xs flex-wrap">
                {datas.map((item) => (
                  <p
                    key={item.title}
                    className=" bg-[#eee]/[.3] px-3 py-2 mr-2 rounded-full mt-2"
                  >
                    {item.title}
                  </p>
                ))}
              </div>
              <button className="flex w-[350px] h-[48px] justify-center items-center rounded-md border hover:border-[#28CC9E] text-[#fff] font-bold bg-[#28CC9E] hover:bg-[#fff] hover:text-[#28CC9E] duration-300 mt-[80px]">
                <p>취향 설정하기</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecommend;
