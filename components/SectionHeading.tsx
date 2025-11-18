interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className} reveal`}>
      <h2 className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 mb-6 leading-tight">
        <span className="inline-block animate-fade-in-up">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

