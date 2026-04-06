import { AlertCircle, Lightbulb, Info, AlertTriangle, type LucideProps } from 'lucide-react';
import type { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

type CalloutType = 'important' | 'tip' | 'note' | 'warning';

interface CalloutProps {
  type: CalloutType;
  children: ReactNode;
}

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;

const config: Record<CalloutType, {
  icon: LucideIcon;
  label: string;
  iconColor: string;
  borderColor: string;
  bg: string;
}> = {
  important: { icon: AlertCircle, label: 'Important', iconColor: '#E85C2C', borderColor: '#E85C2C', bg: '#FFF7F0' },
  tip: { icon: Lightbulb, label: 'Tip', iconColor: '#2CBFBF', borderColor: '#2CBFBF', bg: '#F0FAFA' },
  note: { icon: Info, label: 'Note', iconColor: '#6B7280', borderColor: '#D1D5DB', bg: '#F9FAFB' },
  warning: { icon: AlertTriangle, label: 'Warning', iconColor: '#F59E0B', borderColor: '#F59E0B', bg: '#FFFBEB' },
};

export default function Callout({ type, children }: CalloutProps) {
  const { icon: Icon, label, iconColor, borderColor, bg } = config[type];
  return (
    <div className="rounded-lg p-4 my-4" style={{ backgroundColor: bg, borderLeft: `3px solid ${borderColor}` }} role="note" aria-label={`${label}: `}>
      <div className="flex items-start gap-2.5">
        <Icon size={16} color={iconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
        <div>
          <span className="text-sm font-semibold mr-1.5" style={{ color: iconColor }}>{label}.</span>
          <span className="text-sm" style={{ color: '#374151', lineHeight: '1.6' }}>{children}</span>
        </div>
      </div>
    </div>
  );
}
