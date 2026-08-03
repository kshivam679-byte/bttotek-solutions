import { cn } from '@/lib/utils'

type AdSlotProps = {
  label?: string
  className?: string
  /** Visual height hint for the placeholder */
  format?: 'leaderboard' | 'rectangle' | 'horizontal'
}

/**
 * AdSense-friendly reserved ad container.
 * Reserves layout space (prevents CLS) and is clearly labeled per policy.
 * Drop your <ins class="adsbygoogle"> markup inside when monetizing.
 */
export function AdSlot({ label = 'Advertisement', className, format = 'horizontal' }: AdSlotProps) {
  const heights = {
    leaderboard: 'h-24 sm:h-28',
    rectangle: 'h-64',
    horizontal: 'h-24 sm:h-32',
  }

  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      <div
        className={cn(
          'flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 text-center',
          heights[format],
        )}
        role="complementary"
        aria-label={label}
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
          {label}
        </span>
        <span className="mt-1 text-xs text-muted-foreground/60">Ad space reserved</span>
      </div>
    </div>
  )
}
