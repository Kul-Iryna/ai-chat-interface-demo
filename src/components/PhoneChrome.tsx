import type { ReactNode } from 'react'

type StatusBarProps = {
  light?: boolean
}

export const StatusBar = ({ light = false }: StatusBarProps) => {
  const text = light ? 'text-white' : 'text-label-primary'

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[54px] items-start justify-between pl-[52px] pr-[36px] pt-[21px]">
      <p className={`text-[17px] font-semibold leading-[22px] tracking-[-0.43px] ${text}`}>
        9:41
      </p>
      <img
        src="/assets/levels.svg"
        alt=""
        className={`h-[13px] w-[78px] ${light ? 'brightness-0 invert' : ''}`}
      />
      <div className="absolute left-[139px] top-[11px] h-[37px] w-[124px] rounded-full bg-black" />
    </div>
  )
}

export const HomeIndicator = () => (
  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex h-[34px] items-end justify-center pb-2">
    <div className="h-[5px] w-[139px] rounded-full bg-black" />
  </div>
)

type GlassButtonProps = {
  src: string
  label: string
  onClick?: () => void
}

export const GlassButton = ({ src, label, onClick }: GlassButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="flex size-11 items-center justify-center rounded-full border border-glass-stroke bg-glass-fill shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
  >
    <img src={src} alt="" className="size-6" />
  </button>
)

type NavBarProps = {
  title?: string
  subtitle?: string
  onMenu?: () => void
  onNewChat?: () => void
}

export const NavBar = ({ title, subtitle, onMenu, onNewChat }: NavBarProps) => (
  <div className="absolute inset-x-0 top-[54px] z-20 flex h-14 items-center justify-between px-4">
    <GlassButton src="/assets/icon-menu.svg" label="Open menu" onClick={onMenu} />
    <div className="flex flex-col items-center">
      {title ? (
        <>
          <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-label-primary">
            {title}
          </p>
          {subtitle ? (
            <p className="text-[12px] leading-4 text-label-secondary">{subtitle}</p>
          ) : null}
        </>
      ) : null}
    </div>
    <GlassButton src="/assets/icon-new.svg" label="New chat" onClick={onNewChat} />
  </div>
)

type ComposerProps = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSend?: () => void
  readOnly?: boolean
  className?: string
}

export const Composer = ({
  placeholder = 'Ask anything',
  value,
  onChange,
  onSend,
  readOnly,
  className = 'absolute inset-x-4 bottom-[34px] z-20',
}: ComposerProps) => (
  <div className={`${className} flex items-center gap-2.5`}>
    <button
      type="button"
      aria-label="Attach"
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-glass-stroke bg-glass-fill shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
    >
      <img src="/assets/icon-plus.svg" alt="" className="size-6" />
    </button>
    <div className="flex h-11 min-w-0 flex-1 items-center gap-2.5 rounded-full border border-glass-stroke bg-glass-fill pl-4 pr-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
      {onChange ? (
        <input
          aria-label="Message"
          className="min-w-0 flex-1 bg-transparent text-[17px] leading-[22px] tracking-[-0.43px] text-label-primary outline-none placeholder:text-label-tertiary"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSend?.()
          }}
          readOnly={readOnly}
        />
      ) : (
        <p className="min-w-0 flex-1 truncate text-[17px] leading-[22px] tracking-[-0.43px] text-label-tertiary">
          {value || placeholder}
        </p>
      )}
      <span className="waveform-icon inline-flex size-[22px] shrink-0 items-center justify-center gap-[2.5px]" aria-hidden>
        <span className="waveform-bar" />
        <span className="waveform-bar" />
        <span className="waveform-bar" />
        <span className="waveform-bar" />
        <span className="waveform-bar" />
      </span>
      <button
        type="button"
        aria-label="Send"
        onClick={onSend}
        className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-black"
      >
        <img src="/assets/icon-arrow-up.svg" alt="" className="size-5" />
      </button>
    </div>
  </div>
)

export const PhoneShell = ({ children }: { children: ReactNode }) => (
  <div className="relative h-[874px] w-[402px] overflow-hidden rounded-[40px] border-[8px] border-[#1c1c1e] bg-bg-primary shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
    {children}
  </div>
)
