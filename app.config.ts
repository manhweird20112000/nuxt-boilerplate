interface IAppConfig {
  footer?: {
    year?: number
  }
}
export default defineAppConfig({
  awesome: {
    footer: {
      year: new Date().getFullYear()
    }
  } as IAppConfig
})
