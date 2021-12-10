import React from 'react';
import Layout from '@theme/Layout';
import CommunityCard from './CommunityCard';
import styles from './Community.module.css';
import { CardDetails } from '../../components/section_card/CardDetails.interface';
import SupportBanner from '../../components/mdx_partials/_SupportBanner.mdx'

const CommunityList: CardDetails[] = [
  {
    title: 'Community Forum',
    svgPath: '/img/community_icons/Forum_Icon.svg',
    description: 'Long-lived conversations about Fluree, feature requests, and ideas.',
    link: 'https://github.com/fluree/db/discussions'
  },
  {
    title: 'Github',
    svgPath: '/img/community_icons/github_logo.svg',
    description: 'Check out our repos and projects to get involved.',
    link: 'https://github.com/fluree'
  },
  {
    title: 'Reddit',
    svgPath: '/img/community_icons/Reddit_icon.svg',
    description: 'Ask and answer questions on the r/Fluree page!',
    link: 'https://www.reddit.com/r/Fluree/'
  },
  {
    title: 'Slack',
    svgPath: '/img/community_icons/slack_icon.svg',
    description: 'Join community members and Fluree teammates for realtime chat. ',
    link: 'https://launchpass.com/flureedb'
  },
  {
    title: 'Support',
    svgPath: '/img/community_icons/Email_icon.svg',
    description: 'Contact our support team to get in-depth help running Fluree. ',
    link: 'mailto:support@flur.ee'
  }
];

export default function Community(): JSX.Element {
  return (
    <Layout>
      <div className={styles.community}>
        <section className="container">
          <section className="row">
            {CommunityList.map((props, idx) => (
              <CommunityCard key={idx} {...props} />
            ))}
          </section>
        </section>
      </div>
      <section 
        style={{
          margin: '0px 1rem 6rem 1rem'
        }}>
        <SupportBanner discussionBoard="community discussion board" supportEmail="support@flur.ee." />
      </section>
    </Layout>
  );
}
