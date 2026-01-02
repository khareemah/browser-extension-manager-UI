"use client";

import { Button } from "@/components/ui";
import { useState } from "react";
import extensions from "@/lib/data";
import ExtensionCard from "./ExtensionCard";
import { motion } from "motion/react";

export default function ExtensionList() {
  const [activeStatus, setActiveStatus] = useState("All");
  const [extensionsList, setExtensionsList] = useState(extensions);

  const handleRemoveExtension = (name: string) => {
    return setExtensionsList(
      extensionsList.filter((extension) => extension.name !== name)
    );
  };

  const handleStatusChange = (name: string) => {
    setExtensionsList(
      extensionsList.map((extension) => {
        if (extension.name === name) {
          return { ...extension, isActive: !extension.isActive };
        }
        return extension;
      })
    );
  };

  const filteredExtensions = extensionsList.filter((extension) =>
    activeStatus === "All"
      ? true
      : activeStatus === "Active"
        ? extension.isActive
        : !extension.isActive
  );

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-4 justify-center md:justify-between items-center">
        <h2 className="text-[#09153d] dark:text-[#f8fcfd] text-[28px] md:text-[36px] font-bold">
          Extensions List
        </h2>

        <div className="inline-flex justify-end items-center gap-6">
          {["All", "Active", "Inactive"].map((status) => (
            <Button
              key={status}
              variant="ghost"
              onClick={() => setActiveStatus(status)}
              className={`${
                status === activeStatus
                  ? "text-white dark:text-[#09153d] bg-[#c7221c]! border-[#a92f2c]"
                  : "hover:text-[#585f69] dark:hover:text-[#f8fcfd] hover:bg-[#f6fafd] dark:hover:bg-[#525868] bg-[#fcfdff] dark:bg-[#1f2535]  border-[#d9dfeb] dark:border-[#51566a]  "
              } cursor-pointer font-medium border rounded-[25px] h-11 leading-11 px-4.5 text-[16px]`}
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      <div className="w-full">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredExtensions.map((extension, index) => (
            <motion.div
              key={extension.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <ExtensionCard
                extension={extension}
                onRemoveExtension={handleRemoveExtension}
                onChangeStatus={handleStatusChange}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
