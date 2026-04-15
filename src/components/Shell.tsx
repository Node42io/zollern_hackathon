/**
 * Shell — root app layout: left nav sidebar + main content area.
 *
 * Sidebar structure:
 *   ANALYSIS
 *     01  Product Profile       ▶ (expandable section links)
 *     02  Functional Promise    ▶
 *     03  Constraints           ▶
 *     04  Market Competition
 *     05  New Market Discovery
 *     06  New Market Analysis    ← tabbed
 */

import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

interface NavSection {
  id: string;
  label: string;
  sub?: boolean;
}

interface NavItem {
  to: string;
  label: string;
  kicker: string;
  sections?: NavSection[];
}

/** Type labels for analysis pages from manifest */
const TYPE_LABELS: Record<string, string> = {
  company_profile: "Company Profile",
  product_portfolio: "Product Portfolio",
  product_decomposition: "Product Profile",
  functional_promise: "Functional Promise",
  constraints: "Constraints",
  capability_assessment: "Capability Assessment",
  home_market_competition: "Home Market",
  market_discovery: "Market Discovery",
  final_ranking: "Final Ranking",
  product_validation: "Product Validation",
  financial_scenarios: "Financial Scenarios",
  implementation_roadmap: "Implementation Roadmap",
  transition_model: "Transition Model",
  go_no_go_decision: "Go/No-Go Decision",
  product_ranking: "Product Ranking",
};

/** Route paths for analysis page types */
const TYPE_ROUTES: Record<string, string> = {
  company_profile: "/overview",
  product_portfolio: "/overview",
  product_decomposition: "/product",
  functional_promise: "/functional-promise",
  constraints: "/constraints",
  capability_assessment: "/constraints",
  home_market_competition: "/home-market",
  market_discovery: "/discovery",
  final_ranking: "/overview",
};

/** Build nav items from manifest (dynamic) with fallback to static */
function buildNavFromManifest(): NavItem[] {
  const manifest = (window as any).__CLAYTON_MANIFEST__;
  if (!manifest?.analysis_pages) return staticNavItems;

  const items: NavItem[] = [
    { to: "/overview", label: "Overview", kicker: "00" },
  ];

  // Add analysis pages from manifest
  let idx = 1;
  for (const page of manifest.analysis_pages) {
    const label = TYPE_LABELS[page.type] || page.title;
    const route = TYPE_ROUTES[page.type];
    // Skip types that map to overview or already-added routes
    if (!route || route === "/overview") continue;
    if (items.some(i => i.to === route)) continue;
    const kicker = String(idx).padStart(2, "0");
    items.push({ to: route, label, kicker });
    idx++;
  }

  // Always add market analysis at the end
  if (manifest.markets?.length > 0) {
    items.push({ to: "/analysis", label: "Market Analysis", kicker: String(idx).padStart(2, "0") });
  }

  return items;
}

/** Static fallback nav items (Marquardt-compatible) */
const staticNavItems: NavItem[] = [
  { to: "/overview", label: "Overview", kicker: "00" },
  { to: "/product", label: "Product Profile", kicker: "01" },
  { to: "/functional-promise", label: "Functional Promise", kicker: "02" },
  { to: "/constraints", label: "Constraints", kicker: "03" },
  { to: "/home-market", label: "Home Market", kicker: "04" },
  { to: "/discovery", label: "New Market Discovery", kicker: "05" },
  { to: "/analysis", label: "New Market Analysis", kicker: "06" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Shell() {
  const location = useLocation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [projectInfo, setProjectInfo] = useState<{company: string; division: string; archetype: string} | null>(null);
  const [navItems, setNavItems] = useState<NavItem[]>(staticNavItems);

  // Load project info and build dynamic nav
  useEffect(() => {
    fetch('./data/project.json')
      .then(r => r.json())
      .then(p => setProjectInfo(p))
      .catch(() => setProjectInfo({ company: "Clayton Analysis", division: "", archetype: "Analysis" }));

    // Build nav from manifest once it's loaded
    const checkManifest = setInterval(() => {
      if ((window as any).__CLAYTON_MANIFEST__) {
        setNavItems(buildNavFromManifest());
        clearInterval(checkManifest);
      }
    }, 200);
    setTimeout(() => clearInterval(checkManifest), 5000); // give up after 5s
    return () => clearInterval(checkManifest);
  }, []);

  // Auto-expand when the active route changes
  useEffect(() => {
    const activeItem = navItems.find((item) =>
      location.pathname === item.to ||
      location.pathname.startsWith(item.to + "/") ||
      (item.to === "/overview" && location.pathname === "/")
    );
    if (activeItem?.sections) {
      setExpanded((prev) => ({ ...prev, [activeItem.to]: true }));
    }
  }, [location.pathname, navItems]);

  function toggle(to: string) {
    setExpanded((prev) => ({ ...prev, [to]: !prev[to] }));
  }

  return (
    <div className="app-shell">
      {/* Left navigation sidebar */}
      <aside className="app-sidebar">
        {/* Brand block — reads from project.json */}
        <div className="app-sidebar__brand">
          <div className="app-sidebar__brand-kicker">Clayton / Node42</div>
          <div className="app-sidebar__brand-title">
            {projectInfo?.company || "Loading..."}
          </div>
          <div className="app-sidebar__brand-sub">
            {projectInfo?.archetype || "Analysis"}
          </div>
        </div>

        {/* Navigation */}
        <div className="app-sidebar__section">
          <div className="app-sidebar__section-label">Analysis</div>
          <nav>
            {navItems.map((item) => {
              const hasSections = item.sections && item.sections.length > 0;
              const isOpen = hasSections && !!expanded[item.to];

              return (
                <div key={item.to}>
                  {/* Main nav row */}
                  <div style={{ display: "flex", alignItems: "stretch" }}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/overview" || item.to === "/product"}
                      className={({ isActive }) =>
                        ["app-nav-link", isActive ? "is-active" : ""].filter(Boolean).join(" ")
                      }
                      style={{ flex: 1, minWidth: 0 }}
                    >
                      <span className="app-nav-link__num">{item.kicker}</span>
                      <span>{item.label}</span>
                    </NavLink>

                    {/* Chevron toggle — only for items with sections */}
                    {hasSections && (
                      <button
                        onClick={() => toggle(item.to)}
                        title={isOpen ? "Collapse sections" : "Expand sections"}
                        style={{
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 28,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          color: "var(--text-gray-dark)",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: 9,
                            transition: "transform 0.2s ease",
                            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                            color: isOpen ? "var(--accent-yellow)" : "var(--text-gray-dark)",
                          }}
                        >
                          ▶
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Section links — slide in/out */}
                  {hasSections && (
                    <div
                      style={{
                        maxHeight: isOpen ? `${item.sections!.length * 26 + 8}px` : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.25s ease",
                      }}
                    >
                      <div style={{ paddingBottom: 4 }}>
                        {item.sections!.map((sec) => (
                          <button
                            key={sec.id}
                            onClick={() => scrollToSection(sec.id)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              width: "100%",
                              textAlign: "left",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: `3px 10px 3px ${sec.sub ? 36 : 28}px`,
                              fontSize: 11,
                              color: "var(--text-gray-dark)",
                              fontFamily: "inherit",
                              lineHeight: 1.4,
                              transition: "color 0.15s ease",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "var(--accent-yellow)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "var(--text-gray-dark)")
                            }
                          >
                            <span
                              style={{
                                fontSize: 8,
                                opacity: 0.5,
                                flexShrink: 0,
                              }}
                            >
                              {sec.sub ? "└" : "·"}
                            </span>
                            {sec.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Tagline at bottom */}
        <div style={{
          padding: "20px",
          marginTop: "auto",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--text-gray-dark)",
          lineHeight: 1.6,
          borderTop: "1px solid var(--border-subtle)",
        }}>
          <div style={{ textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
            Archetype
          </div>
          <div style={{ color: "var(--text-gray-light)", fontSize: 11 }}>
            {projectInfo?.archetype || "Analysis"}
          </div>
          <div style={{ color: "var(--text-gray-light)", fontSize: 11, marginTop: 8 }}>
            {projectInfo?.division || ""}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
