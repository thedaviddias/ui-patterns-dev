/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs';

const TITLE_WITH_TRANSLATIONS = {
  'en-US': 'Livepeer Documentation',
} as const;

const EDIT_LINK_WITH_TRANSLATIONS = {
  'en-US': 'Edit this page on GitHub →',
} as const;

const config: DocsThemeConfig = {
  logo: <span>UI Patterns for developers</span>,
  project: {
    link: 'https://github.com/thedaviddias/ui-reference',
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – UI Patterns for developers'
    }
  },
  banner: {
    key: '2.0-release',
    text: <a href="#" target="_blank">
      🎉 UI Patterns for dev just came out! Read more →
    </a>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) =>
      type === 'separator' ? (
        <div className="flex items-center gap-2">
          {title}
        </div>
      ) : (
        <>{title}</>
      ),
  },
  editLink: {
    text() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter();
      return (
        <>
          {
            EDIT_LINK_WITH_TRANSLATIONS[
            (locale as keyof typeof EDIT_LINK_WITH_TRANSLATIONS) ?? 'en-US'
            ]
          }
        </>
      );
    },
  },
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://thedaviddias.dev" target="_blank">David Dias</a> and the open-source community.
    </span>
  },
  i18n: [{ locale: 'en', text: 'English' }, { locale: 'fr', text: 'Français' }],
  gitTimestamp: ({ timestamp }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
}


export default config;
