export const MypageMain = () => {
  return (
    <div>
      <p className="w-[390px] mx-auto flex  text-3xl font-bold mb-7 pt-10 pl-5">
        <div className="mx-1 flex title-font font-medium items-center  text-gray-900 md:mb-0">
          <img class="" src="img/heart.png " alt="logo" />
        </div>
        내 프로필
      </p>
      <div className="flex items-center justify-center">
        <div className="p-2 flex">
          <img
            className="w-[90px] h-[90px] rounded-full"
            src="img/gyumin.png "
            alt="profilePhoto"
          />
          <div>
            <div className="mx-auto flex items-center  text-2xl pl-2 pt-3 md:flex-row">
              <div className="mr-1 font-bold pr-1">정규민</div>
              <div>29</div>
            </div>
            <span className="pl-2 pt-1 text-sm">
              프리랜서 개발자 ∙ 서울특별시 강서구
            </span>
          </div>
        </div>
      </div>
      <button className="mx-auto group relative flex justify-center items-center text-sm rounded-lg bg-[#28CC9E] text-white w-[350px] h-[40px] font-bold mt-5 mb-20">
        정보 수정하기
      </button>
    </div>
  );
};

export default MypageMain;
