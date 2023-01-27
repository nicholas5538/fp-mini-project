type setModalStatus = {
    setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

type modalState = {
    modalClicked: boolean;
};

export type childrenNode = {
    children: JSX.Element | JSX.Element[] | string | string[];
};

export type routing = {
    path: string;
};

export type modalEvent = routing & setModalStatus;

export type modalProps = modalEvent & modalState;

type formEventType = {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export type queryType = {
    query: string;
};

export type inputType = queryType & formEventType;

export interface Itable {
    [props: string]: string;
}
