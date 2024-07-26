"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, isOpen, onClose }) => {
  if (!src) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-96 w-96">
        <Image alt="Image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
