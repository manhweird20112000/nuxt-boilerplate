export default defineNuxtRouteMiddleware((to: { path: string; }) => {
  console.log(to)
  return navigateTo('/')
})
