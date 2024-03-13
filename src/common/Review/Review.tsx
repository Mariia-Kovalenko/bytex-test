import { start } from "repl";
import Rating from "../Rating/Rating";
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
    return (
        <div className="review">
            <div className="review__user">
                <div className="avatar">
                    {
                        avatar && <img src="./avatar.png" alt="avatar" />
                    }
                </div>
                <div className={`review__details ${!info ? 'column' : ''}`}>
                    <h4 className="review__name">{name}</h4>
                    <Rating rating={rating} info={info} />
                </div>
            </div>
            <div className="review__text">{text}</div>
        </div>
    );
}
