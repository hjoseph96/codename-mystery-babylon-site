import React from "react"

import 'plyr-react/dist/plyr.css'
import 'react-glide/lib/reactGlide.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import Plyr from 'plyr-react';

import { Glide }  from 'react-glide';
import { Splide, SplideSlide } from '@splidejs/react-splide';

class GameplayVideos extends React.Component {
  render() {
    var battleShowcaseOneSrc = {
        type: "video",
        sources: [
            {
                src: "538973820",
                provider: 'vimeo'
            }
        ]
    };

    var battleShowcaseTwoSrc = {
        type: "video",
        sources: [
            {
                src: "/battle_sprite_showcase_2.mp4",
            }
        ]
    };

    var battleShowcaseThreeSrc = {
        type: "video",
        sources: [
            {
                src: "606877389",
                provider: 'vimeo'
            }
        ]
    };
    
    var mapTransitionsSrc = {
        type: "video",
        sources: [
            {
                src: "538950487",
                provider: 'vimeo'
            }
        ]
    };

    var arturTalkingSrc = {
        type: "video",
        sources: [
            {
                src: "/artur_talking.mp4",
            }
        ]
    };

    var penelopeTalkingSrc = {
        type: "video",
        sources: [
            {
                src: "/penelope_talking.mp4",
            }
        ]
    };

    var startScreenSrc = {
        type: "video",
        sources: [
            {
                src: "538973847",
                provider: 'vimeo'
            }
        ]
    };
    return (
        <Splide
        options={ {
            rewind : true,
            perPage: 1,
            perMove: 1,
            gap    : '1rem',
        } }>
            <SplideSlide>
                <Plyr controls source={battleShowcaseThreeSrc} />
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={battleShowcaseOneSrc} />
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={battleShowcaseTwoSrc}/>
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={mapTransitionsSrc}/>
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={arturTalkingSrc}/>
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={penelopeTalkingSrc}/>
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={startScreenSrc}/>
            </SplideSlide>
        </Splide>
)
    }
}

export default GameplayVideos;
