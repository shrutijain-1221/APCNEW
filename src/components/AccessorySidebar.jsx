// components/AccessorySidebar.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { slugify } from '../utils/slugify';
const categories = [
  "Headbands", "Scrunchies", "Alligator Bows", "Earrings", "Hair Clips/Pins",
  "Claw Clips", "Lanyards", "Key Circle/Chains", "Stadium bag straps", "Wristlets",
  "Mickey Ears", "Handcuffs", "Tote Bags", "Brooches", "Eye Masks", "Coin Purses",
  "Coasters", "Mobile Purses", "Clutches", "Trucker Hats", "Box Bags", "Wreath Sash"
];

const seasons = [
  "Valentine’s Day", "Crawfish Boil", "Mardi Gras", "Back to school", "Rodeo/Derby",
  "Summer", "Cancer Awareness", "Sorority", "Game Day", "High School/Collegiate",
  "Easter", "4th July", "Ramadan/Eid", "Queen’s B’day", "Disney/Swiftie",
  "Thanksgiving", "St. Patrick’s Day", "Halloween", "Christmas", "New Year",
  "Baby Shower", "Mother’s Day"
];
const AccessorySidebar = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const selectedCategory = categories.find(cat => slugify(cat) === type);
  const selectedSeason = seasons.find(season => slugify(season) === type);

  return (
    <div className="hidden md:block w-1/6 p-6 border-r text-[#514747]">
      <h2 className="text-4xl font-poppins font-medium mb-2 text-[#666]">Browse by</h2>
      <hr className="mb-2" />

      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-2 text-[#514747] font-['Dancing_Script',cursive]">Categories</h3>
        <hr className="mb-2" />
        <ul className="space-y-1 text-lg max-h-48 overflow-y-auto pr-2 scroll-hide">
          {categories.map(cat => (
            <li
              key={cat}
              className={`cursor-pointer font-sans px-1 py-1 hover:font-medium rounded ${
                slugify(selectedCategory || '') === slugify(cat) ? 'font-bold' : ''
              }`}
              onClick={() => navigate(`/accessories/${slugify(cat)}`)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <hr className="mb-2" />
        <h3 className="text-3xl font-bold mb-2 text-[#514747] font-['Dancing_Script',cursive]">Shop by Season</h3>
        <hr className="mb-2" />
        <ul className="space-y-1 text-lg max-h-48 overflow-y-auto pr-2 scroll-hide">
          {seasons.map(season => (
            <li
              key={season}
              className={`cursor-pointer font-sans px-1 py-1 rounded hover:font-medium ${
                slugify(selectedSeason || '') === slugify(season) ? 'font-bold' : ''
              }`}
              onClick={() => navigate(`/accessories/${slugify(season)}`)}
            >
              {season}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <hr className="mb-2" />
        <h3 className="text-3xl font-bold mb-2 text-[#514747] font-['Dancing_Script',cursive]">Custom Requests</h3>
        <hr className="mb-2" />
        <ul className="text-lg">
          <li className="cursor-pointer font-sans hover:font-medium">Custom Packaging</li>
        </ul>
      </div>
    </div>
  );
};

export default AccessorySidebar;
