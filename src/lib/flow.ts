export type ScreenId =
  | 'sign-in'
  | 'face-id'
  | 'face-id-fail'
  | 'new-chat'
  | 'new-chat-updated'
  | 'typing'
  | 'thinking'
  | 'network-fail'
  | 'steps'
  | 'cant-install'
  | 'confirmed'

export const HAPPY_PATH: ScreenId[] = [
  'sign-in',
  'face-id',
  'new-chat',
  'typing',
  'thinking',
  'steps',
  'confirmed',
  'new-chat-updated',
]

export const ERROR_SCREENS: ScreenId[] = [
  'face-id-fail',
  'network-fail',
  'cant-install',
]

export const SCREEN_LABELS: Record<ScreenId, string> = {
  'sign-in': '01 · Sign in',
  'face-id': '02 · Face ID',
  'face-id-fail': 'E1 · Face ID failed',
  'new-chat': '03 · New chat',
  'new-chat-updated': '03b · Settings updated',
  typing: '04 · Type question',
  thinking: '05 · Thinking',
  'network-fail': 'E2 · Network failed',
  steps: '06 · Update steps',
  'cant-install': 'E3 · Can’t install',
  confirmed: '07 · Setup confirmed',
}

export const IOS_UPDATE_QUESTION = 'How do I install the latest iOS update?'
export const IOS_UPDATE_DONE = 'Done, it restarted. Is it installed?'
