import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        border:
          "bg-white rounded-full text-12-18-600 text-gray-01 py-[3px] px-[24px] min-h-[34px]",
      },
      size: {
        default: "h-10 px-[28px] py-[12px] min-h-[42px]",
        sm: "h-[34px] min-h-[34px]",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      styling: {
        default: "",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      styling: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, styling, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (variant === "border") {
      return (
        <div
          style={{
            boxShadow: "0px 4px 6px -2px #10182808",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(156.52deg, rgba(0, 0, 0, 0.4) 2.12%, rgba(0, 0, 0, 0.0001) 39%, rgba(0, 0, 0, 0.0001) 54.33%, rgba(0, 0, 0, 0.1) 93.02%)",
          }}
          className="p-[1px] relative rounded-full w-fit"
        >
          <Comp
            className={cn(
              buttonVariants({ variant, size, styling, className })
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, styling, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
