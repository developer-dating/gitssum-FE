import { Link } from "react-router-dom";

const Nav = () => {
  return (
    // <>
    //   <div className="flex items-center justify-cente">
    //     <div className="w-[78px] h-[95px] bg-[#000]"></div>
    //   </div>
    // </>
    <div className="font-SUIT flex items-center justify-center">
      <div className="fixed bottom-0">
        <div className="w-[390px] h-[95px] bg-[#fff]">
          <div className="flex flex-row">
            <a
              href="/"
              className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium flex-col"
            >
              <img
                src={
                  window.location.pathname === "/"
                    ? "/img/home_green.png"
                    : "/img/homeicon.png"
                }
                alt="HomeLogo"
                className="mb-1"
              />
              <p className="mb-5">홈</p>
            </a>
            <Link
              to="/recommend"
              className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium flex-col"
            >
              <img
                src={
                  window.location.pathname === "/recommend"
                    ? "/img/rec_green.png"
                    : "/img/recomendicon.png"
                }
                alt="RecomendLogo"
                className="mb-1"
              />
              <p className="mb-5">추천</p>
            </Link>
            <Link
              to="/likeme"
              className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium flex-col"
            >
              <img
                src={
                  window.location.pathname === "/likeme"
                    ? "/img/like_green.png"
                    : "/img/likeicon.png"
                }
                alt="LikeLogo"
                className="mb-1"
              />
              <p className="mb-5">좋아요</p>
            </Link>
            <a
              href="/message"
              className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium flex-col"
            >
              <img
                src={
                  window.location.pathname === "/message"
                    ? "/img/message_green.png"
                    : "/img/messegeicon.png"
                }
                alt="MsgLogo"
                className="mb-1"
              />
              <p className="mb-5">메세지</p>
            </a>
            <a
              href="/mypage"
              className="w-[78px] h-[95px] flex items-center justify-center cursor-pointer hover:bg-[#e3dfddd2] duration-300 text-sm font-medium flex-col"
            >
              <img
                src={
                  window.location.pathname === "/mypage"
                    ? "/img/setting_green.png"
                    : "/img/mypageicon.png"
                }
                alt="MyPageLogo"
                className="mb-1"
              />
              <p className="mb-5">설정</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
