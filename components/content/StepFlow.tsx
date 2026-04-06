'use client';

import { useEffect, useRef, useState } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepFlowProps {
  steps: Step[];
}

export default function StepFlow({ steps }: StepFlowProps) {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (animatedRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps(prev => new Set([...Array.from(prev), i]));
            }, i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [steps]);

  return (
    <div ref={containerRef} className="my-8">
      {steps.map((step, i) => {
        const isVisible = visibleSteps.has(i);
        return (
          <div key={step.number} className="flex gap-4">
            {/* Left column: circle + line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                style={{
                  backgroundColor: '#F3F4F6',
                  color: '#1A1A1A',
                  border: '1px solid #E5E5E3',
                  fontSize: '13px',
                }}
              >
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="flex-1 w-px mt-1 mb-1"
                  style={{ backgroundColor: '#E5E5E3', minHeight: '24px' }}
                />
              )}
            </div>

            {/* Right column: content */}
            <div
              className="flex-1 pb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 300ms ease, transform 300ms ease',
              }}
            >
              <h3
                className="mt-0.5 mb-1"
                style={{ fontSize: '17px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.4 }}
              >
                {step.title}
              </h3>
              <p className="mb-0" style={{ color: '#6B7280', lineHeight: '1.7', fontSize: '15px' }}>
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
