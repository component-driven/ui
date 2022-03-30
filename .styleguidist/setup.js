import * as components from "../packages/components/src"

// Expose all components to the global scope for styleguide examples
// so it behaves more like Playroom without the need to import components
Object.entries(components).forEach(([key, value]) => {
  global[key] = value
})
