// We import streamDestination dynamically inside the function to avoid load-time circular dependencies.
let mediaRecorder = null;
export let recordedChunks = [];
export let isRecording = false;

export function getSupportedFormats() {
  const possibleTypes = [
    { mime: 'audio/webm;codecs=opus', label: 'WebM (Opus)' },
    { mime: 'audio/webm', label: 'WebM' },
    { mime: 'audio/ogg;codecs=opus', label: 'OGG (Opus)' },
    { mime: 'audio/ogg', label: 'OGG' },
    { mime: 'audio/mp4', label: 'MP4' },
    { mime: 'audio/wav', label: 'WAV' },
    { mime: 'audio/aac', label: 'AAC' },
    { mime: 'audio/flac', label: 'FLAC' },
    { mime: 'audio/mpeg', label: 'MP3' }
  ];
  return possibleTypes.filter((type) => {
    try {
      return MediaRecorder.isTypeSupported(type.mime);
    } catch (e) {
      return false;
    }
  });
}

export async function startRecording(mimeType) {
  const { streamDestination } = await import('./audio.js');
  if (isRecording || !streamDestination) return;
  recordedChunks = [];
  const options = mimeType ? { mimeType } : {};
  try {
    mediaRecorder = new MediaRecorder(streamDestination.stream, options);
  } catch (e) {
    mediaRecorder = new MediaRecorder(streamDestination.stream);
  }

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    const finalMime = mediaRecorder.mimeType || 'audio/webm';
    const blob = new Blob(recordedChunks, { type: finalMime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;

    let ext = 'webm';
    if (finalMime.includes('mp4')) ext = 'mp4';
    else if (finalMime.includes('ogg')) ext = 'ogg';
    else if (finalMime.includes('wav')) ext = 'wav';
    else if (finalMime.includes('aac')) ext = 'aac';
    else if (finalMime.includes('flac')) ext = 'flac';
    else if (finalMime.includes('mpeg')) ext = 'mp3';

    a.download = `joykatum_recording_${new Date().getTime()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 100);
  };

  mediaRecorder.start();
  isRecording = true;
}

export function stopRecording() {
  if (!isRecording || !mediaRecorder) return;
  mediaRecorder.stop();
  isRecording = false;
}
