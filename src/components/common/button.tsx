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
    '"inline-flex items-center justify-center rounded-full px-6 py-3  text-sm font-semibold transition-colors duration-200";';

  const variantStyles = {
    primary: "bg-black text-[#F2EAE1] hover:bg-[#3157FF]",
    secondary:
      "border border-[#E4E0DA] bg-white text-[#121211] hover:bg-[#F5F4F1]",
    outline:
      "border border-[#121211] bg-transparent text-[#121211] hover:bg-[#121211] hover:text-white",
  };

  const variantSize = {
    sm: " px-4 text-xs",
    md: "py-2 px-5 text-sm",
    lg: "py-4 px-8 text-sm w-40 font-semibold font-body",
  };

  return (
    <div>
      <button
        className={`${baseStyle} ${variantStyles[variant]} ${variantSize[size]} ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
