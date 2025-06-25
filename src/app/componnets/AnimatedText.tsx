import React from 'react'
interface IAnimatedText {
    animationInfo: string
    className?: string
}
const AnimatedText: React.FC<IAnimatedText> = ({ animationInfo, className = '' }) => {
  return (
    <div>
        <span className="bg-green-100 text-green-800 p-2 font-mono text-sm md:text-base whitespace-pre-wrap break-words">
            {animationInfo}
        </span>
    </div>
  )
}
export default AnimatedText