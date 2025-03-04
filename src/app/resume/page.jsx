import Link from 'next/link'
import { Card } from '@/components/Card'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
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
        'Focused on pre-sales, partner engagement, and enterprise data solutions, working with big names like Snowflake, Databricks, and AWS. Built expertise in data analytics and AI, helping large enterprises modernise their data architectures.',
      logo: null,
      date: 'Dec 2022 — Dec 2024',
    },
    {
      company: 'Deloitte',
      title: 'Senior Consultant',
      description:
        'Delivered key projects in technology strategy and transformation, including a major COVID-19 engagement. Wore multiple hats as a Business Analyst, Technical Lead, and Functional Lead, working across different public sector projects.',
      logo: null,
      date: 'Feb 2020 - Nov 2022',
    },
  ],
  education: [
    {
      company: 'University of Otago',
      title: 'Bachelor of Commerce, Information Science',
      description:
        'Studied information systems, business intelligence, and data analytics, developing skills in data modelling, software development, and enterprise IT.',
      logo: null,
      date: 'Feb 2015 - Nov 2019',
    },
    {
      company: 'Otaru University of Commerce',
      title: 'Bachelor of Commerce (Exchange)',
      description:
        'Spent six months in Japan studying business, law, and economics, gaining global perspectives and adapting to a new academic environment and culture.',
      logo: null,
      date: 'Feb 2018 - Aug 2018',
    },
    {
      company: 'University of Otago',
      title: 'Bachelor of Science, Computer Science',
      description:
        'Focused on software engineering, algorithms, and computational theory, gaining hands-on experience with programming and system design.',
      logo: null,
      date: 'Feb 2015 - Nov 2017',
    },
  ],
  awards: [
    {
      company: 'New Zealand Government',
      title: 'COVID-19 Response Recognition Award',
      description:
        'Awarded for contributions to New Zealand’s COVID-19 response, recognising efforts in public sector support.',
      logo: null,
      date: 'May 2023',
    },
    {
      company: 'University of Otago',
      title: 'Scholarship in Commerce',
      description:
        'Merit-based scholarship awarded for academic excellence in BCom (Information Science) studies, supporting post-graduate education at the University of Otago.',
      logo: null,
      date: 'Nov 2019',
    },
    {
      company: 'Education New Zealand',
      title: "Prime Minister's Scholarship for Asia",
      description:
        'Government-funded scholarship supporting study and cultural exchange to Japan, awarded to high-achieving students for international learning experiences.',
      logo: null,
      date: 'Dec 2017',
    },
    {
      company: 'Japan Student Services Organisation (JASSO)',
      title: 'JASSO Scholarship',
      description:
        'Awarded by JASSO to support international students studying in Japan, recognising academic achievement and fostering global education.',
      logo: null,
      date: 'Dec 2017',
    },
    {
      company: 'University of Otago',
      title: 'Scholarship in Science',
      description:
        'Merit-based scholarship awarded for academic excellence in BSc (Computer Science) studies, supporting spost-graduate education at the University of Otago',
      logo: null,
      date: 'Dec 2017',
    },
    {
      company: 'University of Otago',
      title: "Dean's List",
      description:
        'Recognition for outstanding academic performance, awarded to students in the top percentage of their cohort at the University of Otago.',
      logo: null,
      date: 'Nov 2015, Nov 2016',
    },
    {
      company: 'University of Otago',
      title: 'Dux Scholarship',
      description:
        'Awarded to the highest-achieving student in secondary school, recognising exceptional academic performance across multiple subjects.',
      logo: null,
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
  title: 'Resume',
  description: 'A bit about what I do.',
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
        strokeLinecap="round"
        strokeLinejoin="round"
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
        intro="This page gives a quick overview of my experience, education, and awards I’m proud of. For a more comprehensive view, check out my LinkedIn, and for my (public) projects, head over to the Projects page — I'm working on making more of my personal projects visible!"
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
