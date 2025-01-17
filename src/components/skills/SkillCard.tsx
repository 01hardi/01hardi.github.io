import React from 'react';
import { SkillIcon } from './SkillIcon';

type SkillCardProps = {
  name: string;
  level: number;
};

export function SkillCard({ name, level }: SkillCardProps) {
  const getExperienceLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Familiar';
  };

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-50 rounded-lg">
        <SkillIcon name={name} className="text-blue-600" />
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{getExperienceLabel(level)}</p>
      </div>
    </div>
  );
}