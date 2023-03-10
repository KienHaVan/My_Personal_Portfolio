import React, { useState } from "react";
import { Images } from "../../assets";
import Modal from "react-modal";

export default function Header({ list }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleNavigate = (section) => {
    let el = section.ref.current;

    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: el.offsetTop,
    });
  };
  const handleMobileScroll = (item) => {
    handleNavigate(item);
    closeModal();
  };
  return (
    <div className="desktop:page-container desktop:px-0 py-5 px-4 w-full flex justify-between items-center fixed top-0 left-0 right-0 z-10 bg-black ">
      <div>
        <h1
          className="text-2xl cursor-pointer"
          onClick={() => handleNavigate(list[0])}
        >
          Kevin Tech
        </h1>
      </div>
      <div className="flex items-center gap-10 mobile:hidden">
        {list.map((item) => (
          <button key={item.id} onClick={() => handleNavigate(item)}>
            <div className="border-b-2 border-b-transparent hover:border-b-blue-500">
              {item.name}
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="desktop:hidden laptop:hidden tablet:hidden"
      >
        <img src={Images.MENU} className="w-8" alt="" />
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        className="absolute top-0 left-0 bottom-0 right-0 transition-all z-20"
      >
        <div className="bg-black absolute bottom-0 left-0 right-0 rounded-t-2xl">
          <div className="grid grid-cols-3">
            {list.map((item) => (
              <button
                id={item.id}
                className="px-4 py-6 flex flex-col items-center gap-1 justify-center"
                onClick={() => handleMobileScroll(item)}
                key={item.id}
              >
                <img src={item.icon} className="w-8 h-8" alt="" />
                <a>{item.name}</a>
              </button>
            ))}
          </div>
          <button className="float-right mr-4 mb-4" onClick={closeModal}>
            <img src={Images.CLOSE} className="w-12" alt="" />
          </button>
        </div>
      </Modal>
    </div>
  );
}
