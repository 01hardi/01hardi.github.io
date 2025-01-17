import React from 'react';
import {
  Blocks,
  Code2,
  Database,
  FileCode2,
  Github,
  Globe,
  Layout,
  Server,
  Settings,
  Terminal,
  Type,
  Container
} from 'lucide-react';

type SkillIconProps = {
  name: string;
  size?: number;
  className?: string;
};

const iconMap: Record<string, React.ComponentType<any>> = {
  'React': Blocks,
  'TypeScript': FileCode2,
  'Next.js': Globe,
  'Tailwind CSS': Layout,
  'Node.js': Server,
  'Express': Terminal,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'Git': Github,
  'Docker': Container,
  'AWS': Settings,
  'CI/CD': Code2
};

export function SkillIcon({ name, size = 24, className = '' }: SkillIconProps) {
  const Icon = iconMap[name] || Type;
  return <Icon size={size} className={className} />;
}