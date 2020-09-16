import React from 'react';
import '../styles/Footer.css';
import { Grid, Slider } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
   return (
      <div className="footer">
         <div className="footer__left">
            <img className="footer__albumCover" src="https://ibighit.com/bts/images/bts/discography/map_of_the_soul-persona/album-cover.jpg" alt="" />
            <div className="footer__songInfo">
               <h4>Intro: Persona</h4>
               <p>BTS</p>
            </div>
         </div>
         <div className="footer__center">
            <ShuffleIcon className="footer__green" />
            <SkipPreviousIcon className="footer__icon" />
            <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
            <SkipNextIcon className="footer__icon" />
            <RepeatIcon className="footer__green" />
         </div>
         <div className="footer__right">
            <Grid container spacing={2}>
               <Grid item>
                  <PlaylistPlayIcon />
               </Grid>
               <Grid item>
                  <VolumeDownIcon />
               </Grid>
               <Grid item xs>
                  <Slider aria-labelledby="continuous-slider"
                  />
               </Grid>
            </Grid>
         </div>
      </div>
   )
}

export default Footer
