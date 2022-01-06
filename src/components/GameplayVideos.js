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
                src: "663094164",
                provider: 'vimeo'
            }
        ]
    };

    var vaCutscene = {
        type: "video",
        sources: [
            {
                src: "/va-cutscene.mp4",
            }
        ]
    };

    var battleShowcaseTwoSrc = {
        type: "video",
        sources: [
            {
                src: "663098639",
                provider: 'vimeo'
            }
        ]
    };
    
    var fortCutsceneSrc = {
        type: "video",
        sources: [
            {
                src: "663098956",
                provider: 'vimeo'
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
                <Plyr controls source={vaCutscene} />
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={battleShowcaseOneSrc} />
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={battleShowcaseTwoSrc}/>
            </SplideSlide>
            <SplideSlide>
                <Plyr controls source={fortCutsceneSrc}/>
            </SplideSlide>
            
            <SplideSlide>
                <Plyr controls source={startScreenSrc}/>
            </SplideSlide>
        </Splide>
)
    }
}

export default GameplayVideos;
