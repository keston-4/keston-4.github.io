import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

//import url constants from common.js
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/common'

const content = {
  experience: [
    {
      company: 'Qrious',
      title: 'Solution Consultant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoPlanetaria,
      date: 'Dec 2022 — Present',
    },
    {
      company: 'Deloitte',
      title: 'Senior Consultant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoAirbnb,
      date: 'Feb 2020 - Nov 2022',
    },
    {
      company: 'FNZ',
      title: 'Software Engineer (Intern)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoFacebook,
      date: 'Nov 2019 - Feb 2020',
    },
    {
      company: 'University of Otago',
      title: 'Student IT Adviser',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoStarbucks,
      date: 'Jan 2019 - Dec 2019',
    },
    {
      company: 'Deloitte',
      title: 'Consultant (Intern)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoStarbucks,
      date: 'Nov 2018 - Feb 2019',
    },
    {
      company: 'Foodstuff North Island',
      title: 'Software Engineer (Intern)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoStarbucks,
      date: 'Nov 2017 - Feb 2018',
    },
  ],
  education: [
    {
      company: 'University of Otago',
      title: 'Bachelor of Commerce, Information Science',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoPlanetaria,
      date: 'Feb 2015 - Nov 2019',
    },
    {
      company: 'Otaru University of Commerce',
      title: 'Bachelor of Commerce (Exchange)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoAirbnb,
      date: 'Feb 2018 - Aug 2018',
    },
    {
      company: 'University of Otago',
      title: 'Bachelor of Science, Computer Science',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoFacebook,
      date: 'Feb 2015 - Nov 2017',
    },
  ],
  awards: [
    {
      company: 'New Zealand Government',
      title: 'COVID-19 Response Recognition Award',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoPlanetaria,
      date: 'May 2023',
    },
    {
      company: 'University of Otago',
      title: 'Scholarship in Commerce',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoFacebook,
      date: 'Nov 2019',
    },
    {
      company: 'Education New Zealand',
      title: "Prime Minister's Scholarship for Asia",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoAirbnb,
      date: 'Dec 2017',
    },
    {
      company: 'Japan Student Services Organisation (JASSO)',
      title: 'JASSO Scholarship',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoFacebook,
      date: 'Dec 2017',
    },
    {
      company: 'University of Otago',
      title: 'Scholarship in Science',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoFacebook,
      date: 'Dec 2017',
    },
    {
      company: 'University of Otago',
      title: "Dean's List",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoFacebook,
      date: 'Nov 2015, Nov 2016',
    },
    {
      company: 'University of Otago',
      title: 'Dux Scholarship',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci.',
      logo: logoFacebook,
      date: 'Feb 2015',
    },
  ],
}

function ToolsSection({ colour, icon, children, ...props }) {
  return (
    <Section colour={colour} {...props} icon={icon}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, subleft, subright, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Subtitle left={subleft} right={subright} />
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function EducationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function SocialLinks() {
  return (
    <div className="mt-6 flex gap-6">
      <SocialLink
        href={GITHUB_URL}
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        href={LINKEDIN_URL}
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <SimpleLayout
        title="Resume"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ante eget imperdiet feugiat. Proin ullamcorper, est nec mattis bibendum, dolor tellus euismod tortor, vitae dictum ante turpis eget leo. Suspendisse vestibulum vitae ligula sed porta. Duis luctus risus sed pretium dapibus. Quisque sapien lacus, tristique et dignissim non, tincidunt eu elit. Ut a auctor orci."
        social={<SocialLinks />}
      >
        <div className="space-y-20">
          <ToolsSection title="Experience" colour="border-blue-500">
            {content.experience.map((item, index) => (
              <Tool
                title={item.company}
                subleft={item.title}
                subright={item.date}
                key={index}
              >
                {item.description}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Education" colour="border-blue-500">
            {content.education.map((item, index) => (
              <Tool
                title={item.company}
                subleft={item.title}
                subright={item.date}
                key={index}
              >
                {item.description}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Awards & Honours" colour="border-blue-500">
            {content.awards.map((item, index) => (
              <Tool
                title={item.company}
                subleft={item.title}
                subright={item.date}
                key={index}
              >
                {item.description}
              </Tool>
            ))}
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
