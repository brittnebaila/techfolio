export type ProjectDetailSection =
  | {
      type: "text";
      title: string;
      body: string[];
    }
  | {
      type: "list";
      title: string;
      intro?: string;
      items: string[];
    };

export type ProjectDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  cardSummary: string;
  status?: string;
  visible?: boolean;
  tags: string[];
  links?: { label: string; href: string }[];
  sections: ProjectDetailSection[];
};

const allProjects: ProjectDetail[] = [
  {
    slug: "eastside-bike-routing",
    title: "Eastside Bike Routing",
    shortTitle: "Eastside Bike Routing",
    status: "In progress",
    summary:
      "Exploring how public GIS data can help cyclists choose more comfortable routes on the Eastside. Starting with Redmond, I’m investigating how elevation, trail surfaces, and bicycle infrastructure can inform route choices beyond distance alone.",
    cardSummary:
      "In-progress GIS project exploring bicycle routing through public data and elevation analysis, with findings, QGIS work, and development notes documented on GitHub.",
    tags: ["QGIS", "Spatial Analysis", "Elevation Data", "GIS"],
    links: [
      {
        label: "Explore on GitHub",
        href: "https://github.com/brittnebaila/Eastside-Bike-Routing",
      },
    ],
    sections: [
      {
        type: "text",
        title: "The Question",
        body: [
          "Could a slightly longer route be a better ride? Hills, surface conditions, and bicycle infrastructure all affect how comfortable a route feels. I’m exploring how public city data can make those tradeoffs easier to understand.",
          "I began with Bellevue trail data to learn QGIS, then moved to Redmond’s trails, street centerlines, and bicycle facilities. The project is currently in the GIS exploration and elevation-analysis stage, with a web mapping and route-comparison prototype planned next.",
        ],
      },
      {
        type: "list",
        title: "What I’ve Done So Far",
        items: [
          "Explored municipal GIS layers through attribute queries, spatial selections, filtering, and categorized map styling.",
          "Documented candidate routing attributes, including trail surface, bicycle access, existing facility type, and posted speed limits.",
          "Investigated coded values and missing data, keeping existing bicycle infrastructure separate from planned facilities.",
          "Combined two USGS 3DEP 1-meter elevation tiles into a virtual raster and calculated terrain slope as percent grade.",
          "Tested an elevation profile along NE 24th Street to examine climbs and descents within a route segment.",
        ],
      },
      {
        type: "text",
        title: "A Nearly Flat Route Can Still Have a Climb",
        body: [
          "An approximately 1.08 km test section of NE 24th Street starts and ends around 43 meters above sea level. Looking only at those endpoints would make it appear nearly flat.",
          "The elevation profile tells a different story: a climb of about 14 meters to a crest near 730 meters, followed by a descent. The average climbing grade to that crest is approximately 1.9%.",
          "This finding is shaping the next stage of the project: route analysis needs to account for changes within a segment and direction of travel, rather than relying only on the difference between start and end elevations.",
        ],
      },
      {
        type: "text",
        title: "Turning Terrain into Useful Route Information",
        body: [
          "The 1-meter slope raster captures detailed changes across the study area, but terrain slope is not the same as the grade a cyclist experiences along a road or trail. The map is an exploratory analysis, not a route-difficulty rating.",
          "My next step is to connect elevation samples to actual street and trail segments. I’m also documenting data limitations, such as unknown surface codes and speed-limit values that need verification before they can inform routing decisions.",
        ],
      },
      {
        type: "list",
        title: "What’s Next",
        intro: "Planned development builds on the GIS analysis already underway:",
        items: [
          "Prepare selected data as GeoJSON and display it in an interactive Leaflet map.",
          "Explore PostGIS and a preliminary route suitability model using distance, grade, surface, and existing bicycle infrastructure.",
          "Gather input from local cyclists to understand what makes a route feel comfortable.",
          "Compare routes for a test origin and destination, explaining the tradeoffs and limitations of the available data.",
        ],
      },
    ],
  },
  {
    slug: "streetease",
    title: "StreetEase",
    shortTitle: "StreetEase",
    status: "Prototype · Paused",
    summary:
      "An exploratory React and Leaflet prototype for previewing street grades around a destination, with accessibility in mind. Development is paused while I reassess geographic scope, elevation-data reliability, and the processing required to support address searches worldwide.",
    cardSummary:
      "Paused React and Leaflet prototype exploring accessible street-grade visualization, location search, and the challenges of reliable elevation data.",
    tags: ["React", "Leaflet", "Accessibility", "Mapping UX"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/brittnebaila/Accessibility-Map",
      },
    ],
    sections: [
      {
        type: "text",
        title: "Problem",
        body: [
          "Most map tools are designed for navigation, but they do not clearly communicate how physically demanding an area may be to walk.",
          "For someone using a mobility aid or managing limited endurance, street grade can make a major difference in whether a route feels realistic or comfortable.",
          "I wanted to explore how street geometry, elevation data, and mapping could be combined into a tool that makes terrain easier to understand at a glance.",
        ],
      },
      {
        type: "list",
        title: "What I’ve Built So Far",
        intro:
          "So far, I have built a responsive web prototype using React and Leaflet that allows users to search for a location, preview nearby streets within a selected radius, and view a color-coded street overlay representing grade difficulty.",
        items: [
          "A responsive React frontend built for web-first use",
          "Interactive map rendering with Leaflet and OpenStreetMap",
          "Address search with autocomplete suggestions",
          "Radius-based map preview centered on a selected location",
          "A color-coded street overlay concept for easier terrain scanning",
          "A lightweight backend API for search and street-grade requests",
          "Early caching and fallback handling for unreliable third-party APIs",
          "Resilience work around street lookup and elevation lookup failures",
        ],
      },
      {
        type: "text",
        title: "Technical Challenges",
        body: [
          "StreetEase has been a strong exercise in working with real-world data constraints. One of the biggest challenges has been reliability. Public mapping and elevation APIs can time out, rate-limit requests, or return incomplete street-naming data, which makes building a smooth experience much more complex than with a static demo.",
          "I explored a backend, caching, and fallback handling to address these constraints. Supporting arbitrary addresses worldwide remains unresolved because of processing time, resource requirements, and inconsistent data coverage. Development is paused while I reconsider the scope.",
        ],
      },
      {
        type: "text",
        title: "What I Learned",
        body: [
          "This project deepened my understanding of frontend-to-backend architecture, geospatial data workflows, API resilience, and accessibility-centered product design.",
          "It has also reinforced how much product quality depends on gracefully handling messy external data, not just on building a clean interface.",
        ],
      },
    ],
  },
  {
    slug: "washington-state-website",
    title: "Washington State Website",
    shortTitle: "Washington State Website",
    summary:
      "A responsive website project created for a Front-End Web Development course at Western Governors University, designed to highlight Washington’s natural landmarks while emphasizing accessibility, usability, and clean visual structure.",
    cardSummary:
      "Responsive website built with HTML, CSS, and JavaScript to highlight Washington’s natural landmarks while improving accessibility and usability.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    sections: [
      {
        type: "text",
        title: "Project Overview",
        body: [
          "This project was created for a Front-End Web Development course at Western Governors University. The goal was to develop a fully responsive website with a homepage and individual pages for three cities.",
          "I designed, structured, and coded every part of the site by hand, incorporating accessibility, user experience, and visual design principles.",
          "The project received an Excellence Award for its clean design, responsiveness, and attention to detail.",
        ],
      },
      {
        type: "list",
        title: "My Role",
        items: [
          "Wrote semantic HTML for all pages",
          "Designed the layout and color system",
          "Created navigation and a consistent page structure",
          "Styled responsive components using CSS Flexbox and Grid",
          "Implemented accessible color contrast and scalable typography",
        ],
      },
      {
        type: "text",
        title: "From Figma to Code",
        body: [
          "Before writing a single line of code, I began by wireframing the homepage and supporting pages in Figma to establish layout, content hierarchy, and responsive behavior.",
          "This planning phase helped clarify the user experience and set a strong foundation for development. The final coded site closely follows the wireframes, with refinements made during the build process to improve readability and interaction on both desktop and mobile.",
        ],
      },
      {
        type: "text",
        title: "Final Build",
        body: [
          "The final website was built entirely from scratch using semantic HTML, CSS, and JavaScript.",
          "The design brings the original wireframes to life with a clean, responsive layout and accessible structure, while keeping the information easy to scan across devices.",
        ],
      },
    ],
  },
  {
    slug: "lake-hills-orthodontics",
    title: "Lake Hills Orthodontics",
    shortTitle: "Lake Hills Orthodontics",
    summary:
      "As the in-house designer, I create branded print and digital materials for Lake Hills Orthodontics, including brochures, forms, social media content, video, and seasonal campaigns. My work supports both patient experience and internal marketing efforts with a consistent, welcoming visual identity.",
    cardSummary:
      "In-house design and UX project including a full homepage redesign in Figma, branded patient materials, and promotional video work.",
    tags: ["Figma", "Branding", "UX", "Marketing Design"],
    sections: [
      {
        type: "text",
        title: "Homepage Redesign",
        body: [
          "As the in-house designer for Lake Hills Orthodontics, I initiated a homepage redesign to better align the site with the brand’s values and improve overall usability. The original homepage felt outdated and lacked a clear visual hierarchy.",
          "My redesign focused on simplifying the layout, making calls-to-action more prominent, and improving the mobile experience.",
          "Using Figma, I created wireframes and high-fidelity mockups with an updated type system, refined color palette, and more intuitive content flow. The design maintains the friendly, trustworthy tone of the practice while giving users faster access to key actions like scheduling appointments or learning about services.",
          "I approached this project as both a designer and a future front-end developer, thinking through how the layout would translate into code and how users would interact with it across devices.",
        ],
      },
      {
        type: "text",
        title: "Patient-Facing Print Design",
        body: [
          "To support the patient experience, I design a variety of print materials used both in-office and digitally. These include intake forms, welcome brochures, and educational handouts.",
          "Each piece is designed to be easy to read, brand-aligned, and accessible to patients of all ages.",
        ],
      },
      {
        type: "text",
        title: "Seasonal Campaigns",
        body: [
          "Throughout the year, I create custom designs for Lake Hills Orthodontics to support seasonal promotions and patient engagement.",
          "These include apparel, holiday cards, and branded visuals that reflect the practice’s friendly, community-centered tone.",
        ],
      },
    ],
  },
  {
    slug: "modcotta",
    visible: false,
    title: "ModCotta",
    shortTitle: "ModCotta",
    summary:
      "Brand identity, photography, and eCommerce experience for a handmade jewelry brand I founded and operate.",
    cardSummary:
      "Handmade jewelry brand built from scratch, combining visual identity, eCommerce, product storytelling, and local market integration.",
    tags: ["eCommerce", "Brand Design", "Content", "Small Business"],
    links: [
      {
        label: "View Live Site",
        href: "http://modcotta.square.site",
      },
    ],
    sections: [
      {
        type: "text",
        title: "Project Overview",
        body: [
          "ModCotta is a jewelry brand I created and operate, from product design to web presence. I design and sculpt all pieces, develop brand visuals, and run the SquareUp storefront, supported by product photography and cohesive marketing assets.",
        ],
      },
      {
        type: "text",
        title: "Brand Direction",
        body: [
          "The brand aesthetic blends earthy minimalism with bold handcrafted design.",
          "Every visual decision, from the logo and palette to photography and packaging, is meant to create a cohesive and tactile brand experience.",
        ],
      },
      {
        type: "list",
        title: "My Contributions",
        items: [
          "Designed and handcrafted all jewelry pieces",
          "Branded and styled the SquareUp storefront",
          "Directed and produced product photography",
          "Created logo, packaging, and social graphics",
          "Wrote copy and managed customer communication",
        ],
      },
      {
        type: "text",
        title: "What This Project Represents",
        body: [
          "ModCotta reflects the intersection of creative direction, entrepreneurship, and digital execution.",
          "It gave me hands-on experience shaping a brand from the ground up while managing the customer-facing details that make an online storefront feel polished and consistent.",
        ],
      },
    ],
  },
];

// Hidden projects stay in source but are excluded from cards, navigation, and routes.
export const projects = allProjects.filter((project) => project.visible !== false);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
