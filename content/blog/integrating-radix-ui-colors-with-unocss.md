---
title: 'Integrating Radix UI Colors with UnoCSS: A Seamless Dark Mode Solution'
description: Learn how to leverage Radix UI's accessible color system with UnoCSS for a powerful dark mode implementation
authors:
  - name: Teshane Crawford
    picture: https://github.com/TeshaneCrawford.png
    twitter: _d_shybrid
tags:
  - UnoCSS
  - Radix UI
  - TypeScript
date: 2024-12-12
---

## Integrating Radix UI Colors with UnoCSS: A Seamless Dark Mode Solution

As developers, we're constantly seeking ways to improve our applications' user experience while maintaining clean, maintainable code. In this article, I'll share an elegant solution I developed to integrate Radix UI's exceptional color system with UnoCSS, complete with seamless dark mode support.

::alert{type="info"}
This guide assumes you have a basic understanding of UnoCSS and TypeScript. If you're new to either, consider familiarizing yourself with their basics first.
::

## Why Radix UI Colors?

Radix UI's color system stands out for several compelling reasons:

1. Accessibility-first approach with carefully crafted contrast ratios
2. Semantic color scales that maintain consistency across themes
3. Comprehensive palette with subtle gradations perfect for modern UI design

## The Challenge

::alert{type="warning"}
Before implementing this solution, ensure you have both `@radix-ui/colors` and `unocss` installed in your project. This integration requires specific versions of these packages to work correctly.
::

While UnoCSS offers incredible utility-first CSS capabilities, integrating Radix UI's color system isn't straightforward out of the box. The main challenges include:

- Converting Radix's color format to UnoCSS-compatible variables
- Maintaining dark mode support without duplicate code
- Ensuring type safety with TypeScript
- Keeping the configuration maintainable and scalable

## The Solution

Let's break down the implementation into manageable pieces.

### 1. Setting Up the Types

First, we define our TypeScript types to ensure type safety when working with Radix colors:

```ts [uno.config.ts]
type RadixColorScale = {
  [key: string]: string
}

type RadixColors = {
  [key: string]: RadixColorScale
}
```

### 2. Helper Functions

We need a utility function to convert Radix's camelCase naming to kebab-case for CSS variables:

```ts [uno.config.ts]
const toKebabCase = (str: string) => 
  str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
```

### 3. Theme Variable Generation

::alert{type="info"}
The following implementation automatically handles both light and dark modes, eliminating the need for manual theme switching logic in your components.
::

The core of our solution lies in generating CSS variables for both light and dark modes:

```ts [uno.config.ts]
const generateThemeVariables = () => {
  const lightTheme: Record<string, string> = {}
  const darkTheme: Record<string, string> = {}
  
  const radixColors = colors as RadixColors
  
  for (const [key, value] of Object.entries(radixColors)) {
    if (key.endsWith('Dark')) continue
    
    const baseKey = toKebabCase(key)
    const darkKey = `${key}Dark`
    
    // Process light theme
    Object.entries(value).forEach(([step, color]) => {
      const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
      lightTheme[colorKey] = color
    })
    
    // Process dark theme
    if (darkKey in radixColors) {
      const darkScale = radixColors[darkKey] as RadixColorScale
      Object.entries(darkScale).forEach(([step, color]) => {
        const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
        darkTheme[colorKey] = color
      })
    }
  }
  
  return { lightTheme, darkTheme }
}
```

### 4. UnoCSS Configuration

::alert{type="danger"}
Make sure to place this configuration in your project root, typically as `uno.config.ts`. Placing it elsewhere may cause build tools to miss the configuration.
::

Here's how we tie it all together in our UnoCSS configuration:

```ts [uno.config.ts]
const { lightTheme, darkTheme } = generateThemeVariables()

export default defineConfig({
  // Safelist common color utilities
  safelist: [
    ...Array.from({ length: 12 }, (_, i) => [
      `text-red-${i + 1}`,
      `text-blue-${i + 1}`,
      `text-green-${i + 1}`,
      // ... other color utilities
    ]).flat(),
  ],
  
  // Define theme colors
  theme: {
    colors: Object.fromEntries(
      Object.entries(colors as RadixColors)
        .filter(([name]) => !name.endsWith('Dark'))
        .map(([name]) => [
          toKebabCase(name),
          Object.fromEntries(
            Array.from({ length: 12 }, (_, i) => [
              i + 1,
              `var(--${toKebabCase(name)}-${i + 1})`
            ])
          )
        ])
    ),
  },
  
  // Inject CSS variables
  preflights: [
    {
      getCSS: () => `
        :root {
          ${Object.entries(lightTheme)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n ')}
        }
        
        .dark {
          ${Object.entries(darkTheme)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n ')}
        }
      `
    }
  ],
})
```

### 5. Base Styles

Finally, we set up our base styles in `main.css`:

```css [main.css]
:root {
  color-scheme: light;
}

html.dark {
  color-scheme: dark;
}

body {
  background-color: var(--gray-1);
  color: var(--gray-12);
}
```

## Usage Examples

::alert{type="info"}
These examples demonstrate basic usage patterns. Remember that Radix color scales are designed to be semantic - use colors based on their intended purpose rather than just their visual appearance.
::

Now you can use Radix colors seamlessly with UnoCSS utilities:

```html [index.html]
<div class="bg-blue-3 text-blue-11 p-4">
  <h1 class="text-blue-12">This uses Radix UI colors</h1>
  <p class="text-blue-11">With automatic dark mode support!</p>
</div>
```

You can also create shortcuts for commonly used combinations:

```ts [uno.config.ts]
shortcuts: [
  ['primary-button', 'bg-blue-4 hover:bg-blue-5 text-blue-11 rounded px-4 py-2'],
  ['danger-alert', 'bg-red-3 text-red-11 border-2 border-red-6 rounded p-2'],
]
```

## Benefits

This integration provides several advantages:

1. **Type Safety**: Full TypeScript support ensures correct color usage
2. **Automatic Dark Mode**: Colors switch automatically based on theme
3. **Maintainable**: Single source of truth for colors
4. **Flexible**: Easy to extend with new color scales
5. **Performant**: CSS variables provide efficient theme switching

## Conclusion

::alert{type="warning"}
While this solution works well for most cases, very large applications might need to consider code-splitting the color configurations to optimize initial bundle size.
::

By combining Radix UI's thoughtful color system with UnoCSS's utility-first approach, we've created a powerful and flexible solution for managing colors in modern web applications. This setup provides an excellent foundation for building accessible, themeable interfaces with minimal overhead.

The full configuration is available in the code snippets above, and you can easily adapt it to your specific needs. Whether you're building a new project or refactoring an existing one, this integration offers a robust approach to color management in your UnoCSS projects.

Have you tried integrating other color systems with UnoCSS? I'd love to hear about your experiences and alternative approaches in the comments below!
