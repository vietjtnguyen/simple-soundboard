# Simple Soundboard

Simple Soundboard is just that.  It is written as just an HTML page to play looping ambient sounds, looping music, and instantaneous sound effects.  It is just a web page that can be loaded off of the file system (though can be statically hosted if desired).

I wrote it for my Dungeons and Dragons game when I couldn't find a simple and free soundboard.  Your browser is fully capable of mixing sounds and display a user interface.  It's also prevasive to boot so it made sense to just make it a web page.

# Usage

![](screenshot.png)

Open up [`soundboard.html`](./soundboard.html) in your favorite browser.  I've tested it mostly with Firefox on Linux (Ubuntu), Firefox on Mac OS X, and Chrome on Mac OS X.

Each sound is placed into its own block.  The block shows the audio widget(s) for the sound(s) which allows you to play/pause, scrub time, and change volume. Beneath the audio widgets is a button which can be used to quick scrub to the beginning of the clip and play the sound.  Beneath the button for non-grouped sound blocks is a checkbox which controls whether the sound loops.  By default sounds that are 60 seconds or longer are marked for looping.

## Customizing

Edit [`soundboard.html`](./soundboard.html) and change the `sound_definition` variable on line 8.  The variable is an array of sounds.

If the sound is specified as a string it is assumed to be the URL of the sound file.  In order to support loading the soundboard from the filesystem the URLs should be written as relative to where `soundboard.html` is on the filesystem.  Sounds that are longer than 60 seconds are automatically marked as looping, but you can simply change the loop checkbox to change whether that sound clip loops.

If the sound is specified as a hash object then two keys are expected: `name` and `audio`.  `name` should just be a string for the text in the play button.  `audio` should be an array of sound URLs associated with this one sound block.  The object definition allows specifying multiple sounds to be played randomly from one button.  Which sound is played is sampled randomly without replacement.  This means each sound will be played once before any sound is repeated.  These grouped sounds cannot be looped.

# Attribution

The project started off by editing [ryandoherty/ClouserW-Soundboard](https://github.com/ryandoherty/ClouserW-Soundboard).

# Audio Attribution

To demonstrate the soundboard there are some example audio clips in the project that need to be attributed.  These audio clips came from YouTube; their respective source URLs are listed below.  The clips were chopped up and converted to OGG using [Audacity](https://www.audacityteam.org/).

- [`./ambient/thunderstorm.ogg`](./ambient/thunderstorm.ogg): <https://www.youtube.com/watch?v=eqabnkMmqyM>
- [`./effects/flapping-wings.ogg`](./effects/flapping-wings.ogg): <https://www.youtube.com/watch?v=EDy8G89325c>
- [`./effects/red-tailed-hawk-scream.ogg`](./effects/red-tailed-hawk-scream.ogg): <https://www.youtube.com/watch?v=33DWqRyAAUw>
- [`./effects/thunder-clap-1.ogg`](./effects/thunder-clap-1.ogg): <https://www.youtube.com/watch?v=ZHeLUVDYLIg>
- [`./effects/thunder-clap-2.ogg`](./effects/thunder-clap-2.ogg): <https://www.youtube.com/watch?v=QZpgHrKXooc>
- [`./effects/thunder-clap-3.ogg`](./effects/thunder-clap-3.ogg): <https://www.youtube.com/watch?v=QZpgHrKXooc>
- [`./effects/thunder-clap-4.ogg`](./effects/thunder-clap-4.ogg): <https://www.youtube.com/watch?v=QZpgHrKXooc>
- [`./effects/whoosh-crunch-1.ogg`](./effects/whoosh-crunch-1.ogg): <https://www.youtube.com/watch?v=U_Lh28jM4vc>
- [`./music/skyrim-ost-blood-and-steel.ogg`](./music/skyrim-ost-blood-and-steel.ogg): <https://www.youtube.com/watch?v=q_AUBic3NEo>

# Getting Sound Clips

So far I've been finding clips and audio tracks on YouTube, grabbing them using [`youtube-dl`](https://github.com/ytdl-org/youtube-dl), and editing them using [Audacity](https://www.audacityteam.org/).  I've been doing this all on a Ubuntu machine. `youtube-dl` can be grabbed using `pip`.  Audacity can be installed from the Ubuntu package repository (`sudo apt install audacity`).

# Contributing

The interface is purpusefully spartan.  Feel free to send me pull requests if you have nice stylings or features.

# License

> The MIT License (MIT)
>
> Copyright © 2019 Viet T. Nguyen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
