import { HeartIcon } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'Funasitien',
  repo: 'docuception',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Funasitien's Wiki",
    },
    links: [
      {
        icon: <HeartIcon />,
        text: 'Support my work',
        url: '/blog',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
