type UserBubbleProps = {
  message: string
}

export const UserBubble = ({ message }: UserBubbleProps) => (
  <div className="flex w-full justify-end">
    <div className="max-w-[270px] rounded-[20px] bg-accent-blue px-3.5 py-2.5">
      <p className="text-[17px] leading-[22px] tracking-[-0.43px] text-white whitespace-pre-wrap">
        {message}
      </p>
    </div>
  </div>
)

type AssistantTextProps = {
  message: string
}

export const AssistantText = ({ message }: AssistantTextProps) => (
  <p className="w-full text-[17px] leading-[22px] tracking-[-0.43px] text-label-primary">
    {message}
  </p>
)

type StepItemProps = {
  badge: string
  title: string
  description: string
}

export const StepItem = ({ badge, title, description }: StepItemProps) => (
  <div className="flex w-full items-start gap-3">
    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fill-secondary">
      <span className="text-[12px] font-medium leading-4 text-label-primary">{badge}</span>
    </div>
    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
      <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-label-primary">
        {title}
      </p>
      <p className="text-[16px] leading-[21px] tracking-[-0.31px] text-label-secondary">
        {description}
      </p>
    </div>
  </div>
)

type SettingsCardProps = {
  title: string
  caption: string
  onClick?: () => void
}

export const SettingsCard = ({ title, caption, onClick }: SettingsCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-center gap-2 rounded-[20px] bg-bg-secondary px-3.5 pb-3 pt-2.5 text-left"
  >
    <div className="min-w-0 flex-1">
      <p className="text-[15px] font-semibold leading-5 tracking-[-0.23px] text-label-primary">
        {title}
      </p>
      <p className="text-[13px] leading-[18px] tracking-[-0.08px] text-label-secondary">
        {caption}
      </p>
    </div>
    <img src="/assets/icon-chevron.svg" alt="" className="size-[18px] shrink-0" />
  </button>
)

export const ActionRow = () => (
  <div className="flex items-center gap-5 py-1">
    <img src="/assets/icon-copy.svg" alt="" className="size-5" />
    <img src="/assets/icon-regenerate.svg" alt="" className="size-5" />
    <img src="/assets/icon-share.svg" alt="" className="size-5" />
    <img src="/assets/icon-thumb-up.svg" alt="" className="size-5" />
    <img src="/assets/icon-thumb-down.svg" alt="" className="size-5" />
  </div>
)

type ConfirmationTabProps = {
  onDismiss: () => void
}

export const ConfirmationTab = ({ onDismiss }: ConfirmationTabProps) => (
  <div className="flex w-full items-center gap-3 rounded-[18px] bg-bg-secondary px-3.5 py-3">
    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-blue text-[15px] font-semibold text-white">
      ✓
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[15px] font-semibold leading-5 tracking-[-0.23px] text-label-primary">
        iOS settings updated
      </p>
      <p className="text-[13px] leading-[18px] tracking-[-0.08px] text-label-secondary">
        Your system device settings were updated successfully.
      </p>
    </div>
    <button
      type="button"
      aria-label="Dismiss confirmation"
      onClick={onDismiss}
      className="flex size-7 shrink-0 items-center justify-center"
    >
      <img src="/assets/icon-xmark.svg" alt="" className="size-[18px]" />
    </button>
  </div>
)
