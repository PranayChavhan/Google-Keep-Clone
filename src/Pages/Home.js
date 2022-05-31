import React, { useState } from "react";
import axios from "axios";
import { IconContext } from "react-icons";
import { RiPushpin2Line } from "react-icons/ri";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import Notes from "../components/Notes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom"; 

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const Home = () => {
  let navigate = useNavigate();
  const [stateee, setStateee] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [noteImg, setNoteImg] = useState("");
  const filePickerRef = useRef(null);

  const addImageToPost = (e) => {
    setNoteImg(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let resultt = JSON.parse(retrievedObject);

  console.log("====================================");
  console.log(resultt.email);
  console.log("====================================");

  const baseURL = "http://127.0.0.1:8000/api/add";

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("notes", notes);
    formData.append("image", noteImg);
    formData.append("name", resultt.displayName);
    formData.append("email", resultt.email);

    console.log("====================================");
    console.log(formData);
    console.log("====================================");

    axios
      .post(baseURL, formData)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => alert("File Upload Error"));

    setStateee(false);
  };

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);

  console.log("====================================");
  console.log(result);
  console.log("====================================");


  return (
    <div className="bg-[#202124] min-h-screen text-[#e8eaed] font-sans font-medium">
      <TopBar />
      <div className="grid grid-cols-11 gap-4 pt-2">
        <div className="col-start-1 col-end-3">
          <SideBar />
        </div>
        
        <div className="col-start-3 col-end-12">
          <div>
           
            <div className="flex justify-center pt-5">
              {stateee ? (
                <div className="flex flex-col gap-5 border-[1px] w-[35rem] border-[rgba(241,243,244,0.7)] rounded-lg px-4 py-2">
                  {selectedFile && (
                    <div className="relative">
                      <div
                        onClick={() => setSelectedFile(null)}
                        className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                      >
                        <ImCancelCircle className="text-white h-5" />
                      </div>
                      <img
                        className="rounded-2xl max-h-80 object-contain"
                        src={selectedFile}
                        alt=""
                      />
                    </div>
                  )}
                  <div className="flex justify-between">
                    <input
                      value={title}
                      rows="3"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      className="bg-transparent placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold outline-none"
                      type="text"
                      placeholder="Title"
                    />
                    <IconContext.Provider
                      value={{ color: "rgba(241,243,244,0.7)" }}
                    >
                      <RiPushpin2Line size={20} />
                    </IconContext.Provider>
                  </div>
                  <textarea
                    value={notes}
                    rows="4"
                    onChange={(e) => {
                      setNotes(e.target.value);
                    }}
                    className="bg-transparent overflow-hidden placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold outline-none"
                    type="text"
                    placeholder="Take a note..."
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <IconContext.Provider
                        value={{ color: "rgba(241,243,244,0.7)" }}
                      >
                        <MdOutlineNotificationImportant size={20} />
                        <MdPersonAddAlt size={20} />
                        <IoColorPaletteOutline size={20} />
                        <div
                          onClick={() => filePickerRef.current.click()}
                          className="icon cursor-pointer"
                        >
                          <HiOutlinePhotograph size={20} />
                          <input
                            type="file"
                            hidden
                            onChange={addImageToPost}
                            ref={filePickerRef}
                          />
                        </div>

                        <RiInboxArchiveLine size={20} />
                        <BsThreeDotsVertical size={20} />
                        <RiArrowGoBackFill size={20} />
                        <RiArrowGoForwardFill size={20} />
                      </IconContext.Provider>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={handleSubmit}>Save</button>
                      <button
                        onClick={() => {
                          setStateee(false);
                          setTitle("");
                          setNotes("");
                          setSelectedFile("");
                          setNoteImg("");
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <input
                  onClick={() => {
                    setStateee(true);
                  }}
                  type="text"
                  className="bg-transparent border-[1px] h-10 w-[35rem] border-[rgba(241,243,244,0.7)] rounded-lg drop-shadow-2xl placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold pl-4"
                  placeholder="Take a note..."
                />
              )}
            </div>
            <div className="m-8">
              <div>
                <Notes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
