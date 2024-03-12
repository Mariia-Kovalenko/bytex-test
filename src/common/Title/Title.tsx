import './Title.scss';

export default function Title({
    type,
    text,
}: {
    type: "main" | "section";
    text: string;
}) {
    return <h1 className={`title ${type}`}>{text}</h1>;
}
