# Headless WordPress with AstroJS 5 Test

First attempt at creating an AstroJS website with headless WordPress, which basically means using the WordPress database as content storage while AstroJS handles the frontend.

Plus, it's my first project with Astro, which seems surprisingly easy!

## TypeError: fetch failed
I face my first issue with https in local server with a crash in the app. I tried several solutions without success, so I keep the protocol in local as http only.

<details><summary>Card css design</summary>
 
## Solution with subgrid + h-full & flex internaly
Combining `grid-rows-subgrid` with flex properties is indeed elegant. It provides:

1. Modern grid layout with subgrid
2. Fallback support with flex
3. Clean markup without extra wrappers
4. Consistent card heights
5. Proper content distribution

## Flex Properties as Fallback
### Why it works as a fallback:
1. If `grid-rows-subgrid` isn't supported:
   - `flex-col` and `flex-grow` take over
   - Ensures consistent card heights
   - Distributes space vertically
### Browser Support:
- `subgrid`: ~84% global support
- `flex`: ~98% global support 

</details>