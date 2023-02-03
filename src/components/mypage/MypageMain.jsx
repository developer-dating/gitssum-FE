import { Link } from "react-router-dom";

export const MypageMain = () => {
  return (
    <div className="shadow-xl w-[390px] h-[800px] mx-auto font-SUIT">
      <p className=" mx-auto flex  text-[24px] font-bold mb-2 pt-10 pl-4">
        <div className="mx-1 flex title-font font-medium items-center pr-1 text-gray-900 md:mb-0">
          <img className="w-[34px] h-[30px]" src="img/heart.png " alt="logo" />
        </div>
        내 프로필
      </p>
      <div className="flex justify-center pr-16 ml-4 items-center ">
        <div className="p-5 flex">
          <img
            className="w-[80px] h-[80px]  mr-2 rounded-xl"
            src="img/gyumin.png "
            alt="profilePhoto"
          />
          <div>
            <div className="mx-auto flex items-center pl-2 ">
              <div className="mr-1 font-bold text-[18px] pr-1">정규민</div>
              <div className="text-[16px]">29</div>
            </div>
            <span className="pl-2 text-[12px]">
              프리랜서 개발자 ∙ 서울특별시 강서구
            </span>
            <div className="text-[12px]">
              <div className="flex pl-1.5">
                <button className="bg-[#EEEEEE] px-2 py-0.5 mr-0.5 rounded-full">
                  Python
                </button>
                <button className="bg-[#EEEEEE] px-2 py-0.5 mr-0.5 rounded-full">
                  C
                </button>
                <button className="bg-[#EEEEEE] px-2 py-0.5 mr-0.5 rounded-full">
                  Java
                </button>
                <button className="bg-[#EEEEEE] px-2 py-0.5 mr-0.5 rounded-full">
                  C++
                </button>
                <button className="bg-[#EEEEEE] px-2 py-0.5 mr-0.5 rounded-full">
                  C#
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/editmyprofile" style={{ textDecoration: "none" }}>
        <button className="mx-auto font-bold group relative flex justify-center items-center text-[16px] rounded-lg bg-[#28CC9E] text-white w-[350px] h-[48px] hover:bg-[#fff] hover:text-[#28CC9E] border hover:border-[#28CC9E]  duration-300 mt-5 mb-20">
          정보 수정하기
        </button>{" "}
      </Link>
    </div>
  );
};

export default MypageMain;
