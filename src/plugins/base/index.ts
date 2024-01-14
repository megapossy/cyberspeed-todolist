import { type App } from 'vue'

export default {
  install: (app: App) => {
    const components = import.meta.glob('./components/**/*.vue', { eager: true })
    Object.entries(components).forEach(([path, component]) => {
      if (!path || !path.split('/').length) return
      const componentName = path
        .split('/')
        .pop()
        ?.replace(/\.\w+$/, '')
      if (!componentName) return
      app.component(componentName, (component as any).default)
    })
  }
}
