# Shopify Theme Documentation (AI-Friendly)

This document provides an overview of the theme's structure, key components, and development practices. It is intended to serve as a reference for AI models assisting with theme development.

## Theme Structure

The theme follows a standard Shopify theme directory structure. Key directories include:

-   `assets/`: Contains theme assets such as CSS, JavaScript, images, and fonts.
-   `config/`: Contains configuration files, including `settings_schema.json` (theme editor settings) and `settings_data.json` (theme editor data).
-   `layout/`: Contains theme layout files, such as `theme.liquid` (the main theme template).
-   `locales/`: Contains translation files for different languages.
-   `sections/`: Contains Liquid files for sections, which are modular content blocks configurable in the theme editor.
-   `snippets/`: Contains Liquid files for snippets, which are reusable code modules.
-   `templates/`: Contains Liquid files for different page templates (e.g., `index.liquid`, `product.liquid`, `collection.liquid`).

## Key Files

-   `layout/theme.liquid`: The main layout file that defines the overall structure of the theme. It includes references to assets, sections, and templates.
-   `config/settings_schema.json`: Defines the settings available in the theme editor.
-   `config/settings_data.json`: Stores the data for the theme editor settings.
-   `assets/base.css`: Contains base CSS styles for the theme.
-   `assets/custom.css`: Intended for custom CSS additions and overrides.

## Custom Sections

Custom sections are located in the `sections/` directory. Each file represents a configurable section in the theme editor.

### Comprehensive Benefits Section (`sections/comprehensive-benefits.liquid`)

-   **Purpose:** Displays a grid of benefit items with interactive flip functionality.
-   **Schema Settings:**
    -   `title`: Text input for the section title.
    -   `columns`: Select input to control the number of columns in the grid (1, 2, or 4).
-   **Block Type (`benefit_item`):** Represents an individual item in the benefits grid.
    -   **Block Settings:**
        -   `image`: Image picker for the item's image.
        -   `front_title`: Text input for the title on the front of the item.
        -   `front_subtitle`: Text input for the subtitle on the front of the item.
        -   `back_title`: Text input for the title on the back of the item.
        -   `back_description`: Rich text editor for the description on the back of the item.
-   **Dependencies:**
    -   `assets/section-comprehensive-benefits.css`: Provides styling for the grid layout, item appearance, and flip animation. Uses CSS variables `--grid-columns-desktop`, `--grid-columns-tablet`, and `--grid-columns-mobile` defined in a `<style>` block within the section file for responsive columns.
    -   `assets/section-comprehensive-benefits.js`: Provides JavaScript for the click-to-flip functionality by toggling the `is-flipped` class on `.benefit-item` elements.

## Styling Conventions

-   Global styles are primarily in `assets/base.css`.
-   Custom styles and overrides should be added to `assets/custom.css`.
-   Section-specific styles are included via dedicated CSS files linked in the section Liquid file (e.g., `assets/section-comprehensive-benefits.css`).
-   CSS variables are used for theme colors and potentially other design tokens. Common variables include `var(--color-text)`, `var(--color-background)`, etc.

## JavaScript

-   Global JavaScript is typically in `assets/global.js`.
-   Section-specific JavaScript is included via dedicated JS files linked in the section Liquid file (e.g., `assets/section-comprehensive-benefits.js`).
-   Defer loading of scripts where possible using the `defer` attribute.

## Development Tools

-   **Shopify CLI:** Used for theme development workflows (e.g., `shopify theme dev`).
-   **Theme Check:** Used for linting and static analysis of Liquid and JSON files. Configuration is in `.theme-check.yml`.

## Known Issues

-   A persistent `SyntaxError` is reported by Theme Check on line 854 of `sections/header.liquid`. This appears to be a tooling issue related to parsing the `{% schema %}` block and not a code error within the schema itself.
