import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { width: 160, height: 40 },
    md: { width: 200, height: 50 },
    lg: { width: 240, height: 60 },
  }

  const { width, height } = sizeClasses[size]

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/logo-final.png"
        alt="등기히어로 로고"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}
