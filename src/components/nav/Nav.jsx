const Nav = () => {
  return (
    // <>
    //   <div className="flex items-center justify-cente">
    //     <div className="w-[78px] h-[95px] bg-[#000]"></div>
    //   </div>
    // </>
    <div className="flex items-center justify-center">
      <div className="fixed bottom-0">
        <div className="w-[390px] h-[95px] bg-[#fff]">
          <div className="flex flex-row">
            <a
              href="/"
              className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium"
            >
              홈
            </a>
            <a
              href="/recommend"
              className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium"
            >
              추천
            </a>
            <div className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium flex-col">
              <img
                src="/img/navheartlogo.png"
                alt="HeartLogo"
                className="mb-1"
              />
              <p className="mb-5">좋아요</p>
            </div>
            <div className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium flex-col">
              <img src="/img/navmsglogo1.png" alt="MsgLogo" className="mb-1" />
              <p className="mb-5">메세지</p>
            </div>
            <div className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium">
              설정
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
