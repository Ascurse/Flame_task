import { ReactNode } from 'react';

export default interface HyperlinkCardProps {
  children: ReactNode;
  href: string;
  color?: string;
}
