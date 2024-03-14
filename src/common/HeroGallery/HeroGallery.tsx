import "./HeroGalery.scss";

export default function HeroGallery({ images }: { images: string[] }) {
    return (
        <div className="hero__gallery">
            <div className="rectangle"></div>
            <img className="photo-small" src={images[0]} alt="product" />
            <img className="photo-main" src={images[1]} alt="product" />
            <img className="photo-small" src={images[2]} alt="product" />
            <div className="rectangle"></div>
        </div>
    );
}
