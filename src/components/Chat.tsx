"use client";
import React, { FC } from "react";
import { Accordion } from "./ui/accordion";
import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChatHeader } from "./ChatHeader";

export const Chat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-10 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 py-6 border-b border-zinc-300">
              <ChatHeader />
            </AccordionTrigger>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};
