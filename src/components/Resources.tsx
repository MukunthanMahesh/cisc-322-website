import { HiMiniCpuChip, HiMiniBookOpen, HiMiniPlayCircle } from 'react-icons/hi2';
import ResourceCard from './ResourceCard';

export default function Resources() {
  return (
    <section
      id="resources"
      className="py-20 flex flex-col items-center"
    >
      <div className="text-center max-w-5xl w-full mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 font-editorial uppercase">
          Resources
        </h2>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <ResourceCard
            title="Core"
            icon={HiMiniCpuChip}
            links={[
              {
                href: 'https://github.com/google-gemini/gemini-cli',
                label: 'Gemini CLI GitHub Repository',
              },
              {
                href: 'https://geminicli.com/docs/',
                label: 'Gemini CLI Documentation',
              },
            ]}
          />

          <ResourceCard
            title="Reference"
            icon={HiMiniBookOpen}
            links={[
              {
                href: 'https://codelabs.developers.google.com/gemini-cli-hands-on#0',
                label: 'Hands-on Tutorial',
              },
              {
                href: 'https://medium.com/@jalateras/unpacking-the-gemini-cli-a-high-level-architectural-overview-99212f6780e7',
                label: 'Initial-Architecture Overview',
              },
            ]}
          />

          <ResourceCard
            title="Media"
            icon={HiMiniPlayCircle}
            links={[
              {
                href: 'https://www.youtube.com/watch?v=QzJufbGhTeI',
                label: 'Gemini CLI Functionality Demo',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
