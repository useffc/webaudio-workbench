let audio = new AudioContext;
let osc = audio.createOscillator();
osc.type = "square";
let gainNode = audio.createGain();
gainNode.gain.value = 0.3;
osc.connect(audio.destination);
osc.start();
