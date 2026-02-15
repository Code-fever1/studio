import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', 'aria-label': 'GitHub' },
  { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
];

export function ContactSection() {
  return (
    <section id="contact" className="container py-24 sm:py-32 bg-secondary/50">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          I&apos;m currently open to new opportunities. Feel free to reach out!
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center gap-8">
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <Button key={index} variant="outline" size="icon" asChild className="h-12 w-12 rounded-full">
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                <link.icon className="h-6 w-6" />
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-lg">
          <Mail className="h-6 w-6 text-primary" />
          <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
            alijahinnovates@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
