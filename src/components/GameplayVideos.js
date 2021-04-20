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
                src: "/battle_sprite_showcase.mp4",
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
    
    var mapTransitionsSrc = {
        type: "video",
        sources: [
            {
                src: "/map_transitions.mp4",
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
                src: "/start_screen.mp4",
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
