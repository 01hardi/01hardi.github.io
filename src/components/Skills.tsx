import React from 'react';
import { SkillCard } from './skills/SkillCard';

const skills = {
  'Frontend': [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 }
  ],
  'Backend': [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 80 }
  ],
  'Tools & Others': [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 }
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}