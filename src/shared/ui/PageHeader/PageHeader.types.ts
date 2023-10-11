import { ReactNode } from 'react';

export default interface PageHeaderProps {
  leftContentSlot?: ReactNode;
  middleContentSlot?: ReactNode;
  rightContentSlot?: ReactNode;
}
