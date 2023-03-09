import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  XMarkIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { Project } from '../typings';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  selectedProject: Project[];
};

export default function ModalWindow({
  isOpen,
  closeModal,
  selectedProject,
}: Props) {
  return (
    <div>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md sm:max-w-xl md:max-w-2xl transform overflow-hidden rounded-2xl bg-white px-6 sm:px-10 py-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-[#0e7994] flex justify-between"
                  >
                    ~{selectedProject[0]?.title}~
                    <div onClick={closeModal}>
                      <XMarkIcon className="h-6 w-6 cursor-pointer text-gray hover:bg-[#0e7994] rounded-full hover:text-white -translate-y-4 translate-x-3" />
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 text-justify">
                      {selectedProject[0]?.summary}
                    </p>
                  </div>
                  <div className="flex justify-between px-5">
                    <motion.div
                      initial={{ x: 0, opacity: 0, scale: 0.5 }}
                      animate={{ x: -30, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.9 }}
                      className="flex justify-center items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.9 }}
                      >
                        <SocialIcon
                          url={selectedProject[0]?.linkToGit}
                          target="_blank"
                          fgColor="gray"
                          bgColor="transparent"
                          className="animate-pulse"
                        />
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 1.2 }}
                        className="hidden sm:block"
                      >
                        <ArrowLongLeftIcon className="h-5 w-5 cursor-pointer text-[#0e7994]" />
                      </motion.span>
                      <motion.p
                        initial={{ x: -4, opacity: 0 }}
                        animate={{ x: 10, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.9 }}
                        className="text-sm sm:text-lg text-[#0e7994] flex"
                      >
                        Repository
                      </motion.p>
                    </motion.div>
                    <motion.div
                      initial={{ x: 0, opacity: 0, scale: 0.5 }}
                      animate={{ x: 30, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.9 }}
                      className="flex justify-center items-center"
                    >
                      <motion.p
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: -4, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.9 }}
                        className="text-sm sm:text-lg text-[#0e7994]"
                      >
                        Web site
                      </motion.p>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 1.2 }}
                        className="hidden sm:block"
                      >
                        <ArrowLongRightIcon className="h-5 w-5 cursor-pointer text-[#0e7994]" />
                      </motion.span>
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.9 }}
                      >
                        <SocialIcon
                          url={selectedProject[0]?.linkToBuild}
                          target="_blank"
                          fgColor="gray"
                          bgColor="transparent"
                          className="animate-pulse"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
