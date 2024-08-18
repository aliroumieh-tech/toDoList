import "../main.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { TasksContext } from "../App";

const TaskInput = () => {
  const [isHTMLToggled, setIsHTMLToggled] = useState(false);
  const [isCSSToggled, setIsCSSToggled] = useState(false);
  const [isJAVASCRIPTToggled, setIsJAVASCRIPTToggled] = useState(false);
  const [isREACTToggled, setIsREACTToggled] = useState(false);

  const { setInputValue, setlanguagesUsed, SetTaskState, addTask } =
    useContext(TasksContext);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Add Your Task"
        className="w-72 p-2.5 bg-slate-200 rounded focus:outline-none"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex mt-3">
        <div className="mr-16">
          <button
            className="mr-2 text-white bg-orange-400 p-2 rounded"
            onClick={() => {
              setIsHTMLToggled(!isHTMLToggled);

              setlanguagesUsed((prev: string[]) =>
                isHTMLToggled
                  ? [...prev].filter((item) => item !== "HTML")
                  : [...prev, "HTML"]
              );
            }}
          >
            HTML
          </button>
          <button
            className="mr-2 text-white bg-teal-500 p-2 rounded"
            onClick={() => {
              setIsCSSToggled(!isCSSToggled);

              setlanguagesUsed((prev: string[]) =>
                isCSSToggled
                  ? [...prev].filter((item) => item !== "CSS")
                  : [...prev, "CSS"]
              );
            }}
          >
            CSS
          </button>
          <button
            className="mr-2 text-white bg-gray-400 p-2 rounded"
            onClick={() => {
              setIsJAVASCRIPTToggled(!isJAVASCRIPTToggled);

              setlanguagesUsed((prev: string[]) =>
                isJAVASCRIPTToggled
                  ? [...prev].filter((item) => item !== "JAVASCRIPT")
                  : [...prev, "JAVASCRIPT"]
              );
            }}
          >
            JAVASCRIPT
          </button>
          <button
            className="mr-2 text-white bg-sky-500 p-2 rounded"
            onClick={() => {
              setIsREACTToggled(!isREACTToggled);

              setlanguagesUsed((prev: string[]) =>
                isREACTToggled
                  ? [...prev].filter((item) => item !== "REACT")
                  : [...prev, "REACT"]
              );
            }}
          >
            REACT
          </button>
        </div>
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Options
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    onClick={(e) => SetTaskState(e.currentTarget.innerHTML)}
                  >
                    To Do
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    onClick={(e) => SetTaskState(e.currentTarget.innerHTML)}
                  >
                    Doing
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    onClick={(e) => SetTaskState(e.currentTarget.innerHTML)}
                  >
                    Done
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <button
          className="px-3 py-1 bg-sky-600 text-white ml-1.5 rounded"
          onClick={() => addTask()}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
