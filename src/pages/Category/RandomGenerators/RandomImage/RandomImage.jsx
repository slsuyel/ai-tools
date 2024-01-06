import React, { useState } from 'react';
import Loader from '../../../../components/Loader';

const categories = [
    "Animals", "Plants", "Colors", "Countries", "Cities", "Mountains", "Rivers", "Oceans", "Lakes",
    "Constellations", "Elements", "Minerals", "Gemstones", "Metals", "Celebrities", "Historical Figures",
    "Mythological Creatures", "Famous Scientists", "Inventors", "Artists", "Musicians", "Authors",
    "Philosophers", "Mathematicians", "Actors", "Actresses", "Directors", "Composers", "Singers", "Bands",
    "Genres of Music", "Instruments", "Art Movements", "Painters", "Sculptors", "Poets", "Writers",
    "Nobel Prize Winners", "Political Leaders", "Activists", "Royalty", "Emotions", "Virtues", "Vices",
    "Holidays", "Seasons", "Months", "Days of the Week", "Zodiac Signs", "Astrological Planets",
    "Elements of a Story", "Literary Genres", "Film Genres", "TV Show Genres", "Video Game Genres",
    "Sports", "Hobbies", "Games", "Board Games", "Card Games", "Sports Teams", "Mountains", "Deserts",
    "Forests", "Jungles", "Currencies", "Clothing", "Fashion Designers", "Accessories", "Food", "Beverages",
    "Spices", "Herbs", "Cooking Techniques", "Gadgets", "Technology Companies", "Programming Languages",
    "Web Technologies", "Social Media Platforms", "Mobile Apps", "Gadgets", "Vehicles", "Car Brands",
    "Motorcycle Brands", "Airlines", "Countries by Continent", "Languages", "Religions", "Mythologies",
    "Philosophies", "Scientific Theories", "Discoveries", "Inventions", "Architectural Styles",
    "Historical Periods", "Ancient Civilizations", "Wars", "Battles", "Famous Speeches", "Philosophical Concepts"

];

const RandomImage = () => {
    const [category, setCategory] = useState('nature');
    const [customCategory, setCustomCategory] = useState('');
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);

    const getRandomImage = () => {
        setLoading(true);

        // Use customCategory if available, otherwise use the selected category
        const apiUrl = `https://source.unsplash.com/featured/?${customCategory || category}`;

        const fetchImage = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.url;
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        };
        // Fetch 8 random images
        const fetchImages = Array.from({ length: 8 }, () => fetchImage());

        Promise.all(fetchImages)
            .then(imageUrls => {
                setImageUrls(imageUrls);
                setLoading(false);
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-white">Random Image Generator</h1>

            <div className='row'>
                <div className='col-md-6'>
                    <label className='text-white' htmlFor="category">Write the Category:</label>
                    <input
                        className='form-control'
                        type="text"
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label className='text-white' htmlFor="category">Select Image Category:</label>
                    <select
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button disabled={loading} className="submit-btn mb-3" onClick={getRandomImage}>
                Random Images
            </button>

            {loading && <div className="text-center">
                <Loader />
            </div>}

            <div className="row">
                {imageUrls.map((imageUrl, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <img
                            src={imageUrl}
                            className="img-fluid rounded"
                            alt={`${category} image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RandomImage;
