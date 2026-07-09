# Joykatum: World Percussion Explorer

Welcome to Joykatum! This interactive audio playground lets you explore and play percussion instruments from all over the world.

---

## 🥁 How to Add a New Instrument / Drum

If you want the AI to generate a brand-new drum for the app, here is a casual guide and some rules to follow:

1. **Do some Visual Research first**
   - Tell the AI to look at real-world reference images of the instrument online. This helps it create beautiful, stylish, and highly realistic SVG graphics with realistic gradients, lighting, and textures, rather than plain flat shapes.

2. **Define the Sound & Code Sections**
   - Create the instrument's sound synthesis module under `/modules/instruments/[your_instrument].js`.
   - Add it to the main registry files under `/modules/drumTypes.js` and `/modules/drumInfo.js`.

3. **Craft a Deep Description**
   - Make sure to write a detailed description of the instrument in `/modules/drumInfo.js`.
   - **Crucial Rule**: Include at least one fascinating detail or curiosity about the instrument's history, spiritual role, manufacturing process, or unique physical acoustics.
   - Include authentic **Apple Music and Spotify links** under the songs list so users can hear real artists playing the instrument in professional recordings (no fake/mock URLs!).

4. **Add at Least 10 Interestingly Named Patterns**
   - Create at least **10 customized rhythm patterns** in the preset file (`/modules/patterns.js`).
   - Do not name them boring things like "Pattern 1" or "Beat 2". Give them cool, authentic names based on traditional rhythms, genres, or moods (e.g., *Guaguancó Tumbao*, *Shamanic Ritual Pulse*, or *Retro Arcade Speedrun*).
