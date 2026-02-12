import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "dark" | "white"
}

export function Section({
  className,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        {
          "bg-background text-foreground": variant === "default",
          "bg-[#11214C] text-white": variant === "dark",
          "bg-white text-foreground": variant === "white",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
