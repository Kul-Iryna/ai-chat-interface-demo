import { useEffect, useState } from 'react'
import { PhoneShell } from './components/PhoneChrome'
import {
  ERROR_SCREENS,
  HAPPY_PATH,
  IOS_UPDATE_QUESTION,
  SCREEN_LABELS,
  type ScreenId,
} from './lib/flow'
import {
  CantInstallScreen,
  ConfirmedScreen,
  FaceIdFailScreen,
  FaceIdScreen,
  NetworkFailScreen,
  NewChatScreen,
  NewChatUpdatedScreen,
  SignInScreen,
  StepsScreen,
  ThinkingScreen,
  TypingScreen,
} from './screens/Screens'

const SCREEN_MAP = {
  'sign-in': SignInScreen,
  'face-id': FaceIdScreen,
  'face-id-fail': FaceIdFailScreen,
  'new-chat': NewChatScreen,
  'new-chat-updated': NewChatUpdatedScreen,
  typing: TypingScreen,
  thinking: ThinkingScreen,
  'network-fail': NetworkFailScreen,
  steps: StepsScreen,
  'cant-install': CantInstallScreen,
  confirmed: ConfirmedScreen,
} as const

const App = () => {
  const [screen, setScreen] = useState<ScreenId>('sign-in')
  const [draft, setDraft] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    if (screen === 'thinking') {
      const timer = window.setTimeout(() => setScreen('steps'), 1400)
      return () => window.clearTimeout(timer)
    }
    return undefined
  }, [screen])

  useEffect(() => {
    if (screen === 'new-chat-updated') setShowBanner(true)
  }, [screen])

  const handleGoto = (id: string) => {
    const next = id as ScreenId
    if (next === 'typing' && !draft.trim()) {
      setDraft(IOS_UPDATE_QUESTION)
    }
    setScreen(next)
  }

  const handleNext = () => {
    const idx = HAPPY_PATH.indexOf(screen)
    if (idx >= 0 && idx < HAPPY_PATH.length - 1) {
      handleGoto(HAPPY_PATH[idx + 1])
    }
  }

  const Screen = SCREEN_MAP[screen]

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 px-6 py-10 lg:flex-row lg:items-start lg:justify-center lg:gap-12 lg:pt-16">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-label-secondary">
            Prototype
          </p>
          <h1 className="mt-1 text-[28px] font-bold tracking-[-0.4px] text-label-primary">
            Install iOS update
          </h1>
          <p className="mt-1 text-[15px] text-label-secondary">
            {SCREEN_LABELS[screen]}
          </p>
        </div>
        <PhoneShell>
          <Screen
            onNext={handleNext}
            onGoto={handleGoto}
            draft={draft}
            setDraft={setDraft}
            showBanner={showBanner}
            setShowBanner={setShowBanner}
          />
        </PhoneShell>
      </div>

      <aside className="w-full max-w-[320px] rounded-[24px] bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <p className="text-[15px] font-semibold text-label-primary">Happy path</p>
        <p className="mt-1 text-[13px] text-label-secondary">
          Click through the phone, or jump to any step.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {HAPPY_PATH.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleGoto(id)}
              className={`rounded-[12px] px-3 py-2.5 text-left text-[14px] ${
                screen === id
                  ? 'bg-black text-white'
                  : 'bg-bg-secondary text-label-primary'
              }`}
            >
              {SCREEN_LABELS[id]}
            </button>
          ))}
        </div>

        <p className="mt-6 text-[15px] font-semibold text-label-primary">Error scenarios</p>
        <div className="mt-3 flex flex-col gap-2">
          {ERROR_SCREENS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleGoto(id)}
              className={`rounded-[12px] px-3 py-2.5 text-left text-[14px] ${
                screen === id
                  ? 'bg-accent-red text-white'
                  : 'bg-bg-secondary text-label-primary'
              }`}
            >
              {SCREEN_LABELS[id]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="mt-6 w-full rounded-[14px] bg-accent-blue py-3 text-[15px] font-semibold text-white"
        >
          Next step
        </button>
      </aside>
    </div>
  )
}

export default App
