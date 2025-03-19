'use client';;
import { use } from "react";
import Frame from '@/src/components/atoms/Frame';
import Modal from '@/src/components/atoms/Modal';
import swagPhotos, { Photo } from '@/photos';

export default function PhotoModal(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = use(props.params);

  const {
    id: photoId
  } = params;

  const photos = swagPhotos;
  const photo: Photo = photos.find((p) => p.id === photoId)!;

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
