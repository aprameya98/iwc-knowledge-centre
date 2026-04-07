import { AlertCircle, Lightbulb, Info, AlertTriangle, type LucideProps } from 'lucide-react';
import type { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

type CalloutType = 'important' | 'tip' | 'note' | 'warning';

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;

const config: Record<CalloutType, { icon: LucideIcon; label: string; iconColor: string; borderColor: string; bg: string; labelColor: string }> = {
  important: { icon: AlertCircle, label: 'Important', iconColor: '#f1592b', borderColor: '#f1592b', bg: '#fff8f6', labelColor: '#f1592b' },
  tip:       { icon: Lightbulb,   label: 'Tip',       iconColor: '#3ac0c5', borderColor: '#3ac0c5', bg: '#f0fafa', labelColor: '#3ac0c5' },
  note:      { icon: Info,        label: 'Note',       iconColor: '#1E534B', borderColor: '#1E534B', bg: '#f0f7f5', labelColor: '#1E534B' },
  warning:   { icon: AlertTriangle, label: 'Warning',  iconColor: '#d97706', borderColor: '#d97706', bg: '#fffbeb', labelColor: '#d97706' },
};

export default function Callout({ type, children }: { type: CalloutType; children: ReactNode }) {
  const { icon: Icon, label, iconColor, borderColor, bg, labelColor } = config[type];
  return (
    <div className="rounded-lg p-4 my-5" style={{ backgroundColor: bg, borderLeft: `3px solid ${borderColor}` }} role="note" aria-label={label}>
      <div className="flex items-start gap-2.5">
        <Icon size={16} color={iconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
        <div>
          <span className="text-sm font-bold mr-1.5" style={{ color: labelColor }}>{label}.</span>
          <span className="text-sm" style={{ color: '#434343', lineHeight: 1.65 }}>{children}</span>
        </div>
      </div>
    </div>
  );
}
