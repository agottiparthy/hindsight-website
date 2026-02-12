import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide"
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        {
          "max-w-6xl": size === "default",
          "max-w-4xl": size === "narrow",
          "max-w-7xl": size === "wide",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
