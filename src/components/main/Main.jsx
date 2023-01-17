const Main = () => {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="ml-8">
        <div className="mt-6 flex relative">
          <img
            src="./img/homelogo.png"
            alt="HomeLogo"
            className="w-24 h-8 ml-3"
          />
          <div className="w-21 h-9 bg-[#28CC9E] absolute right-12 rounded-full flex items-center justify-center p-4  text-center text-[#fff] cursor-pointer">
            리스트 보기
          </div>
        </div>
        <div className="w-96 flex flex-wrap reletive">
          <div
            className="w-[350px] h-[572px] mt-10 bg-contain bg-no-repeat relative mr-7 cursor-pointer hover:scale-110 duration-300"
            style={{ backgroundImage: `url(/img/person1.png)` }}
          >
            <div className="flex text-[#fff] absolute bottom-48 left-5 space-x-[177px]">
              <div className="flex space-x-2">
                <p className="text-2xl font-bold ml-2">정현규</p>
                <p className="text-xl flex items-center justify-center">26</p>
              </div>
              <img
                src="./img/detailicon.png"
                alt="DetailIcon"
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            <div className="flex text-[#fff] absolute bottom-40 left-5 space-x-2 text-sm">
              <p className="ml-2">프리랜서 개발자</p>
              <p className="mr-2 ml-2 ">.</p>
              <p>서울특별시 강서구</p>
            </div>
            <div className="flex text-[#fff] absolute bottom-28 left-5 space-x-2 text-xs">
              <p className="ml-2 bg-[#000]/[.3] px-3 py-2 rounded-full">C</p>
              <p className="bg-[#000]/[.3] px-3 py-2 rounded-full">Java</p>
              <p className="bg-[#000]/[.3] px-3 py-2 rounded-full">C++</p>
              <p className="bg-[#000]/[.3] px-3 py-2 rounded-full">C#</p>
            </div>
            <div className="flex absolute bottom-9 left-5 space-x-[180px] ml-2 mb-2">
              <div className="bg-[#fff] w-14 h-14 rounded-full flex items-center justify-between">
                <img
                  src="./img/msgicon1.png"
                  alt="HomeLogo"
                  className="w-8 h-7 ml-3"
                />
              </div>

              <div className="bg-[#fff] w-14 h-14 rounded-full flex items-center justify-between">
                <img
                  src="./img/hearticon1.png"
                  alt="HomeLogo"
                  className="w-8 h-7 ml-3"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[350px] h-[572px] mt-10 bg-contain bg-no-repeat relative mr-7 cursor-pointer hover:scale-110 duration-300"
            style={{ backgroundImage: `url(/img/person1.png)` }}
          >
            <div className="flex text-[#fff] absolute bottom-48 left-5 space-x-[177px]">
              <div className="flex space-x-2">
                <p className="text-2xl font-bold ml-2">정현규</p>
                <p className="text-xl flex items-center justify-center">26</p>
              </div>
              <img
                src="./img/detailicon.png"
                alt="DetailIcon"
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            <div className="flex text-[#fff] absolute bottom-40 left-5 space-x-2 text-sm">
              <p className="ml-2">프리랜서 개발자</p>
              <p className="mr-2 ml-2 ">.</p>
              <p>서울특별시 강서구</p>
            </div>
            <div className="flex text-[#fff] absolute bottom-28 left-5 space-x-2 text-xs">
              <p className="ml-2 bg-[#000]/[.3] px-3 py-2 rounded-full">C</p>
              <p className="bg-[#000]/[.3] px-3 py-2 rounded-full">Java</p>
              <p className="bg-[#000]/[.3] px-3 py-2 rounded-full">C++</p>
              <p className="bg-[#000]/[.3] px-3 py-2 rounded-full">C#</p>
            </div>
            <div className="flex absolute bottom-9 left-5 space-x-[180px] ml-2 mb-2">
              <div className="bg-[#fff] w-14 h-14 rounded-full flex items-center justify-between">
                <img
                  src="./img/msgicon1.png"
                  alt="HomeLogo"
                  className="w-8 h-7 ml-3"
                />
              </div>

              <div className="bg-[#fff] w-14 h-14 rounded-full flex items-center justify-between">
                <img
                  src="./img/hearticon1.png"
                  alt="HomeLogo"
                  className="w-8 h-7 ml-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
