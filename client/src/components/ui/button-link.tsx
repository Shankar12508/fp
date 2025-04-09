import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonLinkVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-[#39FF14] hover:bg-[#32D612] text-[#0F2E4C] shadow-lg transform transition-transform hover:translate-y-[-2px]",
                outline: "bg-transparent border-2 border-white hover:border-[#39FF14] text-white hover:text-[#39FF14]",
                secondary: "bg-[#1E3E5C] text-white hover:bg-[#2a4e6e]",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                xl: "h-12 rounded-md px-6 py-3 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonLinkVariants> {
    href: string;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <a
                className={cn(buttonLinkVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink, buttonLinkVariants };
