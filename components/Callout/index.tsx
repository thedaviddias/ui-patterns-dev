import { CheckCircleIcon } from '@heroicons/react/24/solid'
import ErrorIcon from '@heroicons/react/24/solid/ExclamationCircleIcon'
import WarningIcon from '@heroicons/react/24/solid/ExclamationTriangleIcon'
import InformationCircleIcon from '@heroicons/react/24/solid/InformationCircleIcon'
import LightBulbIcon from '@heroicons/react/24/solid/LightBulbIcon'
import { ReactNode } from 'react'

const themes = {
  info: {
    classes:
      'bg-blue-100 text-blue-800 dark:text-blue-300 dark:bg-blue-200 dark:bg-opacity-20',
    icon: <InformationCircleIcon className="w-5 h-5 mt-1" />,
  },
  idea: {
    classes:
      'bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-gray-200 dark:bg-opacity-20',
    icon: <LightBulbIcon className="w-5 h-5 mt-1" />,
  },
  error: {
    classes:
      'bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30',
    icon: <ErrorIcon className="w-5 h-5 mt-1" />,
  },
  default: {
    classes:
      'bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-20',
    icon: <WarningIcon className="w-5 h-5 mt-1" />,
  },
  green: {
    classes:
      'bg-green-100 text-green-800 dark:text-green-300 dark:bg-green-200 dark:bg-opacity-20',
    icon: <CheckCircleIcon className="w-5 h-5 mt-1" />,
  },
}

type ThemeKey = keyof typeof themes

type CalloutProps = {
  children: ReactNode
  type?: ThemeKey
  emoji?: ReactNode
}
export const Callout = ({ children, type = 'default', emoji }: CalloutProps) => {
  const theme = themes[type] || themes.default

  return (
    <div className={`${theme.classes} flex rounded-lg callout mt-6 overflow-scroll`}>
      <div
        className="py-2 pl-3 pr-2 text-xl select-none"
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji || theme.icon}
      </div>
      <div className="py-2 pr-4">{children}</div>
    </div>
  )
}
