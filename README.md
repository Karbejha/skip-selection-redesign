# We Want Waste - Skip Selection Page Redesign

A complete redesign of the skip selection page for We Want Waste, built with React and modern UI/UX principles.

## 🚀 Live Demo

[View Live Demo on CodeSandbox](https://codesandbox.io/p/devbox/tks789)

## 📋 Overview

This project is a complete redesign of the original skip selection page, maintaining all functionality while providing a modern, responsive, and user-friendly interface.

### Original vs. Redesign

**Original Design:**
- Grid layout with basic cards
- Limited visual hierarchy
- Basic responsive design

**New Design:**
- Modern gradient background with clean white cards
- Enhanced visual hierarchy and typography
- Improved user experience with hover effects and animations
- Comprehensive responsive design for mobile and desktop
- Progress indicator showing current step
- Better accessibility and contrast ratios

## 🎨 Design Approach

### 1. **Modern UI/UX Principles**
- **Clean & Minimal**: Removed visual clutter while maintaining essential information
- **Consistent Spacing**: Used systematic spacing throughout the interface
- **Visual Hierarchy**: Clear typography scales and color contrast
- **Interactive Elements**: Hover states and micro-animations for better engagement

### 2. **Color Scheme**
- **Primary**: Blue (#3B82F6) for actions and selected states
- **Background**: Gradient from blue to purple for visual interest
- **Cards**: Clean white backgrounds with subtle shadows
- **Accents**: Green for positive features, purple for premium features

### 3. **Typography**
- **Headers**: Bold, large typography for clear hierarchy
- **Body Text**: Readable sizes with appropriate line spacing
- **Labels**: Smaller, muted text for secondary information

### 4. **Component Design**
- **Skip Cards**: Redesigned with visual skip representations
- **Progress Steps**: Added visual progress indicator
- **Selection Summary**: New component showing selected skip details
- **Feature Badges**: Color-coded badges for skip features

## 📱 Responsive Design

### Mobile First Approach
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px  
  - Desktop: > 1024px

### Responsive Features
- **Grid Layout**: 1 column on mobile, 2 on tablet, 3 on desktop
- **Navigation**: Condensed step indicators on mobile
- **Typography**: Scaled font sizes across devices
- **Touch Targets**: Minimum 44px for mobile interaction

## 🛠 Technical Implementation

### Technology Stack
- **React 18** with Hooks (useState, useEffect)
- **Tailwind CSS** for styling and responsiveness
- **Lucide React** for icons
- **Modern ES6+** JavaScript

### Key Features
- **API Integration**: Fetches skip data from the provided endpoint
- **State Management**: React hooks for selection and loading states
- **Error Handling**: Graceful loading states and error boundaries
- **Performance**: Optimized re-renders and efficient state updates


## 🔗 API Integration

The application fetches skip data from:
```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

### Data Structure
```json
{
  "id": 17933,
  "size": 4,
  "hire_period_days": 14,
  "price_before_vat": 278,
  "vat": 20,
  "allowed_on_road": true,
  "allows_heavy_waste": true
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn


## 📊 Performance Optimizations

- **Lazy Loading**: Components load only when needed
- **Memoization**: Expensive calculations are cached
- **Minimal Re-renders**: Optimized state updates
- **Image Optimization**: SVG icons for crisp display at any size

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color ratios
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Visible focus indicators


### User Experience
- ✅ Intuitive skip selection process
- ✅ Clear pricing information
- ✅ Visual skip size representations
- ✅ Progress indication
- ✅ Mobile-optimized interface

### Performance
- ✅ Fast loading times
- ✅ Smooth animations
- ✅ Efficient state management
- ✅ Optimized bundle size

### Accessibility
- ✅ Screen reader compatible
- ✅ Keyboard navigation
- ✅ High contrast ratios
- ✅ Touch-friendly interface

## 📞 Contact

For questions about this redesign, please contact:
- **Email**: mohamad.karbejha@gmail.com
- **GitHub**: [@Karbejha](https://github.com/Karbejha)
- **Portfolio**: [Portfolio](https://portfolio-mohamad-karbejhas-projects.vercel.app/)


---

**Note**: This is a redesign exercise. The original We Want Waste branding and API are property of their respective owners.
