import './GridGallery.scss';

export default function GridGallery({galleryItems}: {galleryItems: string[]}) {
    return <div className="grid-gallery">
        {
            galleryItems.map((item, i) => (
                <div className="gallery-item">
                    <img src={item} alt={`item-${i+1}`} />
                </div>
            ))
        }
    </div>
}