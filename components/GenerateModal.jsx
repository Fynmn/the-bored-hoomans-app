/* eslint-disable */

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { FiPlusSquare as Add } from "react-icons/fi";

import DropdownPosition from "./DropdownPositions";
//api
import apiClient from "../../../src/services/apiclient";
import Router, { useRouter } from "next/router";
import { useAuthContext } from "../../../src/context/AuthContextProvider";

export default function GenerateModal({}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [password_confirmation, setpassword_confirmation] = useState();
  const router = useRouter();

  const { user, changeUserData } = useAuthContext();

  useEffect(() => {
    if (Object.entries(user).length != 0) router.push("manage");
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    apiClient.get("sanctum/csrf-cookie").then(() => {
      apiClientm
        .post("api/staffs", {
          email: email,
          name: name,
          password: password,
          password_confirmation: password_confirmation,
          role: 1,
        })
        .then((res) => {
          console.log("created", res);
          closeModal();
          router.reload();
        });
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-teal-500 flex flex-row justify-center items-center space-x-1 shadow-xl shadow-teal-500/50 p-2 px-4 rounded-lg"
      >
        <Add className="text-3xl text-white"></Add>
        <h1 className="text-white">Add ICER staff</h1>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=" h-full" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center p-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <form className="max-w-2xl w-full" onSubmit={handleRegister}>
                  <Dialog.Panel className="w-full p-8 lg:p-12 space-y-8 max-w-screen-md h-full flex flex-col items-start justify-start transform rounded-2xl bg-white align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex justify-center items-center w-full font-bold leading-6 "
                    >
                      <div>
                        <h1 className="text-2xl lg:text-2xl text-teal-500">
                          Add an ICER Staff
                        </h1>
                        <h2 className="text-xs font-normal text-gray-700">
                          Please enter the following data need to proceed.
                        </h2>
                      </div>
                    </Dialog.Title>

                    <h1 className="font-semibold">Enter the following data:</h1>

                    <div className="w-full flex flex-col items-center">
                      <div className="max-w-2xl w-full space-y-6  ">
                        <label class="block w-full">
                          <span class="block text-sm font-medium text-slate-700 text-left">
                            Name
                          </span>
                          <input
                            type="text"
                            name="text"
                            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Rose Shorts"
                            onChange={(e) => setname(e.target.value)}
                          />
                        </label>
                        <label class="block w-full">
                          <span class="block text-sm font-medium text-slate-700 text-left">
                            Email
                          </span>
                          <input
                            type="email"
                            name="email"
                            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="roseshorts@ichrs.com"
                            onChange={(e) => setemail(e.target.value)}
                          />
                        </label>
                        <label class="block w-full">
                          <span class="block text-sm font-medium text-slate-700 text-left">
                            Password
                          </span>
                          <input
                            type="password"
                            name="password"
                            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="**********"
                            onChange={(e) => setpassword(e.target.value)}
                          />
                        </label>
                        <label class="block w-full">
                          <span class="block text-sm font-medium text-slate-700 text-left">
                            Re-enter Password
                          </span>
                          <input
                            type="password"
                            name="password"
                            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="**********"
                            onChange={(e) =>
                              setpassword_confirmation(e.target.value)
                            }
                          />
                        </label>
                        <label class="block w-full">
                          <span class="block text-sm font-medium text-slate-700 text-left">
                            Position
                          </span>
                          <DropdownPosition></DropdownPosition>
                        </label>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end items-end w-full space-x-4">
                      <button
                        // type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <button
                        // type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}