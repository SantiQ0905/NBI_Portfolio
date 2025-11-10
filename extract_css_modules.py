"""
CSS Module Extractor Script
Extracts component-specific styles from App.css and creates CSS modules
"""

import re
from pathlib import Path

# Define component class prefixes and their files
COMPONENTS = {
    'Hero': {
        'prefixes': ['.hero', '.eyebrow', '.floating-badge', '.portrait'],
        'module_file': 'HeroSection.module.css',
        'component_file': 'HeroSection.tsx'
    },
    'Contact': {
        'prefixes': ['.contact-', '.form-', '.input-', '.textarea', '.submit-'],
        'module_file': 'ContactSection.module.css',
        'component_file': 'ContactSection.tsx'
    },
    'Footer': {
        'prefixes': ['.site-footer', '.footer-'],
        'module_file': 'Footer.module.css',
        'component_file': 'Footer.tsx'
    },
    'Profile': {
        'prefixes': ['.profile-'],
        'module_file': 'ProfileSection.module.css',
        'component_file': 'ProfileSection.tsx'
    },
    'Experience': {
        'prefixes': ['.experience-'],
        'module_file': 'ExperienceSection.module.css',
        'component_file': 'ExperienceSection.tsx'
    },
    'Timeline': {
        'prefixes': ['.timeline-'],
        'module_file': 'TimelineSection.module.css',
        'component_file': 'TimelineSection.tsx'
    },
    'Research': {
        'prefixes': ['.research-', '.publication-'],
        'module_file': 'ResearchSection.module.css',
        'component_file': 'ResearchSection.tsx'
    },
    'Availability': {
        'prefixes': ['.availability-'],
        'module_file': 'AvailabilitySection.module.css',
        'component_file': 'AvailabilitySection.tsx'
    }
}

def kebab_to_camel(name):
    """Convert kebab-case to camelCase"""
    parts = name.split('-')
    return parts[0] + ''.join(word.capitalize() for word in parts[1:])

def extract_class_name(selector):
    """Extract class name from CSS selector"""
    match = re.match(r'^\.([\w-]+)', selector.strip())
    return match.group(1) if match else None

print("CSS Module Extraction Helper")
print("=" * 50)
print("This script helps identify which CSS rules belong to each component")
print()

# Read App.css
app_css_path = Path('src/App.css')
if not app_css_path.exists():
    print(f"Error: {app_css_path} not found!")
    exit(1)

with open(app_css_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all class selectors
class_pattern = re.compile(r'^\.([\w-]+)', re.MULTILINE)
all_classes = set(class_pattern.findall(content))

print(f"Found {len(all_classes)} unique class selectors in App.css")
print()

# Categorize classes by component
for comp_name, comp_info in COMPONENTS.items():
    matching_classes = []
    for css_class in sorted(all_classes):
        for prefix in comp_info['prefixes']:
            clean_prefix = prefix.lstrip('.')
            if css_class.startswith(clean_prefix):
                matching_classes.append(css_class)
                break
    
    if matching_classes:
        print(f"\n{comp_name} Component ({comp_info['module_file']}):")
        print(f"  Found {len(matching_classes)} classes:")
        for cls in matching_classes[:10]:  # Show first 10
            camel_case = kebab_to_camel(cls)
            print(f"    .{cls} → {camel_case}")
        if len(matching_classes) > 10:
            print(f"    ... and {len(matching_classes) - 10} more")

print("\n" + "=" * 50)
print("Next steps:")
print("1. Extract CSS rules for each component manually or with regex")
print("2. Convert kebab-case class names to camelCase for CSS modules")
print("3. Update component files to import and use the CSS modules")
print("4. Test each component after migration")
