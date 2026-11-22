import React from 'react';

/**
 * Illustrative UI component.
 * Renders an accessible, color-graded accuracy badge based on identification confidence score.
 * 
 * Note: Sanitized for portfolio review.
 */

interface AccuracyBadgeProps {
  readonly score: number; // 0 to 100
  readonly className?: string;
}

export const AccuracyBadge: React.FC<AccuracyBadgeProps> = ({ score, className = '' }) => {
  const normalizedScore = Math.max(0, Math.min(100, Math.round(score)));

  // Dynamic visual tier mapping
  const badgeStyle = normalizedScore >= 85
    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    : normalizedScore >= 65
    ? 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    : 'bg-amber-500/10 text-amber-400 border-amber-500/20';

  return (
    <div 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold tracking-wide backdrop-blur-md ${badgeStyle} ${className}`}
      role="status"
      aria-label={`Confidence score: ${normalizedScore} percent`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
      <span>{normalizedScore}% Confidence</span>
    </div>
  );
};
