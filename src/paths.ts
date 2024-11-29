export const paths = {
  home: '/',
  auth: {
    custom: {
      signIn: '/auth/custom/sign-in',
      signUp: '/auth/custom/sign-up',
      resetPassword: '/auth/custom/reset-password',
    },
  },
  dashboard: {
    notifications: '/dashboard/notifications',
    preferences: {
      list: '/dashboard/preferences',
      details: (preferenceId: string) => `/dashboard/preferences/${preferenceId}`,
    },
    blank: '/dashboard/blank',
  },

  notAuthorized: '/errors/not-authorized',
  notFound: '/errors/not-found',
  internalServerError: '/errors/internal-server-error',
} as const;
