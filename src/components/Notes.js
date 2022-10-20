import React, { useState, useEffect } from "react";
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
import { RiDeleteBin6Line } from "react-icons/ri";

const Notes = () => {
  const [modal, setModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [titlee, setTitle] = useState("");
  const [notess, setNotes] = useState("");
  const [idd, setIdd] = useState("");
  const [img, setImg] = useState("")

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let resultt = JSON.parse(retrievedObject);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(
      `http://127.0.0.1:8000/api/search/${resultt.email}`
    );
    setBooks(result.data.notes);
  };

  const handleClick = (title, notes, id, image) => {
    setModal(true);

    console.log("====================================");
    console.log(title, notes, id);
    console.log("====================================");

    setTitle(title);
    setNotes(notes);
    setIdd(id);
    setImg(image)
  };

  const handleSubmit = () => {
    const article = {
      title: titlee,
      notes: notess,
      name: resultt.displayName,
      email: resultt.email,
    };
    axios
      .post(`http://127.0.0.1:8000/api/editnote/${idd}`, article)
      .then((res) => {
        console.log("====================================");
        console.log(res);
        console.log("====================================");
      })
      .catch((err) => alert("File Upload Error"));
    setModal(false);
    loadStudent();
  };

  const handleDelete = (id) => {
    console.log("====================================");
    console.log(id);
    console.log("====================================");

    axios
      .delete(`http://127.0.0.1:8000/api/notes/${id}`)
      .then(function () {
        setModal(false);
        loadStudent();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {books ? (
        <>
          <>
            {modal ? (
              <div className="">
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-16 mx-auto max-w-3xl">
                      <div className="bg-[#202124] rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none border-[1px] p-3 border-[rgba(241,243,244,0.7)] ">
                        <img
                          src={img}
                          className="rounded-2xl max-h-80 object-contain"
                          alt="note"
                        />

                        <input
                          value={titlee}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          className="bg-transparent mt-4 placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold font-semibold outline-none"
                          type="text"
                          placeholder="Notes"
                        />

                        <textarea
                          value={notess}
                          onChange={(e) => {
                            setNotes(e.target.value);
                          }}
                          className="h-24 bg-transparent placeholder:text-[rgba(241,243,244,0.7)] font-normal text-sm mt-4 outline-none"
                          type="text"
                          placeholder="Take a note..."
                        />

                        <div className="flex justify-between items-center gap-4 p-6">
                          <div className="flex gap-4">
                            <IconContext.Provider
                              value={{ color: "rgba(241,243,244,0.7)" }}
                            >
                              <MdOutlineNotificationImportant size={20} />
                              <MdPersonAddAlt size={20} />
                              <IoColorPaletteOutline size={20} />
                              <HiOutlinePhotograph size={20} />
                              <RiInboxArchiveLine size={20} />
                              <button
                                onClick={(e) => {
                                  handleDelete(idd);
                                }}
                              >
                                <RiDeleteBin6Line size={20} />
                              </button>
                              <RiArrowGoBackFill size={20} />
                              <RiArrowGoForwardFill size={20} />
                            </IconContext.Provider>
                          </div>

                          <div className="flex gap-4">
                            <button onClick={() => handleSubmit()}>Save</button>
                            <button onClick={() => setModal(false)}>
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            ) : (
              <>
                {books.map((element) => {
                  const { title, notes, id, image } = element;
                  return (
                    <div onClick={() => handleClick(title, notes, id, image)}>
                      <div className="bg-[#202124]  cursor-pointer rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none border-[1px] p-3 border-[rgba(241,243,244,0.7)] ">
                        <img
                          src={image}
                          className="rounded-2xl max-h-80 object-contain"
                          alt="note"
                        />
                        <p className="bg-transparent placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold outline-none">
                          {title}
                        </p>
                        <p className="bg-transparent cursor-pointer pb-6 placeholder:text-[rgba(241,243,244,0.7)] font-normal text-sm outline-none mt-4z">
                          {notes}
                        </p>
                        <div className="absolute min-h-full bottom-1 flex justify-between items-end gap-4 opacity-0 hover:opacity-100">
                          <IconContext.Provider
                            value={{ color: "rgba(241,243,244,0.7)" }}
                          >
                            <MdOutlineNotificationImportant size={20} />
                            <MdPersonAddAlt size={20} />
                            <IoColorPaletteOutline size={20} />
                            <HiOutlinePhotograph size={20} />
                            <RiInboxArchiveLine size={20} />
                            <RiDeleteBin6Line size={20} />
                          </IconContext.Provider>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Notes;
