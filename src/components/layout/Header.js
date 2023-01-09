import React, { useState } from "react";
import { Images } from "../../assets";
import Modal from "react-modal";

const list = [
  {
    id: 1,
    link: "#home",
    icon: Images.HOME,
    name: "Home",
  },
  {
    id: 2,
    link: "#about",
    icon: Images.ABOUT,
    name: "About",
  },
  {
    id: 3,
    link: "#skills",
    icon: Images.SKILLS,
    name: "Skills",
  },
  {
    id: 4,
    link: "#qualification",
    icon: Images.QUALIFICATION,
    name: "Qualification",
  },
  {
    id: 5,
    link: "/",
    icon: Images.PROJECT,
    name: "Projects",
  },
  {
    id: 6,
    link: "/",
    icon: Images.SEND,
    name: "Contact",
  },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="desktop:page-container desktop:px-0 py-5 px-4 w-full flex justify-between items-center fixed top-0 left-0 right-0 z-10 bg-black">
      <div>
        <h1 className="text-2xl">Kevin</h1>
      </div>
      <div className="flex items-center gap-10 mobile:hidden">
        {list.map((item) => (
          <button id={item.id}>
            <a href={item.link}>{item.name}</a>
          </button>
        ))}
      </div>
      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="desktop:hidden laptop:hidden tablet:hidden"
      >
        <img src={Images.MENU} className="w-8" />
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="absolute top-0 left-0 bottom-0 right-0 transition-all"
      >
        <div className="bg-black absolute bottom-0 left-0 right-0 rounded-t-2xl">
          <div className="grid grid-cols-3">
            {list.map((item) => (
              <button
                id={item.id}
                className="px-4 py-6 flex flex-col items-center gap-1 justify-center"
                onClick={closeModal}
              >
                <img src={item.icon} className="w-8 h-8" />
                <a href={item.link}>{item.name}</a>
              </button>
            ))}
          </div>
          <button className="float-right mr-4 mb-4" onClick={closeModal}>
            <img src={Images.CLOSE} className="w-12" />
          </button>
        </div>
      </Modal>
    </div>
  );
}
