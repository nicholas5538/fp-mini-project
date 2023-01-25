type setModalStatus = {
    setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

type modalState = {
    modalClicked: boolean;
};

export type routing = {
    path: string;
};

export type modalEvent = routing & setModalStatus;

export type modalProps = modalEvent & modalState;
