"use client"

import {
  Children,
  isValidElement,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 [&_[data-slot=btn-arrow]]:bg-white [&_[data-slot=btn-arrow]]:text-primary",
        light:
          "bg-white text-[#1d81f2] hover:bg-white/92 [&_[data-slot=btn-arrow]]:bg-[#1d81f2] [&_[data-slot=btn-arrow]]:text-white",
        outline:
          "border-border bg-background text-foreground hover:bg-muted [&_[data-slot=btn-arrow]]:bg-brand-500 [&_[data-slot=btn-arrow]]:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] [&_[data-slot=btn-arrow]]:bg-primary [&_[data-slot=btn-arrow]]:text-primary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40 [&_[data-slot=btn-arrow]]:bg-destructive [&_[data-slot=btn-arrow]]:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-3 rounded-full py-1 pr-1 pl-5 text-sm",
        xs: "h-7 gap-2 rounded-full py-0.5 pr-0.5 pl-3 text-xs",
        sm: "h-9 gap-2.5 rounded-full py-1 pr-1 pl-4 text-[0.8rem]",
        lg: "h-12 gap-3 rounded-full py-1.5 pr-1.5 pl-6 text-base",
        icon: "size-8 justify-center rounded-full",
        "icon-xs": "size-6 justify-center rounded-full",
        "icon-sm": "size-7 justify-center rounded-full",
        "icon-lg": "size-9 justify-center rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const arrowSizeMap = {
  default: "size-7",
  xs: "size-5",
  sm: "size-6",
  lg: "size-9",
} as const

const arrowIconMap = {
  default: "size-3.5",
  xs: "size-2.5",
  sm: "size-3",
  lg: "size-4",
} as const

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>

function isIconSize(size: ButtonSize | null | undefined): boolean {
  return Boolean(size?.startsWith("icon"))
}

function shouldShowArrow(
  variant: VariantProps<typeof buttonVariants>["variant"],
  size: ButtonSize | null | undefined,
  arrow: boolean,
) {
  if (!arrow) return false
  if (isIconSize(size)) return false
  if (variant === "link" || variant === "ghost") return false
  return true
}

function stripTrailingIcons(children: ReactNode): ReactNode {
  const items = Children.toArray(children)
  if (items.length === 0) return children

  const last = items[items.length - 1]
  if (
    isValidElement(last) &&
    (last.props as { "data-icon"?: string })?.["data-icon"]?.startsWith(
      "inline-",
    )
  ) {
    return items.slice(0, -1)
  }

  // Drop a trailing Lucide-style svg/icon element often passed as ArrowRight
  if (
    isValidElement(last) &&
    typeof last.type !== "string" &&
    items.length > 1
  ) {
    const typeName =
      typeof last.type === "function"
        ? last.type.name ||
          (last.type as { displayName?: string }).displayName ||
          ""
        : ""
    if (
      typeName.includes("Arrow") ||
      (last.props as { className?: string })?.className?.includes("lucide")
    ) {
      return items.slice(0, -1)
    }
  }

  return children
}

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    href?: string
    /** Show the circular arrow badge. Default: true for main CTA variants. */
    arrow?: boolean
  }

function ButtonArrow({ size }: { size: ButtonSize }) {
  const arrowSize =
    arrowSizeMap[size as keyof typeof arrowSizeMap] ?? arrowSizeMap.default
  const iconSize =
    arrowIconMap[size as keyof typeof arrowIconMap] ?? arrowIconMap.default

  return (
    <span
      data-slot="btn-arrow"
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-out group-hover/button:translate-x-0.5 group-hover/button:scale-110 group-hover/button:shadow-md",
        arrowSize,
      )}
    >
      <ArrowRight
        className={cn(
          "transition-transform duration-300 ease-out group-hover/button:translate-x-0.5",
          iconSize,
        )}
        strokeWidth={2.25}
      />
    </span>
  )
}

function ButtonContent({
  children,
  size,
  showArrow,
}: {
  children: ReactNode
  size: ButtonSize
  showArrow: boolean
}) {
  const label = stripTrailingIcons(children)

  if (!showArrow) {
    return <>{label}</>
  }

  return (
    <>
      <span className="min-w-0 flex-1 text-left leading-none">{label}</span>
      <ButtonArrow size={size} />
    </>
  )
}

function Button({
  className,
  variant = "default",
  size = "default",
  href,
  arrow = true,
  nativeButton,
  render,
  children,
  ...props
}: ButtonProps) {
  const resolvedSize = size ?? "default"
  const showArrow = shouldShowArrow(variant, resolvedSize, arrow)
  const classNames = cn(
    buttonVariants({ variant, size: resolvedSize }),
    showArrow && "justify-between",
    !showArrow && !isIconSize(resolvedSize) && "justify-center px-5",
    className,
  )

  const content = (
    <ButtonContent size={resolvedSize} showArrow={showArrow}>
      {children}
    </ButtonContent>
  )

  if (href) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _ignored, disabled, target, rel, ...anchorProps } =
      props as AnchorHTMLAttributes<HTMLAnchorElement> & {
        type?: string
        disabled?: boolean
      }
    const isExternal = /^https?:\/\//i.test(href)

    return (
      <a
        href={href}
        data-slot="button"
        className={classNames}
        aria-disabled={disabled || undefined}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        {...(anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={classNames}
      nativeButton={nativeButton}
      render={render}
      {...props}
    >
      {content}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
