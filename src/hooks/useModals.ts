import { useState } from "react";

type useModalProps = string[];
type ModalState = { [string: string]: { show: boolean } };

export function useModals(props: useModalProps) {
  const [modals, setModals] = useState<ModalState>(getModals(props));

  function toggleModal(key: string) {
    const m = { ...modals };
    m[key].show = !m[key].show;
    setModals({ ...m });
  }

  return {
    modals,
    toggleModal,
  };
}

function getModals(list: string[]) {
  const modalList: ModalState = {};
  list.map((li) => (modalList[li] = { show: false }));
  return modalList;
}
