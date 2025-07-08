export const useTenant = () => {
  const tenantId = useRuntimeConfig().public.tenant

  const tenantConfigs = {
    acme: {
      name: 'Acme Corp',
      color: 'red',
      logo: '/logos/acme.png',
    },
    globex: {
      name: 'Globex Inc',
      color: 'blue',
      logo: '/logos/globex.png',
    }
  }

  return tenantConfigs[tenantId] || tenantConfigs['default']
}