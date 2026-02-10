import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'Project One',
    description: 'A brief description of project one, highlighting the technologies used and its purpose. This project solves a real-world problem by doing XYZ.',
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description: 'A brief description of project two, highlighting the technologies used and its purpose. This project showcases advanced frontend techniques.',
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description: 'A brief description of project three, highlighting the technologies used and its purpose. A full-stack application with a custom API.',
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Project Four',
    description: 'A brief description of project four, highlighting the technologies used and its purpose. Focuses on performance and accessibility.',
    image: PlaceHolderImages.find(p => p.id === 'project-4'),
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-24 sm:py-32 bg-secondary/50">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Check out some of the projects I&apos;ve worked on.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/20 hover:shadow-2xl">
            {project.image && (
              <CardHeader className="p-0">
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  width={600}
                  height={400}
                  className="w-full object-cover aspect-[3/2]"
                  data-ai-hint={project.image.imageHint}
                />
              </CardHeader>
            )}
            <CardContent className="p-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button asChild>
                <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
