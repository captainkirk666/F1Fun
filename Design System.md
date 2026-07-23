SPORTS DESIGN SYSTEM

Version 1.0

──────────────────────────────────

MISSION

To create professional sports graphics
that are:

• Consistent
• Responsive
• Minimal
• Easy to maintain
• Print ready
• Built from live data

──────────────────────────────────

DESIGN PRINCIPLES

COLOURS

1. COLOUR PHILOSOPHY
Colour establishes identity, not structure.
The Sports Graphics Design System uses a single visual language across all widgets. Typography, spacing, grids, layouts and components remain identical regardless of the sport. Themes are used only to express the identity of a sport or publication.

2. THEME PHILOSOPHY
Classic Theme
The Classic theme is the default editorial style. It uses black, white and neutral greys to produce a timeless appearance suitable for newspapers, professional publishing and general websites.

Sport Themes
Sport themes inherit from the Classic theme and introduce a single primary accent colour representing the identity of the sport. No other design elements change.

3. Theme Rules
Classic is the default theme for every widget.
Sport themes inherit from the Classic theme.
Themes control colour only.
Typography, spacing, grids, cards and components are shared across all themes.
Every colour must be defined as a CSS variable (design token).
Components must never contain hard-coded colour values.
A widget must be able to switch themes without changing its HTML or JavaScript.


TYPOGRAPHY

Typography establishes the identity of the Sports Graphics Design System. Consistency is more important than variety.

Typography Rules
A single font family will be used throughout the framework.
Font weight is used to create hierarchy instead of introducing additional typefaces.
Font sizes are defined as design tokens.
Letter spacing and line height are standardised across all widgets.
Typography must remain consistent across all themes.

3. Maximum 6 font weights

4. Every colour must be a variable

5. Every font size must be a variable

6. Every spacing value must come from the spacing scale

7. Desktop
8. Article
9. Pocket

No other layouts.

──────────────────────────────────

END
