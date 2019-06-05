// audio group definitions
var arrow_hit_dirt = {
  'name': 'arrow-hit-dirt',
  'audio': [
    './effects/arrow-hit-dirt-1.ogg',
    './effects/arrow-hit-dirt-2.ogg',
    './effects/arrow-hit-dirt-3.ogg',
    './effects/arrow-hit-dirt-4.ogg',
  ],
};
var clang = {
  'name': 'clang',
  'audio': [
    './effects/clang-1.ogg',
    './effects/clang-2.ogg',
    './effects/clang-3.ogg',
    './effects/clang-4.ogg',
    './effects/clang-5.ogg',
    './effects/clang-6.ogg',
    './effects/clang-7.ogg',
  ],
};
var slap_hit_groan = {
  'name': 'slap-hit-groan',
  'audio': [
    './effects/slap-hit-groan-1.ogg',
    './effects/slap-hit-groan-2.ogg',
    './effects/slap-hit-groan-3.ogg',
    './effects/slap-hit-groan-4.ogg',
  ],
};
var swimming = {
  'name': 'swimming',
  'audio': [
    './effects/swimming-1.ogg',
    './effects/swimming-2.ogg',
    './effects/swimming-3.ogg',
    './effects/swimming-4.ogg',
    './effects/swimming-5.ogg',
    './effects/swimming-6.ogg',
  ],
};
var sword_clash = {
  'name': 'sword-clash',
  'audio': [
    './effects/sword-clash-1.ogg',
    './effects/sword-clash-2.ogg',
    './effects/sword-clash-3.ogg',
  ],
};
var thunder_clap = {
  'name': 'thunder-clap',
  'audio': [
    './effects/thunder-clap-1.ogg',
    './effects/thunder-clap-2.ogg',
    './effects/thunder-clap-3.ogg',
    './effects/thunder-clap-4.ogg',
  ],
};
var wave_crash = {
  'name': 'wave-crash',
  'audio': [
    './effects/wave-crash-1.ogg',
    './effects/wave-crash-2.ogg',
    './effects/wave-crash-3.ogg',
    './effects/wave-crash-4.ogg',
  ],
};

// soundboard definitions
var soundboards = {}
soundboards.tempest_roc = [
  './effects/whoosh-crunch-1.ogg',
  './effects/red-tailed-hawk-scream.ogg',
  thunder_clap,
  './effects/flapping-wings.ogg',
  './ambient/thunderstorm.ogg',
  './music/skyrim-ost-blood-and-steel.ogg',
];
soundboards.canyon_rope_bridge = [
  swimming,
  './effects/rope-swinging-creaking-1.ogg',
  './effects/rope-swinging-creaking-2.ogg',
  './effects/rope-tightening-1.ogg',
  './effects/rope-tightening-2.ogg',
  './ambient/rapid-river.ogg',
];
soundboards.phandalin = [
  './ambient/evening-town.ogg',
  './ambient/small-marketplace.ogg',
  './ambient/town-square-daytime.ogg',
  './ambient/woodland-village.ogg',
];
soundboards.wave_echo_cave = [
  swimming,
  wave_crash,
  './ambient/dripping-cave.ogg',
];
soundboards.combat = [
  arrow_hit_dirt,
  clang,
  sword_clash,
  './effects/earthquake-magic.mp3',
  './effects/fire-bolt.mp3',
  './effects/magic-missile.mp3',
  thunder_clap,
  './effects/monster-bite-armor-1.ogg',
  './effects/monster-bite-flesh-1.ogg',
  './effects/monstrous-roar-1.ogg',
  './effects/whoosh-crunch-1.ogg',
  './effects/whoosh-flesh-1.ogg',
  './music/horizon-zero-dawn-ost-frostclaw-battle.ogg',
  './music/horizon-zero-dawn-ost-colossal.oga',
  './music/forest-battle.ogg',
  './music/skyrim-ost-blood-and-steel.ogg',
];
