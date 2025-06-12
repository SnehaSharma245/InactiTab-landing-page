# 🔥 InactiTab Landing Page

<div align="center">
  <img src="public/icon2.png" alt="InactiTab Logo" width="128" height="128">

**🌐 [Live Landing Page](https://inactitab.vercel.app)**

</div>

---

## 📖 Overview

This is the official landing page for **InactiTab** - a powerful Chrome extension designed to automatically manage your browser tabs by detecting inactive tabs and either putting them to sleep or closing them automatically. The landing page provides users with comprehensive information about the extension, its features, and step-by-step installation instructions.

### 🎯 Key Features

- **🛡️ Smart Protection System** - Automatically protects tabs with active media, video calls, and whitelisted sites
- **⏰ Customizable Timers** - Set custom inactivity timeouts (seconds, minutes, hours)
- **🎵 Media Detection** - Detects audio/video playing, camera usage, and video call sites
- **📋 Whitelist Management** - Easy whitelist management with one-click current tab whitelisting
- **💤 Sleep Mode** - Visual indicators for sleeping tabs with option to auto-close
- **📚 Tab History** - Keep track of auto-closed tabs with restore functionality
- **⚙️ Flexible Settings** - Comprehensive settings for tab thresholds, pinned tab protection, and more

---

## 🚀 Installation

### Method 1: Download from Website (Recommended)

1. **Download the Extension**

   - Visit our [Landing Page](https://inactitab.vercel.app)
   - Click on the "Download Extension" button
   - Download the latest zip file
   - Extract the ZIP file to a folder on your computer

2. **Install in Chrome**

   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" button
   - Select the extracted folder containing the extension files
   - The InactiTab extension should now appear in your extensions list

3. **Pin the Extension**
   - Click the puzzle piece icon in Chrome toolbar
   - Find InactiTab and click the pin icon to keep it visible

### Method 2: Download from GitHub Releases

1. **Download the Extension**

   - Go to [GitHub Releases](https://github.com/SnehaSharma245/InactiTab-landing-page/releases/tag/v1.0.0)
   - Download the latest `inactitab.zip` file
   - Extract the ZIP file to a folder on your computer

2. **Install in Chrome**

   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" button
   - Select the extracted folder containing the extension files
   - The InactiTab extension should now appear in your extensions list

3. **Pin the Extension**
   - Click the puzzle piece icon in Chrome toolbar
   - Find InactiTab and click the pin icon to keep it visible

---

## 🎮 Usage Guide

### Getting Started

1. **Open the Extension** - Click the InactiTab icon in your Chrome toolbar
2. **Set Your Preferences** - Go to Settings tab to configure timer and thresholds
3. **Manage Whitelist** - Add important sites to the whitelist to protect them
4. **Monitor Activity** - Use the different tabs to monitor protected, inactive, and closed tabs

### 🛡️ Tab Protection System

InactiTab automatically protects tabs from being tracked for inactivity based on:

- **🎵 Audio/Video Activity** - Tabs playing audio or using camera/microphone
- **📹 Video Call Sites** - Google Meet, Zoom, Teams, Discord, etc.
- **📋 Whitelisted URLs** - Manually added trusted sites
- **📌 Pinned Tabs** - When "Whitelist pinned tabs" setting is enabled

### 📱 Interface Overview

#### 🏠 Whitelist Tab

- **Quick Whitelist** - One-click whitelist current tab
- **Manual Entry** - Add URLs manually
- **Opened Tabs List** - See all tabs with whitelist toggle buttons
- **Sort Feature** - Sort whitelisted tabs first

#### 🛡️ Playing Tab

- **Protected Tabs** - View all currently protected tabs
- **Protection Reasons** - See why each tab is protected (audio, video, whitelist, etc.)
- **Real-time Updates** - Auto-refreshes every 2 seconds

#### 💤 Inactive Tab

- **Sleeping Tabs** - View tabs put to sleep mode
- **CPU Usage Monitoring** - See real-time CPU usage for inactive tabs
- **Bulk Selection** - Select multiple inactive tabs and close them all at once
- **Quick Actions** - Visit or close tabs directly
- **Status Indicators** - Visual indicators for protected vs sleeping tabs

#### 📚 History Tab

- **Auto-closed Tabs** - View recently closed tabs
- **Restore Functionality** - Reopen tabs with one click
- **Bulk Management** - Select and delete multiple entries
- **Smart Cleanup** - Removes duplicates and already opened tabs

#### ⚙️ Settings Tab

- **Inactive Timer** - Set custom timeout (1-999 seconds/minutes/hours)
- **Tab Threshold** - Set minimum tab count to start tracking (1-100)
- **Auto-close Mode** - Enable automatic closing without sleep mode
- **History Limit** - Control how many closed tabs to remember (1-20)
- **Pinned Tab Protection** - Toggle protection for pinned tabs

---

## 🔧 Configuration Options

### Timer Settings

- **Timer Value**: 1-999 (configurable unit)
- **Timer Unit**: Seconds, Minutes, Hours
- **Default**: 5 seconds (for testing)

### Advanced Settings

- **Tab Threshold**: Only start tracking when tab count exceeds this number
- **Whitelist Pinned**: Automatically protect pinned tabs
- **Auto-close**: Skip sleep mode and directly close inactive tabs
- **History Limit**: Number of closed tabs to keep in history

---

## 🛠️ Technical Details

### Built With

- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first styling
- **Chrome Extension APIs** - Native browser integration
- **Lucide Icons** - Beautiful icon set
- **Chrome Storage API** - Persistent settings storage

### Permissions Used

- `tabs` - Monitor and manage browser tabs
- `storage` - Save settings and whitelist
- `notifications` - Show feedback notifications
- `scripting` - Inject sleep mode indicators
- `activeTab` - Access current tab information

---

## 🐛 Troubleshooting

### Common Issues

**Extension not working after installation**

- Make sure Developer mode is enabled
- Try refreshing the extensions page
- Check console for error messages

**Tabs not being detected as inactive**

- Check if tab threshold setting is appropriate
- Verify the tab isn't whitelisted or protected
- Ensure timer settings are configured correctly

**Settings not saving**

- Check if Chrome has sufficient storage permissions
- Try disabling and re-enabling the extension
- Clear extension storage and reconfigure

### Getting Help

- 🌐 Visit our [Landing Page](https://inactitab.vercel.app) for demos and tutorials
- 📧 Report issues on [GitHub Issues](https://github.com/SnehaSharma245/InactiTab-landing-page/releases/tag/v1.0.0)
- 💬 Join our community discussions

---

## 🤝 Contributing

We welcome contributions to improve the landing page!

### Main Extension Repository

For contributions to the Chrome extension itself, please visit: **[InactiTab Extension Repository](https://github.com/SnehaSharma245/InactiTab)**

### Landing Page Development Setup

```bash
# Clone and setup landing page
git clone https://github.com/SnehaSharma245/InactiTab-landing-page.git
cd InactiTab-landing-page
npm install

# Start development
npm run dev

# Build for production
npm run build
```

### Development Workflow

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Changes**: `git commit -m 'Add amazing feature'`
4. **Push to Branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Code Standards

- **ESLint** - Follow the configured linting rules
- **Prettier** - Use consistent code formatting
- **Component Structure** - Keep components small and focused
- **Accessibility** - Ensure all interactive elements are accessible

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Vercel** - For seamless deployment and hosting
- **Community** - For feedback and contributions

---

<div align="center">
  
  **⭐ If you find this landing page helpful, please consider giving it a star!**
  
  **🌐 [Visit Live Site](https://inactitab.vercel.app) | 📦 [Main Extension Repo](https://github.com/SnehaSharma245/InactiTab)**
  
  Made with ❤️ by [Sneha Sharma](https://github.com/SnehaSharma245)
  
</div>
