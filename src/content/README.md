# Blog Content Directory

This directory contains the blog posts for the Astro site. It's configured to work with Obsidian for a better writing experience with **MDX support**, **syntax highlighting**, and **auto-templates**.

## Setup Instructions

### Option 1: Open as Obsidian Vault (Recommended)

1. Open Obsidian
2. Click "Open folder as vault"
3. Navigate to and select: `C:\Users\calvi\sso.ie\src\content`
4. Obsidian will use the `.obsidian` configuration already set up

### Option 2: Symlink to Separate Obsidian Vault

If you prefer to keep your Obsidian vault in a different location:

**Windows (PowerShell as Administrator):**

```powershell
# Create your Obsidian vault folder
New-Item -ItemType Directory -Path "C:\Users\calvi\ObsidianVaults\sso-blog" -Force

# Create symlink from vault to content directory
New-Item -ItemType SymbolicLink -Path "C:\Users\calvi\ObsidianVaults\sso-blog\blog" -Target "C:\Users\calvi\sso.ie\src\content\blog"
```

Then open `C:\Users\calvi\ObsidianVaults\sso-blog` as your Obsidian vault.

## Creating New Blog Posts

### Automatic Template Insertion (Recommended)

**With Templater Plugin (Auto-inserts on file creation):**

1. Install **Templater** plugin (see Recommended Plugins below)
2. Create a new file in the `blog/` folder
3. The frontmatter template will **automatically insert** when you create files in the `blog/` directory!

**With Core Templates Plugin (Manual insertion):**

1. Create new file in `blog/` folder (Ctrl+N or right-click → New Note)
2. Press `Ctrl+Shift+T` (or Command Palette → "Templates: Insert template")
3. The frontmatter will be populated:
   ```yaml
   ---
   title: "Your Post Title"
   description: "A brief description"
   pubDate: "Dec 20 2025"
   tags: ["tag1", "tag2"]
   ---
   ```

### Manual Creation

1. Create new `.mdx` files in the `blog/` directory
2. Use the frontmatter schema:
   ```yaml
   ---
   title: "Your Post Title"
   description: "A brief description"
   pubDate: "Dec 20 2025"
   tags: ["tag1", "tag2"]
   ---
   ```
3. Write your content in Markdown/MDX
4. Astro will automatically pick up the files

## MDX Support & Syntax Highlighting

### Built-in Support

- **MDX files** (`.mdx`) are fully supported
- **Code blocks** with language tags get syntax highlighting
- **Frontmatter** is styled and highlighted
- **JSX/TSX syntax** gets enhanced highlighting via CSS snippet

### Enable Enhanced Syntax Highlighting

1. Go to **Settings → Appearance → CSS snippets**
2. Enable the **"mdx-syntax"** snippet
3. Restart Obsidian if needed

The CSS snippet provides:

- Better code block contrast
- Enhanced inline code styling
- JSX/TSX syntax color hints (tags, attributes, strings)
- Improved frontmatter visibility

## Recommended Plugins

The following plugins are recommended for blog writing (install via Community Plugins):

### Essential Plugins

1. **Templater** (Community - **Recommended for Auto-Insert**)

   - **Automatically inserts template when creating files in `blog/` folder**
   - More powerful than core Templates plugin
   - Supports folder-based auto-templates
   - Install from Community Plugins → Search "Templater"

2. **Templates** (Core Plugin - Already Enabled)

   - Manual template insertion
   - Hotkey: `Ctrl+Shift+T`
   - Use if you prefer manual control

3. **Code Block Enhancer** (Community)

   - Better code block rendering
   - Line numbers, copy buttons
   - Multiple themes

4. **Paste Image Rename** (Community)
   - Automatically rename pasted images
   - Organize images in assets folder

### Optional but Useful

4. **Advanced Tables** (Community)

   - Better table editing experience
   - Sort, align, format tables easily

5. **Linter** (Community)

   - Auto-format markdown
   - Fix common markdown issues
   - Ensure consistent formatting

6. **Tasks** (Community)
   - Track TODO items in posts
   - Useful for draft management

### Installing Community Plugins

1. Open **Settings → Community plugins**
2. Click **Browse** to open the plugin store
3. Search for each plugin name above
4. Click **Install** then **Enable**

## Obsidian Features Enabled

- ✅ Live preview mode (default)
- ✅ Markdown links
- ✅ Graph view for connections between posts
- ✅ Tag pane for organizing by tags
- ✅ Frontmatter support
- ✅ Code syntax highlighting
- ✅ Auto-template insertion
- ✅ MDX file support
- ✅ Enhanced JSX/TSX syntax highlighting

## Keyboard Shortcuts

- `Ctrl+N` - Create new file
- `Ctrl+Shift+T` - Insert template
- `Ctrl+E` - Toggle preview mode
- `Ctrl+Click` - Open link

## Notes

- Obsidian settings (`.obsidian/`) are gitignored - they're personal preferences
- All `.mdx` and `.md` files in `blog/` are automatically included in the Astro build
- Images should go in `src/assets/` and be referenced in posts
- The template file is in `Templates/Blog Post Template.md` - you can customize it
- Frontmatter dates should match the format: `'MMM DD YYYY'` (e.g., `'Dec 20 2025'`)
