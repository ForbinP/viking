
var soundManager = {};
soundManager.update = function (du) {
    if (currentLevel === level01 || currentLevel === level02 ||
        currentLevel === level03 || currentLevel === level04 ||
        currentLevel === level05) 
        {
            g_themeSong.pause();

            g_themeSong = g_backgroundSoundFirstTheme;
            g_themeSong.play();
    }
    if (currentLevel === level06 ||currentLevel === level07 ||currentLevel === level08 ||
        currentLevel === level09 ||currentLevel === level10) {

        g_themeSong.pause();
        g_themeSong = g_backgroundSoundSecondTheme;
        g_themeSong.play();
    }
    if (currentLevel === level11 || currentLevel === level12 ||
        currentLevel === level13 || currentLevel === level14 ||
        currentLevel === level15) {
            g_themeSong.pause();
            g_themeSong = g_backgroundSoundThirdTheme;
            g_themeSong.play();
    }    
    if (currentLevel === level16 || currentLevel === level17 ||
        currentLevel === level18 || currentLevel === level19 ||
        currentLevel === level20) {
            g_themeSong.pause();
            g_themeSong = g_backgroundSoundFourthTheme;
            g_themeSong.play();
    }
    if (currentLevel === runeLevel01 || currentLevel === runeLevel02 ||
        currentLevel === runeLevel03|| currentLevel === runeLevel04) {
            g_themeSong.pause();
            g_themeSong = g_backgroundSoundRuneTheme;
            g_themeSong.play();
    }

  
    this.mute();
}

var g_mute = false;    // Audio is on by default
var KEY_MUTE = 'M'.charCodeAt(0); 

soundManager.mute = function () {
    if (g_mute) {
        g_themeSong.volume = 0.0;
    } else {
        g_themeSong.volume = 1.0;
    }
    if (key(KEY_MUTE)) {
        g_mute = !g_mute;
    }
}
