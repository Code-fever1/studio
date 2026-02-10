import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi, I&apos;m <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-2xl font-medium text-muted-foreground">
              A Passionate Web Developer
            </h2>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
            I build beautiful, responsive, and user-friendly websites and applications. Here&apos;s a showcase of my work and skills.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {aboutMeImage && (
            <Image
              src={aboutMeImage.imageUrl}
              alt={aboutMeImage.description}
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              data-ai-hint={aboutMeImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
