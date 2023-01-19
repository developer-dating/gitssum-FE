export const Profile = () => {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="ml-8">
        <p className="mx-auto mt-5 flex flex-wrap  md:flex-row items-center text-3xl font-bold mb-10">
          <div className="mx-1 flex title-font font-medium items-center  text-gray-900 md:mb-0">
            <img class="" src="img/heart.png " alt="logo" />
          </div>
          내 프로필 설정
        </p>
        <form>
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
          <hr className="w-[350px] h-0.5 bg-[#D9D9D9] rounded-3xl my-6"></hr>
          <div className="mx-auto flex flex-wrap  items-center mt-3 mb-1">
            <div className="mr-1 font-bold text-sm">성별</div>
            <div className="text-xs text-[#FF4E4E]">
              (※프로필에 표시되는 성별로, 이후 변경할 수 없습니다.)
            </div>
          </div>
          <select
            className=" w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-1.5 br-8 focus:outline-[#28CC9E] text-xs"
            name="성별 선택"
          >
            <option className="rounded-md" value="" disabled selected hidden>
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
          ></input>
          <div>
            <div className="mx-auto items-center mt-3">
              <div className="mr-1 font-bold text-sm">나이</div>
              <input
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
            className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 focus:outline-[#28CC9E] text-xs p-1.5"
            name="직업 선택"
          >
            <option className="rounded-md" value="" disabled selected hidden>
              직업 선택
            </option>
            <option value="프론트">프론트</option>
          </select>
          <div className="mx-auto flex flex-wrap md:flex-row items-center mt-3 mb-1">
            <div className="mr-1 font-bold text-sm">깃헙/블로그 링크</div>
          </div>
          <input
            className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1 p-2 br-8 focus:outline-[#28CC9E] text-xs"
            placeholder="링크 주소를 입력해주세요."
          ></input>
          <div className="mx-auto flex flex-wrap md:flex-row items-center mt-3 mb-1">
            <div className="mr-1 font-bold text-sm">거주지</div>
          </div>
          <div className="mx-auto flex flex-wrap  md:flex-row items-center">
            <select
              className="w-[350px] h-[40px] rounded-md bg-neutral-200 outline-1   focus:outline-[#28CC9E] text-xs p-1.5"
              name="지역 선택"
            >
              <option className="rounded-md" value="" disabled selected hidden>
                거주지 선택
              </option>
              <option value="서울">서울</option>
            </select>
          </div>
          <div className="mt-6 mx-auto flex flex-wrap md:flex-row items-center mb-1">
            <div className="mr-1 font-bold text-sm">한 줄 소개</div>
          </div>
          <input
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

          <button className=" text-sm rounded-lg bg-[#28CC9E] text-white w-[350px] h-[40px] font-bold mt-10 mb-20">
            설정 완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
