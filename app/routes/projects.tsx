import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { HeadingIcon, HomeIcon } from 'lucide-react';
import { Callout } from 'fumadocs-ui/components/callout';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions()}>{children}
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Callout title="Docuception is still work in progress" type="warn">
            While we are moving from quartz to fuma, some projects will not be ported (yet). Thank you for your patience!
        </Callout>
        <p className="text-sm text-gray-600 mt-2">Here are the different projects documented on docuception.</p>

        <Cards className="my-6">
            <Card icon={<HeadingIcon />} href="/docs/headschat" title="HeadsChat">
                Minecraft chat plugin that take advantage of the new Minecraft's 1.21.9+ head components.
            </Card>
            <Card icon={<HomeIcon />} href="/" title="Wip">
                I'll port every docuception section as soon as I have time.
            </Card>
        </Cards>

        <h1 className="text-2xl font-semibold">About Docuception</h1>
        
    
        <GithubInfo
        className='my-2'
        owner="Funasitien"
        repo="docuception"
        />
    </div>
</HomeLayout>;
}
