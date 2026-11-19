import type { ReactNode } from 'react'
import { AnimatedOrb } from '../components/AnimatedOrb'
import {
  ActionRow,
  AssistantText,
  ConfirmationTab,
  SettingsCard,
  StepItem,
  UserBubble,
} from '../components/ChatBits'
import {
  Composer,
  HomeIndicator,
  NavBar,
  StatusBar,
} from '../components/PhoneChrome'
import {
  IOS_UPDATE_DONE,
  IOS_UPDATE_QUESTION,
} from '../lib/flow'

type ScreenProps = {
  onNext: () => void
  onGoto: (id: string) => void
  draft: string
  setDraft: (value: string) => void
  showBanner: boolean
  setShowBanner: (value: boolean) => void
}

const SoftGlows = () => (
  <>
    <div className="pointer-events-none absolute left-[180px] top-[-60px] size-[300px]">
      <img src="/assets/glow-blue.svg" alt="" className="size-full scale-[1.6] opacity-80" />
    </div>
    <div className="pointer-events-none absolute left-[-120px] top-[520px] size-[320px]">
      <img src="/assets/glow-purple.svg" alt="" className="size-full scale-[1.5] opacity-80" />
    </div>
    <div className="pointer-events-none absolute left-[220px] top-[640px] size-[260px]">
      <img src="/assets/glow-peach.svg" alt="" className="size-full scale-[1.6] opacity-80" />
    </div>
  </>
)

const SUGGESTIONS = [
  { icon: '/assets/icon-globe.svg', title: 'Plan a weekend', caption: 'in Big Sur for two' },
  { icon: '/assets/icon-align.svg', title: 'Summarize', caption: 'my unread messages' },
  { icon: '/assets/icon-photo.svg', title: 'Create an image', caption: 'of a cozy reading nook' },
  { icon: '/assets/icon-compose.svg', title: 'Help me write', caption: 'a thank-you note' },
]

export const SignInScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative size-full overflow-hidden bg-bg-primary">
    <StatusBar />
    <HomeIndicator />
    <div className="absolute inset-x-4 top-[120px] flex flex-col items-center gap-3">
      <AnimatedOrb size={64} />
      <div className="flex flex-col items-center gap-1">
        <p className="text-[28px] font-bold text-black">Welcome back</p>
        <p className="text-[15px] text-[#8a8a8f]">Sign in to continue to your chats</p>
      </div>
      <div className="h-3 w-2.5" />
      <div className="w-full rounded-[14px] bg-bg-secondary p-4 text-left text-[17px]">
        alex.morgan@example.com
      </div>
      <div className="w-full rounded-[14px] bg-bg-secondary p-4 text-left text-[17px]">
        ••••••••••
      </div>
      <button
        type="button"
        onClick={() => onGoto('new-chat')}
        className="w-full rounded-[14px] bg-black py-4 text-[17px] font-semibold text-white"
      >
        Continue
      </button>
      <p className="text-[13px] text-[#8a8a8f]">or</p>
      <button
        type="button"
        className="w-full rounded-[14px] bg-bg-secondary py-4 text-[17px] font-semibold text-black"
      >
        Sign in with Apple
      </button>
      <button
        type="button"
        onClick={() => onGoto('face-id')}
        className="w-full rounded-[14px] bg-bg-secondary py-4 text-[17px] font-semibold text-black"
      >
        Use Face ID
      </button>
    </div>
  </div>
)

export const FaceIdScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative size-full overflow-hidden bg-bg-primary">
    <SignInScreen
      onNext={() => undefined}
      onGoto={() => undefined}
      draft=""
      setDraft={() => undefined}
      showBanner={false}
      setShowBanner={() => undefined}
    />
    <div className="absolute inset-0 z-40 bg-black/20" />
    <div className="absolute left-1/2 top-1/2 z-50 flex w-[140px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-[28px] bg-white/95 px-6 py-7">
      <img src="/assets/icon-faceid.svg" alt="" className="size-16" />
      <p className="text-[17px] font-semibold">Face ID</p>
      <button
        type="button"
        onClick={() => onGoto('new-chat')}
        className="mt-1 rounded-xl bg-accent-blue px-4 py-2.5 text-[15px] font-semibold text-white"
      >
        Authenticate
      </button>
      <button
        type="button"
        onClick={() => onGoto('face-id-fail')}
        className="text-[13px] text-label-secondary"
      >
        Simulate fail
      </button>
    </div>
  </div>
)

export const FaceIdFailScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative size-full overflow-hidden bg-bg-primary">
    <SignInScreen
      onNext={() => undefined}
      onGoto={() => undefined}
      draft=""
      setDraft={() => undefined}
      showBanner={false}
      setShowBanner={() => undefined}
    />
    <div className="absolute inset-0 z-40 bg-black/20" />
    <div className="absolute left-1/2 top-1/2 z-50 flex min-w-[160px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-[28px] bg-white/95 px-6 py-7">
      <img src="/assets/icon-faceid.svg" alt="" className="size-16" />
      <p className="text-[17px] font-semibold text-accent-red">Face ID failed</p>
      <button
        type="button"
        onClick={() => onGoto('face-id')}
        className="rounded-xl bg-accent-blue px-4 py-2.5 text-[15px] font-semibold text-white"
      >
        Try Again
      </button>
    </div>
  </div>
)

const NewChatBase = ({
  showBanner,
  onDismissBanner,
  onAskUpdate,
  draft,
  setDraft,
  onSend,
}: {
  showBanner?: boolean
  onDismissBanner?: () => void
  onAskUpdate: () => void
  draft: string
  setDraft: (v: string) => void
  onSend: () => void
}) => (
  <div className="relative flex size-full flex-col justify-between overflow-hidden bg-bg-primary px-4 pb-[104px] pt-[150px]">
    <SoftGlows />
    <StatusBar />
    <NavBar onNewChat={onAskUpdate} />
    <HomeIndicator />
    <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3.5">
          <AnimatedOrb size={56} />
          <div className="flex flex-col gap-1">
            <p className="text-[34px] font-bold leading-[41px] tracking-[0.4px] text-label-primary">
              Good morning, Iryna
            </p>
            <p className="text-[20px] font-semibold leading-[25px] tracking-[-0.45px] text-label-secondary">
              What can I help you with today?
            </p>
          </div>
        </div>
        {showBanner && onDismissBanner ? (
          <ConfirmationTab onDismiss={onDismissBanner} />
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[13px] leading-[18px] tracking-[-0.08px] text-label-secondary">
          Try asking
        </p>
        <div className="grid grid-cols-2 gap-3">
          {SUGGESTIONS.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={onAskUpdate}
              className="flex flex-col items-start gap-1.5 rounded-[26px] border border-glass-stroke bg-glass-fill p-3.5 text-left shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.04] hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)] active:scale-[0.98]"
            >
              <img src={item.icon} alt="" className="size-[22px]" />
              <p className="text-[15px] font-semibold leading-5 tracking-[-0.23px] text-label-primary">
                {item.title}
              </p>
              <p className="text-[13px] leading-[18px] tracking-[-0.08px] text-label-secondary">
                {item.caption}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
    <Composer
      placeholder="Ask anything"
      value={draft}
      onChange={setDraft}
      onSend={onSend}
    />
  </div>
)

export const NewChatScreen = ({ onGoto, draft, setDraft }: ScreenProps) => {
  const handleAsk = () => {
    setDraft(IOS_UPDATE_QUESTION)
    onGoto('typing')
  }

  return (
    <NewChatBase
      onAskUpdate={handleAsk}
      draft={draft}
      setDraft={setDraft}
      onSend={() => {
        if (!draft.trim()) {
          handleAsk()
          return
        }
        onGoto('typing')
      }}
    />
  )
}

export const NewChatUpdatedScreen = ({
  onGoto,
  draft,
  setDraft,
  showBanner,
  setShowBanner,
}: ScreenProps) => {
  const handleAsk = () => {
    setDraft(IOS_UPDATE_QUESTION)
    onGoto('typing')
  }

  return (
    <NewChatBase
      showBanner={showBanner}
      onDismissBanner={() => setShowBanner(false)}
      onAskUpdate={handleAsk}
      draft={draft}
      setDraft={setDraft}
      onSend={() => onGoto('typing')}
    />
  )
}

export const TypingScreen = ({ onGoto, draft, setDraft }: ScreenProps) => (
  <div className="relative size-full overflow-hidden bg-bg-primary">
    <StatusBar />
    <NavBar title="New chat" subtitle="Assistant · placeholder" onNewChat={() => onGoto('new-chat')} />
    <HomeIndicator />
    <div className="absolute inset-x-0 bottom-0 h-[246px] bg-[#d1d3d9] px-1 pt-2">
      <div className="mb-2 grid grid-cols-10 gap-1 px-1">
        {'qwertyuiop'.split('').map((key) => (
          <div
            key={key}
            className="flex h-[42px] items-center justify-center rounded-[8px] bg-white text-[20px] shadow-sm"
          >
            {key}
          </div>
        ))}
      </div>
      <div className="mb-2 flex justify-center gap-1 px-6">
        {'asdfghjkl'.split('').map((key) => (
          <div
            key={key}
            className="flex h-[42px] w-[33px] items-center justify-center rounded-[8px] bg-white text-[20px] shadow-sm"
          >
            {key}
          </div>
        ))}
      </div>
      <div className="mb-2 flex justify-center gap-1 px-12">
        {'zxcvbnm'.split('').map((key) => (
          <div
            key={key}
            className="flex h-[42px] w-[33px] items-center justify-center rounded-[8px] bg-white text-[20px] shadow-sm"
          >
            {key}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onGoto('thinking')}
        className="mx-1 flex h-[42px] w-[calc(100%-8px)] items-center justify-center rounded-[8px] bg-white text-[16px] text-label-secondary shadow-sm"
      >
        space · tap to send
      </button>
    </div>
    <Composer
      className="absolute inset-x-4 bottom-[250px] z-20"
      value={draft || IOS_UPDATE_QUESTION}
      onChange={setDraft}
      onSend={() => onGoto('thinking')}
    />
  </div>
)

export const ThinkingScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative flex size-full flex-col gap-5 overflow-hidden bg-bg-primary px-4 pt-[124px]">
    <StatusBar />
    <NavBar
      title="Installing iOS update"
      subtitle="Assistant · placeholder"
      onNewChat={() => onGoto('new-chat')}
    />
    <HomeIndicator />
    <UserBubble message={IOS_UPDATE_QUESTION} />
    <button
      type="button"
      onClick={() => onGoto('steps')}
      className="flex items-center gap-2.5 self-start"
    >
      <img src="/assets/orb-mark.svg" alt="" className="size-[22px]" />
      <span className="text-[15px] text-label-secondary">Thinking…</span>
      <span className="flex gap-1">
        <span className="size-1.5 animate-pulse rounded-full bg-label-secondary" />
        <span className="size-1.5 animate-pulse rounded-full bg-label-secondary [animation-delay:150ms]" />
        <span className="size-1.5 animate-pulse rounded-full bg-label-secondary [animation-delay:300ms]" />
      </span>
    </button>
    <button
      type="button"
      onClick={() => onGoto('network-fail')}
      className="self-start text-[13px] text-label-tertiary"
    >
      Simulate network fail
    </button>
    <Composer placeholder="Message" readOnly />
  </div>
)

export const NetworkFailScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative flex size-full flex-col gap-5 overflow-hidden bg-bg-primary px-4 pt-[124px]">
    <StatusBar />
    <NavBar
      title="Installing iOS update"
      subtitle="Assistant · placeholder"
      onNewChat={() => onGoto('new-chat')}
    />
    <HomeIndicator />
    <UserBubble message={IOS_UPDATE_QUESTION} />
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-start gap-2.5">
        <img src="/assets/orb-mark.svg" alt="" className="mt-0.5 size-[22px]" />
        <div>
          <p className="text-[15px] font-semibold text-label-primary">Couldn’t connect</p>
          <p className="text-[15px] text-label-secondary">
            Check your network and try again.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onGoto('thinking')}
        className="flex w-fit items-center gap-2 rounded-[14px] bg-bg-secondary px-3 py-2"
      >
        <img src="/assets/icon-regenerate.svg" alt="" className="size-4" />
        <span className="text-[14px] font-semibold text-accent-blue">Retry</span>
      </button>
    </div>
    <Composer placeholder="Message" readOnly />
  </div>
)

const Stagger = ({
  index,
  children,
}: {
  index: number
  children: ReactNode
}) => (
  <div
    className="stagger-in"
    style={{ animationDelay: `${index * 120}ms` }}
  >
    {children}
  </div>
)

export const StepsScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative flex size-full flex-col gap-5 overflow-hidden bg-bg-primary px-4 pt-[124px]">
    <StatusBar />
    <NavBar
      title="Installing iOS update"
      subtitle="Assistant · placeholder"
      onNewChat={() => onGoto('new-chat')}
    />
    <HomeIndicator />
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[120px] bg-gradient-to-b from-white via-white/90 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[130px] bg-gradient-to-t from-white via-white/90 to-transparent" />
    <UserBubble message={IOS_UPDATE_QUESTION} />
    <div className="relative z-[5] flex flex-col gap-3.5 pb-28">
      <Stagger index={0}>
        <AssistantText message="Here's how to update. It takes about 20–30 minutes:" />
      </Stagger>
      <Stagger index={1}>
        <StepItem
          badge="1"
          title="Prepare"
          description="Back up to iCloud, plug in your iPhone, and connect to Wi-Fi."
        />
      </Stagger>
      <Stagger index={2}>
        <StepItem
          badge="2"
          title="Open Software Update"
          description="Go to Settings › General › Software Update."
        />
      </Stagger>
      <Stagger index={3}>
        <StepItem
          badge="3"
          title="Tap Update Now"
          description="Then enter your passcode to start the download."
        />
      </Stagger>
      <Stagger index={4}>
        <StepItem
          badge="4"
          title="Let it restart"
          description="Keep your iPhone charging until it reboots."
        />
      </Stagger>
      <Stagger index={5}>
        <SettingsCard
          title="Software Update"
          caption="Settings · General · Opens directly"
          onClick={() => onGoto('confirmed')}
        />
      </Stagger>
      <Stagger index={6}>
        <ActionRow />
      </Stagger>
      <button
        type="button"
        onClick={() => onGoto('cant-install')}
        className="self-start text-[13px] text-label-tertiary"
      >
        Simulate can’t install
      </button>
    </div>
    <Composer placeholder="Message" readOnly />
  </div>
)

export const CantInstallScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative flex size-full flex-col gap-5 overflow-hidden bg-bg-primary px-4 pt-[124px]">
    <StatusBar />
    <NavBar
      title="Installing iOS update"
      subtitle="Assistant · placeholder"
      onNewChat={() => onGoto('new-chat')}
    />
    <HomeIndicator />
    <UserBubble message={IOS_UPDATE_QUESTION} />
    <div className="flex flex-col gap-3.5 pb-28">
      <AssistantText message="This update can’t be installed right now. Here’s what to try:" />
      <StepItem
        badge="1"
        title="Free up storage"
        description="You need about 8 GB free. Delete unused apps or large videos, then try again."
      />
      <StepItem
        badge="2"
        title="Stay charged on Wi‑Fi"
        description="Plug in your iPhone and connect to a stable Wi‑Fi network before retrying."
      />
      <SettingsCard
        title="Storage Full"
        caption="Settings · General · iPhone Storage"
        onClick={() => onGoto('steps')}
      />
      <ActionRow />
    </div>
    <Composer placeholder="Message" readOnly />
  </div>
)

export const ConfirmedScreen = ({ onGoto }: ScreenProps) => (
  <div className="relative flex size-full flex-col gap-5 overflow-hidden bg-bg-primary px-4 pt-[124px]">
    <StatusBar />
    <NavBar
      title="Installing iOS update"
      subtitle="Assistant · placeholder"
      onNewChat={() => onGoto('new-chat-updated')}
    />
    <HomeIndicator />
    <Stagger index={0}>
      <UserBubble message={IOS_UPDATE_DONE} />
    </Stagger>
    <div className="flex flex-col gap-3.5 pb-28">
      <Stagger index={1}>
        <AssistantText message="You're all set. To double-check:" />
      </Stagger>
      <Stagger index={2}>
        <StepItem
          badge="✓"
          title="Check the version"
          description="Settings › General › About shows the new iOS version."
        />
      </Stagger>
      <Stagger index={3}>
        <StepItem
          badge="✓"
          title="Turn on Automatic Updates"
          description="Software Update › Automatic Updates, so future releases install overnight."
        />
      </Stagger>
      <Stagger index={4}>
        <ActionRow />
      </Stagger>
      <Stagger index={5}>
        <button
          type="button"
          onClick={() => onGoto('new-chat-updated')}
          className="rounded-[14px] bg-black px-4 py-3 text-[15px] font-semibold text-white"
        >
          Back to New chat
        </button>
      </Stagger>
    </div>
    <Composer placeholder="Message" readOnly />
  </div>
)
