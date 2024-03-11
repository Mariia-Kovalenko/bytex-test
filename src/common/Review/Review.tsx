import "./Review.scss";

interface IReviewProps {
    name: string;
    rating: number;
    text: string;
    avatar?: string;
    info?: string;
}
export default function Review({
    name,
    rating,
    text,
    avatar,
    info,
}: IReviewProps) {
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src="./star.svg" alt="star" />);
    }

    return (
        <div className="review">
            <div className="review__user">
                <div className="avatar">
                    <img src="./avatar.png" alt="avatar" />
                </div>
                <div className="review__details">
                    <h4 className="review__name">{name}</h4>
                    <div className="rating">{stars}</div>
                    {info && <div className="review__info">{info}</div>}
                </div>
            </div>
            <div className="review__text">{text}</div>
        </div>
    );
}
