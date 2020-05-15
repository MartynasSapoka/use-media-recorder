export type Status =
  | 'idle'
  | 'acquiring_media'
  | 'ready'
  | 'recording'
  | 'stopping'
  | 'stopped'
  | 'failed';

export interface MediaRecorderProps {
  blobOptions?: BlobPropertyBag;
  recordScreen?: boolean;
  onStart?: () => void;
  onStop?: (blob: Blob) => void;
  onDataAvailable?: (blob: Blob) => void;
  onError?: () => void;
  mediaRecorderOptions?: object;
  mediaStreamConstraints: MediaStreamConstraints;
}

export interface MediaRecorderHookOptions {
  error: Error | null;
  status: Status;
  mediaBlob: Blob | null;
  isAudioMuted: boolean;
  stopRecording: () => void;
  getMediaStream: () => void;
  clearMediaStream: () => void;
  startRecording: () => void;
  pauseRecording: () => void;
  resumeRecording: () => void;
  muteAudio: () => void;
  unMuteAudio: () => void;
  liveStream: MediaStream;
}

declare function useMediaRecorder<T>(
  options: MediaRecorderProps
): MediaRecorderHookOptions;

export default useMediaRecorder;
