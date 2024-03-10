import "./Button.scss";

interface IButtonProps {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: IButtonProps) {
    return (
        <button className="button" onClick={onClick}>
            <span>{text}</span>
            <img src="./arrow-icon.svg" alt="arrow" />
        </button>
    );
}
