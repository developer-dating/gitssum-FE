function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="font-SUIT rounded-xl bg-white w-[333px] h-[371px] absolute top-[50%] left-[50%] translate-x-[-84%] translate-y-[-85%]">
      <hr className="mx-auto w-[40px] h-[6px] bg-[#D9D9D9] rounded-3xl mt-3 mb-8"></hr>
      <img
        className="w-[96px] h-[96px] mr-2 rounded-full ml-[120px] my-2 mt-3"
        src="img/gyumin.png "
        alt="profilePhoto"
      />
      <p className=" mx-auto justify-center flex items-center mb-5 text-[16px] font-bold">
        정규민
      </p>
      <p className=" font-bold ml-6 text-[20px]">좋아요를 보내시겠어요?</p>
      <button className="mx-auto relative flex justify-center items-center text-[16px] rounded-lg bg-[#28CC9E] text-white w-[290px] h-[48px]  mt-3 ">
        좋아요
      </button>
      <button
        className="mx-auto flex justify-center items-center text-[16px] rounded-lg  w-[290px] h-[48px] mt-2"
        onClick={closeModal}
      >
        다음에 할게요
      </button>
      <hr className="mx-auto w-[134px] h-[5px] bg-[#000000] rounded-3xl mt-3"></hr>
    </div>
  );
}
export default ModalBasic;
