// https://calculator.swiftutors.com/amplitude-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const amplitudeoftheWaveRadio = document.getElementById('amplitudeoftheWaveRadio');
const distanceTraveledbyWaveRadio = document.getElementById('distanceTraveledbyWaveRadio');
const waveFrequencyRadio = document.getElementById('waveFrequencyRadio');

let amplitudeoftheWave;
let distanceTraveledbyWave = v1;
let waveFrequency = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

amplitudeoftheWaveRadio.addEventListener('click', function() {
  variable1.textContent = '(D) Distance Traveled by Wave (m)';
  variable2.textContent = '(F) Wave Frequency (hertz)';
  distanceTraveledbyWave = v1;
  waveFrequency = v2;
  result.textContent = '';
});

distanceTraveledbyWaveRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Amplitude of the Wave (decibels)';
  variable2.textContent = '(F) Wave Frequency (hertz)';
  amplitudeoftheWave = v1;
  waveFrequency = v2;
  result.textContent = '';
});

waveFrequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Amplitude of the Wave (decibels)';
  variable2.textContent = '(D) Distance Traveled by Wave (m)';
  amplitudeoftheWave = v1;
  distanceTraveledbyWave = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(amplitudeoftheWaveRadio.checked)
    result.textContent = `Amplitude of the Wave = ${computeAmplitudeoftheWave().toFixed(2)} decibels`;

  else if(distanceTraveledbyWaveRadio.checked)
    result.textContent = `Distance Traveled by Wave = ${computeDistanceTraveledbyWave().toFixed(2)} m`;

  else if(waveFrequencyRadio.checked)
    result.textContent = `Wave Frequency = ${computeWaveFrequency().toFixed(2)} hertz`;
})

// calculation

function computeAmplitudeoftheWave() {
  return Number(distanceTraveledbyWave.value) / Number(waveFrequency.value);
}

function computeDistanceTraveledbyWave() {
  return Number(amplitudeoftheWave.value) * Number(waveFrequency.value);
}

function computeWaveFrequency() {
  return Number(distanceTraveledbyWave.value) / Number(amplitudeoftheWave.value);
}