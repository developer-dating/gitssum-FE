export const Detail = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <img className="w-[390px] h-[390px]" src="img/gyumin.png " alt="logo" />
        <div className="mx-auto flex items-center  text-2xl pl-2 pt-3 md:flex-row">
          <div className="mr-1 font-bold pr-1">정규민</div>
          <div>29</div>
        </div>
        <span className="pl-2 pt-1 text-sm">
          프리랜서 개발자 ∙ 서울특별시 강서구
        </span>
        <p className="mx-auto bg-[#EEEEEE] rounded-xl p-3 w-[350px] text-xs my-3">
          안녕하세요~~ 사진은 좀 이상합니다... 거주지는 강서구 까치산역입니다!
          대화 잘 통하는 여성분 찾아요.
        </p>
        <div className="mr-1 font-bold py-1 pl-2">기본 정보</div>
        <div className="flex justify-between px-2 py-1 text-sm">
          <span className="text-[#555555]">학력</span>
          <span className=" ">초대졸</span>
        </div>
        <div className="flex justify-between px-2 text-sm">
          <span className="text-[#555555]">깃헙/블로그링크</span>
          <span>gitssum.github.io</span>
        </div>
        <div className="mr-1 font-bold p-2">기술스택</div>
        <div className="pl-2 flex mb-3">
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
        <button className="mx-auto group relative flex justify-center items-center text-sm rounded-lg bg-[#28CC9E] text-white w-[350px] h-[40px] font-bold mt-8 mb-28">
          <img
            className="mr-2"
            src="./img/navheartlogo.png"
            alt="heartLogo"
          ></img>
          좋아요
        </button>
      </div>
    </div>
  );
};

export default Detail;
