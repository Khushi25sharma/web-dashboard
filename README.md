# Modern Analytics Dashboard

A responsive, themeable analytics dashboard built with HTML, CSS (Tailwind), and JavaScript. This project implements a single-page application (SPA) architecture with dynamic chart rendering and theme customization capabilities.

![Dashboard Overview](screenshots/dashboard-overview.png)
![Theme Customization](screenshots/theme-customization.png)

## 🌟 Features

### 1. Interactive Dashboard Views
- **Dashboard Overview**: Key performance indicators and main analytics
- **Reports**: Monthly reports and custom report generation
- **Analytics**: Detailed page views and user behavior metrics
- **Revenue**: Revenue analysis and subscription trends
- **Users**: User management and demographics

### 2. Dynamic Charts
- Revenue trends with time-based filtering
- User acquisition metrics
- Traffic source distribution
- Page views analytics
- User behavior statistics
- Revenue by product breakdown
- Subscription revenue tracking
- User growth visualization
- Demographic distribution

### 3. Theme System
- **Base Themes**:
  - Light
  - Dark
- **Modern Palettes**:
  - Neo-Cyberpunk
  - Quantum
  - Glacier
  - Sunset
  - Matrix
  - Aurora
- **Special Themes**:
  - Neon
  - Candy
  - Retro
  - Midnight
  - Digital Void

### 4. Theme Builder
- Live color customization
- Background style options
- Theme preview
- Import/Export functionality
- Theme persistence

### 5. Responsive Design
- Mobile-friendly layout
- Adaptive grid system
- Responsive charts
- Collapsible sidebar

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (Tailwind CSS)
  - JavaScript (ES6+)
- **Charts**:
  - Chart.js
  - ApexCharts
- **Styling**:
  - Tailwind CSS
  - Custom CSS Variables
- **Icons**:
  - Heroicons (SVG)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web-dashboard.git
cd web-dashboard
```

2. Open `index.html` in your browser or serve using a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Access the dashboard at `http://localhost:8000`

## 📊 Dashboard Views

### Dashboard Overview
![Dashboard View](screenshots/dashboard-view.png)
- Key Performance Indicators (KPIs)
- Revenue trends
- User acquisition metrics
- Traffic source distribution
- Retention analysis

### Reports
![Reports View](screenshots/reports-view.png)
- Monthly reports list
- Custom report generation
- Download functionality
- Date range selection

### Analytics
![Analytics View](screenshots/analytics-view.png)
- Page views chart
- User behavior metrics
- Top pages table
- Bounce rate analysis

### Revenue
![Revenue View](screenshots/revenue-view.png)
- Revenue by product chart
- Subscription revenue trends
- Revenue details cards
- Historical data comparison

### Users
![Users View](screenshots/users-view.png)
- User growth chart
- User demographics
- Recent users table
- User management actions

## 🎨 Theme Customization

### Theme Builder Panel
![Theme Builder](screenshots/theme-builder.png)
- Color picker for all theme variables
- Background style options
- Live preview
- Theme export/import

### Available Themes
![Theme Gallery](screenshots/theme-gallery.png)
- 15+ pre-built themes
- Custom theme creation
- Theme persistence
- Dark/Light mode support

## 🔧 Configuration

The dashboard can be configured through:

1. **Theme Variables**:
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f3f4f6;
  --text-primary: #1f2937;
  --text-secondary: #4b5563;
  --accent-primary: #3b82f6;
  --accent-secondary: #60a5fa;
  --border-color: #e5e7eb;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
}
```

2. **Chart Configuration**:
```javascript
const chartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  // Additional options...
};
```

## 📱 Responsive Design

The dashboard is fully responsive with:
- Mobile-first approach
- Adaptive grid layouts
- Collapsible sidebar
- Responsive charts
- Touch-friendly controls

## 🔄 Data Flow

1. **View Switching**:
   - User clicks menu item
   - Content is dynamically loaded
   - Charts are initialized
   - Theme is maintained

2. **Theme Updates**:
   - User selects/changes theme
   - CSS variables are updated
   - Charts are refreshed
   - UI elements adapt

3. **Chart Updates**:
   - Data changes trigger updates
   - Charts maintain aspect ratio
   - Colors adapt to theme
   - Responsive resizing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Power BI dashboards
- Built with Tailwind CSS
- Chart.js and ApexCharts for visualizations
- Heroicons for SVG icons
