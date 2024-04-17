export function usePortfolio() {
  const appConfig = useAppConfig()

  return computed(() => appConfig.portfolio)
}