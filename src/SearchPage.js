import React from 'react';

import TuneOutlinedIcon from '@material-ui/icons/Tune';

import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

import './SearchPage.css';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://yt3.ggpht.com/ytc/AAUvwnj8RtKKAlRthZGyfivC3fsPuYjXW_E0n6P3RoNj=s88-c-k-c0x00ffffff-no-rj'
        channel='Ed Sheeran'
        verified
        subs='46.5M'
        noOfVideos={111}
        description='Music is a Magic'
      />
      <hr />

      <VideoRow
        views='33M'
        subs='46.5M'
        description='The official performance video for Ed Sheeran - Afterglow '
        timestamp='2 weeks ago'
        channel='Ed Sheeran'
        title='Ed Sheeran - Afterglow [Official Performance Video]
        '
        image='https://i.ytimg.com/an_webp/_NGQfFCFUn4/mqdefault_6s.webp?du=3000&sqp=CKTi4v8F&rs=AOn4CLAYJqWypDgLqq89dfF51I2usCvmuw'
      />

      <VideoRow
        views='85M'
        subs='46.5M'
        description='The official music video for Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. @Stormzy, @Jaykae & @Aitch]'
        timestamp='1 years ago'
        channel='Ed Sheeran'
        title='Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. Stormzy, Jaykae & Aitch]'
        image='https://i.ytimg.com/an_webp/XJQy_R9CYR4/mqdefault_6s.webp?du=3000&sqp=CJ7G4v8F&rs=AOn4CLB85YCEsYr4P4iIYJU90m2wlxEo2w'
      />
    </div>
  );
};

export default SearchPage;
