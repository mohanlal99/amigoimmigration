"use client"; // Ensure this is set for client-side rendering in Next.js

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Play } from "lucide-react";

const Video = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="relative py-2 md:py-6 lg:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            We are ready to help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for study abroad and immigration services.
            Watch our video to learn more about how we help students and
            professionals achieve their international dreams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              alt="Amigo Immigration Services"
              className="-z-10"
              src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1731653147/video_xtg9la.avif"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                isIconOnly
                aria-label="Play video"
                className="w-16 h-16 text-white bg-primary/80 hover:bg-primary rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
                onClick={onOpen}
              >
                <Play className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        scrollBehavior="inside"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className=" flex flex-col gap-1">
                Study Abroad Services
              </ModalHeader>
              <ModalBody className="p-0">
                <div className="relative aspect-video">
                  <iframe
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-full"
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src="https://www.youtube.com/embed/x-dALaLbTLk?si=90o6m496xQfxGJzr"
                    title="YouTube video player"
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="absolute inset-0 z-[-1] bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat opacity-10" />
    </section>
  );
};

export default Video;
