import React from 'react';
import HeaderLanding from '../components/HeaderLanding';
import HeroLanding from '../components/HeroLanding';
import FeatureLanding from '../components/FeatureLanding';
import FooterLanding from '../components/FooterLanding';

import playlistImage from '../images/playlist.svg';
import managementImage from '../images/linkManage.svg';
import filteringImage from '../images/filtering.svg';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <HeaderLanding />

        {/* Hero Section */}
        <HeroLanding onSignUp={() => navigate('/signup')} />

        {/* Features */}
        <FeatureLanding
          title="Efficient Link Management"
          description="Our platform helps you save time by keeping all your important links in one place. Stay organized with customizable folders and tags, and enjoy seamless sharing and collaboration tools to enhance your productivity."
          image={managementImage}
        />
        <FeatureLanding
          title="Introducing Link Playlists"
          description="Our Link Playlists feature allows you to group related URLs into organized collections. Whether planning research or simply sharing a list of must-visit websites, Link Playlists offer a seamless way to bundle links together."
          image={playlistImage}
          reverse
        />
        <FeatureLanding
          title="Smart Filtering"
          description="Easily find what you need with powerful filtering options. Categorize your links by topics and access them with ease. Stay organized and efficient with customizable filters."
          image={filteringImage}
        />

        {/* Footer */}
        <FooterLanding />
      </div>
    </div>
  );
};

export default LandingPage;