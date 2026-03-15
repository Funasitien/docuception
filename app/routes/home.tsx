import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Welcome to Docuception</h1>
          <p className="text-lg text-fd-muted-foreground mb-8">
            A centralized collection of projects, notes, and demos. 
            Click on the button bellow to select a project to learn more about.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 bg-fd-primary text-fd-primary-foreground px-5 py-3 rounded-full font-semibold"
            >
              See Projects
            </Link>

          </div>
        </div>

      </div>
    </HomeLayout>
  );
}
