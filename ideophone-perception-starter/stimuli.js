
const trials = [
  {
    type: jsPsychAudioButtonResponse,
    stimulus: ['audio/P01target.wav', 'audio/P01distr.wav'],
    prompt: '<p>Welche der Optionen klingt für dich eher so, als würde sie die Bedeutung von "<strong>(sich) langsam bewegen</strong>" ausdrücken?</p>',
    choices: ['Option A', 'Option B'],
    button_html: '<button class="jspsych-btn">%choice%</button>',
    trial_ends_after_audio: false,
    response_allowed_while_playing: true,
    randomize_order: true,
    data: { trial_type: 'practice', id: 'P01' }
  }
];
