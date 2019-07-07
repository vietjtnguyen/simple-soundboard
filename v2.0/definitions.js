// effect audio group definitions
function create_effect_group(name, count) {
  var obj = {
    'name': name,
    'audio': [],
  };
  for (let i = 1; i <= count; i += 1) {
    obj.audio.push('./effects/' + name + '-' + i.toString() + '.ogg');
  }
  return obj;
}
var effect_groups = {
  'arrow-loose-and-hit': 7,
  'dirt-slam': 4,
  'dragon-bite': 2,
  'ooze': 5,
  'owlbear-roar': 4,
  'slam-attack': 4,
  'swimming': 6,
  'sword-clash': 3,
  'thunder-clap': 4,
  'wave-crash': 4,
};
for (let name in effect_groups) {
  let count = effect_groups[name]
  effect_groups[name] = create_effect_group(name, count);
}


// Specific soundboards
var soundboards = {}
soundboards.phandalin = [
  './ambient/evening-town.ogg',
  './ambient/small-marketplace.ogg',
  './ambient/town-square-daytime.ogg',
  './ambient/woodland-village.ogg',
];
soundboards.wave_echo_cave = [
  effect_groups['ooze'],
  effect_groups['swimming'],
  effect_groups['wave-crash'],
  './ambient/dripping-cave.ogg',
];

// Generic soundboards
soundboards.combat = [
  effect_groups['arrow-loose-and-hit'],
  effect_groups['dirt-slam'],
  effect_groups['sword-clash'],
  effect_groups['dragon-bite'],
  effect_groups['thunder-clap'],
  './music/darkest-dungeon-the-cove-battle.ogg',
  './music/skyrim-ost-blood-and-steel.ogg',
];
soundboards.travelling = [
  './ambient/docks.ogg',
  './ambient/dripping-cave.ogg',
  './ambient/evening-town.ogg',
  './ambient/forest-daytime.ogg',
  './ambient/horseback-travelling.ogg',
  './ambient/night-camp.ogg',
  './ambient/rapid-river.ogg',
  './ambient/thunderstorm.ogg',
  './ambient/woodland-village.ogg',
];
