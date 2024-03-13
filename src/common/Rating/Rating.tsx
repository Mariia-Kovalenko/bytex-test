import './Rating.scss';

export default function Rating({
    rating,
    info,
}: {
    rating: number;
    info?: string;
}) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src="./star.svg" alt="star" />);
        }
        return stars;
    };

    return (
        <div className="rating-container">
            <div className="rating">{renderStars()}</div>
            {info && <div className="review__info">{info}</div>}
        </div>
    );
}
