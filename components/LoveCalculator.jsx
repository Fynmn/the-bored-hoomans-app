import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function LoveCalculator() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center"> */}
      <button onClick={() => {}}>
        <div className="cursor-pointer group-hover:blur-sm group-hover:scale-[0.85] hover:!scale-[0.85] hover:!blur-sm bg-slate-700 p-8 rounded-xl m-4 active:bg-slate-500 border-4 border-transparent opacity-30 transition ease-out">
          <div className="cursor-pointer h-24 max-h-24 w-24 flex flex-col justify-center items-center text-center space-y-4">
            <h4 className="cursor-pointer text-4xl">😍</h4>
            <h3 className="cursor-pointer text-l font-bold text-indigo-100">
              Love Calculator
            </h3>
          </div>
        </div>
      </button>
      {/* </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="opacity-30 fixed inset-0 z-0 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    // className="text-lg font-medium leading-6 text-gray-900"
                    className="text-3xl font-semibold"
                  >
                    😍Love Calculator
                  </Dialog.Title>
                  <div className="py-6">
                    {/* <p className="text-sm text-gray-500"> */}
                    <p className="text-slate-500 text-lg leading-relaxed">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end gap-x-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border-transparent px-4 py-2 text-lg font-semibold text-red-500 hover:border-red-500 border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-lg font-semibold text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      New Cat Fact
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
