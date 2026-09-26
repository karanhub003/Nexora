type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export default function button({
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const baseStyle =
    '"flex item-center justify-center rounded-lg  text-sm font-semibold transition-colors duration-200";';

  const variantStyles = {
    primary: "bg-black text-[#F2EAE1] hover:bg-[#3157FF]",
    secondary:
      " bg-white text-[#121211] hover:bg-[#3157FF] hover:text-white",
    outline:
      "border border-[#121211] bg-transparent text-[#121211] hover:bg-[#121211] hover:text-white",
  };

  const variantSize = {
    sm: " px-4 text-xs font-medium font-body rounded-lg",
    md: "py-3 px-5 text-sm font-medium font-body rounded-full",
    lg: "py-4 px-8 text-sm  font-semibold font-body rounded-lg",
  };

  return (
    <div className={`${baseStyle}`}>
      <button
        className={`${variantStyles[variant]} ${variantSize[size]} ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
