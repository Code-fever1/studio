import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = {
  'Languages': ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'SQL'],
  'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Vite'],
  'Backend': ['Node.js', 'Express', 'Firebase', 'PostgreSQL', 'REST APIs'],
  'Tools & Platforms': ['Git', 'GitHub', 'Docker', 'Vercel', 'Jira'],
};

export function SkillsSection() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A collection of technologies I&apos;m proficient with.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
