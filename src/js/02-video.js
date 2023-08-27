import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 19231868,
   });

player.on('timeupdate',throttle( function ({seconds}) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
    }, 1000)
);

const timeSaved = JSON.parse(localStorage.getItem("videoplayer-current-time"));

    player.setCurrentTime(timeSaved).then(function(seconds) {
    })
    .catch (function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log('Time was less than 0 or greater than the video’s duration');
                break;

            default:
                console.log('Some other error occurred');
                break;
        }
    });
