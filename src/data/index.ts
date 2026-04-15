/**
 * Data layer for the ZOLLERN Steel Profiles report app.
 *
 * All JSON files in this directory are generated from the analysis sections.
 * Import from here — never import JSON files directly in UI code.
 *
 * Usage:
 *   import { product, ranking, markets } from "@/data";
 *   import { getMarket, getODI, listMarkets } from "@/data";
 */

import type {
  ProductDecomposition,
  FunctionalPromiseData,
  ConstraintsData,
  HomeMarketCompetition,
  MarketDiscovery,
  RankingData,
  SourcesRegistry,
  MarketIndexEntry,
  JTBDData,
  ODIData,
  ValueNetworkData,
  KanoData,
  CompatibilityData,
  AlternativesData,
  MarketMeta,
  BOMData,
} from "@/types";

// ─── Static JSON imports ──────────────────────────────────────────────────────

import _product from "./product.json";
import _functionalPromise from "./functionalPromise.json";
import _constraints from "./constraints.json";
import _homeMarket from "./homeMarketCompetition.json";
import _marketDiscovery from "./marketDiscovery.json";
import _ranking from "./ranking.json";
import _sources from "./sources.json";
import _marketsIndex from "./markets/index.json";

// ─── Market data imports — one per slug ───────────────────────────────────────

// linear-guides
import _linearMeta from "./markets/linear-guides/meta.json";
import _linearJtbd from "./markets/linear-guides/jtbd.json";
import _linearOdi from "./markets/linear-guides/odi.json";
import _linearVn from "./markets/linear-guides/valueNetwork.json";
import _linearKano from "./markets/linear-guides/kano.json";
import _linearCompat from "./markets/linear-guides/compatibility.json";
import _linearAlt from "./markets/linear-guides/alternatives.json";
import _linearBom from "./markets/linear-guides/bom.json";

// firearms-components
import _firearmsMeta from "./markets/firearms-components/meta.json";
import _firearmsJtbd from "./markets/firearms-components/jtbd.json";
import _firearmsOdi from "./markets/firearms-components/odi.json";
import _firearmsVn from "./markets/firearms-components/valueNetwork.json";
import _firearmsKano from "./markets/firearms-components/kano.json";
import _firearmsCompat from "./markets/firearms-components/compatibility.json";
import _firearmsAlt from "./markets/firearms-components/alternatives.json";
import _firearmsBom from "./markets/firearms-components/bom.json";

// pump-components
import _pumpMeta from "./markets/pump-components/meta.json";
import _pumpJtbd from "./markets/pump-components/jtbd.json";
import _pumpOdi from "./markets/pump-components/odi.json";
import _pumpVn from "./markets/pump-components/valueNetwork.json";
import _pumpKano from "./markets/pump-components/kano.json";
import _pumpCompat from "./markets/pump-components/compatibility.json";
import _pumpAlt from "./markets/pump-components/alternatives.json";
import _pumpBom from "./markets/pump-components/bom.json";

// rail-vehicle-parts
import _railMeta from "./markets/rail-vehicle-parts/meta.json";
import _railJtbd from "./markets/rail-vehicle-parts/jtbd.json";
import _railOdi from "./markets/rail-vehicle-parts/odi.json";
import _railVn from "./markets/rail-vehicle-parts/valueNetwork.json";
import _railKano from "./markets/rail-vehicle-parts/kano.json";
import _railCompat from "./markets/rail-vehicle-parts/compatibility.json";
import _railAlt from "./markets/rail-vehicle-parts/alternatives.json";
import _railBom from "./markets/rail-vehicle-parts/bom.json";

// door-systems
import _doorMeta from "./markets/door-systems/meta.json";
import _doorJtbd from "./markets/door-systems/jtbd.json";
import _doorOdi from "./markets/door-systems/odi.json";
import _doorVn from "./markets/door-systems/valueNetwork.json";
import _doorKano from "./markets/door-systems/kano.json";
import _doorCompat from "./markets/door-systems/compatibility.json";
import _doorAlt from "./markets/door-systems/alternatives.json";
import _doorBom from "./markets/door-systems/bom.json";

// elevator-guide-rails
import _elevatorMeta from "./markets/elevator-guide-rails/meta.json";
import _elevatorJtbd from "./markets/elevator-guide-rails/jtbd.json";
import _elevatorOdi from "./markets/elevator-guide-rails/odi.json";
import _elevatorVn from "./markets/elevator-guide-rails/valueNetwork.json";
import _elevatorKano from "./markets/elevator-guide-rails/kano.json";
import _elevatorCompat from "./markets/elevator-guide-rails/compatibility.json";
import _elevatorAlt from "./markets/elevator-guide-rails/alternatives.json";
import _elevatorBom from "./markets/elevator-guide-rails/bom.json";

// automotive-components
import _autoMeta from "./markets/automotive-components/meta.json";
import _autoJtbd from "./markets/automotive-components/jtbd.json";
import _autoOdi from "./markets/automotive-components/odi.json";
import _autoVn from "./markets/automotive-components/valueNetwork.json";
import _autoKano from "./markets/automotive-components/kano.json";
import _autoCompat from "./markets/automotive-components/compatibility.json";
import _autoAlt from "./markets/automotive-components/alternatives.json";
import _autoBom from "./markets/automotive-components/bom.json";

// generator-keybars
import _genMeta from "./markets/generator-keybars/meta.json";
import _genJtbd from "./markets/generator-keybars/jtbd.json";
import _genOdi from "./markets/generator-keybars/odi.json";
import _genVn from "./markets/generator-keybars/valueNetwork.json";
import _genKano from "./markets/generator-keybars/kano.json";
import _genCompat from "./markets/generator-keybars/compatibility.json";
import _genAlt from "./markets/generator-keybars/alternatives.json";
import _genBom from "./markets/generator-keybars/bom.json";

// hydraulic-cylinders
import _hydMeta from "./markets/hydraulic-cylinders/meta.json";
import _hydJtbd from "./markets/hydraulic-cylinders/jtbd.json";
import _hydOdi from "./markets/hydraulic-cylinders/odi.json";
import _hydVn from "./markets/hydraulic-cylinders/valueNetwork.json";
import _hydKano from "./markets/hydraulic-cylinders/kano.json";
import _hydCompat from "./markets/hydraulic-cylinders/compatibility.json";
import _hydAlt from "./markets/hydraulic-cylinders/alternatives.json";
import _hydBom from "./markets/hydraulic-cylinders/bom.json";

// construction-machinery
import _constMeta from "./markets/construction-machinery/meta.json";
import _constJtbd from "./markets/construction-machinery/jtbd.json";
import _constOdi from "./markets/construction-machinery/odi.json";
import _constVn from "./markets/construction-machinery/valueNetwork.json";
import _constKano from "./markets/construction-machinery/kano.json";
import _constCompat from "./markets/construction-machinery/compatibility.json";
import _constAlt from "./markets/construction-machinery/alternatives.json";
import _constBom from "./markets/construction-machinery/bom.json";

// medical-instruments
import _medMeta from "./markets/medical-instruments/meta.json";
import _medJtbd from "./markets/medical-instruments/jtbd.json";
import _medOdi from "./markets/medical-instruments/odi.json";
import _medVn from "./markets/medical-instruments/valueNetwork.json";
import _medKano from "./markets/medical-instruments/kano.json";
import _medCompat from "./markets/medical-instruments/compatibility.json";
import _medAlt from "./markets/medical-instruments/alternatives.json";
import _medBom from "./markets/medical-instruments/bom.json";

// general-mechanical-engineering
import _gmeMeta from "./markets/general-mechanical-engineering/meta.json";
import _gmeJtbd from "./markets/general-mechanical-engineering/jtbd.json";
import _gmeOdi from "./markets/general-mechanical-engineering/odi.json";
import _gmeVn from "./markets/general-mechanical-engineering/valueNetwork.json";
import _gmeKano from "./markets/general-mechanical-engineering/kano.json";
import _gmeCompat from "./markets/general-mechanical-engineering/compatibility.json";
import _gmeAlt from "./markets/general-mechanical-engineering/alternatives.json";
import _gmeBom from "./markets/general-mechanical-engineering/bom.json";

// ─── Typed exports ────────────────────────────────────────────────────────────

export const product = _product as unknown as ProductDecomposition;
export const functionalPromise = _functionalPromise as unknown as FunctionalPromiseData;
export const constraints = _constraints as unknown as ConstraintsData;
export const homeMarket = _homeMarket as unknown as HomeMarketCompetition;
export const marketDiscovery = _marketDiscovery as unknown as MarketDiscovery;
export const ranking = _ranking as unknown as RankingData;
export const sources = _sources as unknown as SourcesRegistry;
export const marketsIndex = _marketsIndex as unknown as MarketIndexEntry[];

// ─── Per-market data bundles ──────────────────────────────────────────────────

export interface MarketBundle {
  meta: MarketMeta;
  jtbd: JTBDData;
  odi: ODIData;
  valueNetwork: ValueNetworkData;
  kano: KanoData;
  compatibility: CompatibilityData;
  alternatives: AlternativesData;
  bom: BOMData;
}

const _marketBundles: Record<string, MarketBundle> = {
  "linear-guides": {
    meta: _linearMeta as unknown as MarketMeta,
    jtbd: _linearJtbd as unknown as JTBDData,
    odi: _linearOdi as unknown as ODIData,
    valueNetwork: _linearVn as unknown as ValueNetworkData,
    kano: _linearKano as unknown as KanoData,
    compatibility: _linearCompat as unknown as CompatibilityData,
    alternatives: _linearAlt as unknown as AlternativesData,
    bom: _linearBom as unknown as BOMData,
  },
  "firearms-components": {
    meta: _firearmsMeta as unknown as MarketMeta,
    jtbd: _firearmsJtbd as unknown as JTBDData,
    odi: _firearmsOdi as unknown as ODIData,
    valueNetwork: _firearmsVn as unknown as ValueNetworkData,
    kano: _firearmsKano as unknown as KanoData,
    compatibility: _firearmsCompat as unknown as CompatibilityData,
    alternatives: _firearmsAlt as unknown as AlternativesData,
    bom: _firearmsBom as unknown as BOMData,
  },
  "pump-components": {
    meta: _pumpMeta as unknown as MarketMeta,
    jtbd: _pumpJtbd as unknown as JTBDData,
    odi: _pumpOdi as unknown as ODIData,
    valueNetwork: _pumpVn as unknown as ValueNetworkData,
    kano: _pumpKano as unknown as KanoData,
    compatibility: _pumpCompat as unknown as CompatibilityData,
    alternatives: _pumpAlt as unknown as AlternativesData,
    bom: _pumpBom as unknown as BOMData,
  },
  "rail-vehicle-parts": {
    meta: _railMeta as unknown as MarketMeta,
    jtbd: _railJtbd as unknown as JTBDData,
    odi: _railOdi as unknown as ODIData,
    valueNetwork: _railVn as unknown as ValueNetworkData,
    kano: _railKano as unknown as KanoData,
    compatibility: _railCompat as unknown as CompatibilityData,
    alternatives: _railAlt as unknown as AlternativesData,
    bom: _railBom as unknown as BOMData,
  },
  "door-systems": {
    meta: _doorMeta as unknown as MarketMeta,
    jtbd: _doorJtbd as unknown as JTBDData,
    odi: _doorOdi as unknown as ODIData,
    valueNetwork: _doorVn as unknown as ValueNetworkData,
    kano: _doorKano as unknown as KanoData,
    compatibility: _doorCompat as unknown as CompatibilityData,
    alternatives: _doorAlt as unknown as AlternativesData,
    bom: _doorBom as unknown as BOMData,
  },
  "elevator-guide-rails": {
    meta: _elevatorMeta as unknown as MarketMeta,
    jtbd: _elevatorJtbd as unknown as JTBDData,
    odi: _elevatorOdi as unknown as ODIData,
    valueNetwork: _elevatorVn as unknown as ValueNetworkData,
    kano: _elevatorKano as unknown as KanoData,
    compatibility: _elevatorCompat as unknown as CompatibilityData,
    alternatives: _elevatorAlt as unknown as AlternativesData,
    bom: _elevatorBom as unknown as BOMData,
  },
  "automotive-components": {
    meta: _autoMeta as unknown as MarketMeta,
    jtbd: _autoJtbd as unknown as JTBDData,
    odi: _autoOdi as unknown as ODIData,
    valueNetwork: _autoVn as unknown as ValueNetworkData,
    kano: _autoKano as unknown as KanoData,
    compatibility: _autoCompat as unknown as CompatibilityData,
    alternatives: _autoAlt as unknown as AlternativesData,
    bom: _autoBom as unknown as BOMData,
  },
  "generator-keybars": {
    meta: _genMeta as unknown as MarketMeta,
    jtbd: _genJtbd as unknown as JTBDData,
    odi: _genOdi as unknown as ODIData,
    valueNetwork: _genVn as unknown as ValueNetworkData,
    kano: _genKano as unknown as KanoData,
    compatibility: _genCompat as unknown as CompatibilityData,
    alternatives: _genAlt as unknown as AlternativesData,
    bom: _genBom as unknown as BOMData,
  },
  "hydraulic-cylinders": {
    meta: _hydMeta as unknown as MarketMeta,
    jtbd: _hydJtbd as unknown as JTBDData,
    odi: _hydOdi as unknown as ODIData,
    valueNetwork: _hydVn as unknown as ValueNetworkData,
    kano: _hydKano as unknown as KanoData,
    compatibility: _hydCompat as unknown as CompatibilityData,
    alternatives: _hydAlt as unknown as AlternativesData,
    bom: _hydBom as unknown as BOMData,
  },
  "construction-machinery": {
    meta: _constMeta as unknown as MarketMeta,
    jtbd: _constJtbd as unknown as JTBDData,
    odi: _constOdi as unknown as ODIData,
    valueNetwork: _constVn as unknown as ValueNetworkData,
    kano: _constKano as unknown as KanoData,
    compatibility: _constCompat as unknown as CompatibilityData,
    alternatives: _constAlt as unknown as AlternativesData,
    bom: _constBom as unknown as BOMData,
  },
  "medical-instruments": {
    meta: _medMeta as unknown as MarketMeta,
    jtbd: _medJtbd as unknown as JTBDData,
    odi: _medOdi as unknown as ODIData,
    valueNetwork: _medVn as unknown as ValueNetworkData,
    kano: _medKano as unknown as KanoData,
    compatibility: _medCompat as unknown as CompatibilityData,
    alternatives: _medAlt as unknown as AlternativesData,
    bom: _medBom as unknown as BOMData,
  },
  "general-mechanical-engineering": {
    meta: _gmeMeta as unknown as MarketMeta,
    jtbd: _gmeJtbd as unknown as JTBDData,
    odi: _gmeOdi as unknown as ODIData,
    valueNetwork: _gmeVn as unknown as ValueNetworkData,
    kano: _gmeKano as unknown as KanoData,
    compatibility: _gmeCompat as unknown as CompatibilityData,
    alternatives: _gmeAlt as unknown as AlternativesData,
    bom: _gmeBom as unknown as BOMData,
  },
};

// Convenience alias: all bundles as a record
export const markets = _marketBundles;

// ─── Helper functions ─────────────────────────────────────────────────────────

/**
 * Return the full data bundle for a market slug.
 * Throws if the slug is not registered.
 */
export function getMarket(slug: string): MarketBundle {
  const bundle = _marketBundles[slug];
  if (!bundle) {
    throw new Error(
      `Unknown market slug: "${slug}". Available: ${Object.keys(_marketBundles).join(", ")}`
    );
  }
  return bundle;
}

/**
 * Return the ODI data for a market slug.
 */
export function getODI(slug: string): ODIData {
  return getMarket(slug).odi;
}

/**
 * Return the JTBD data for a market slug.
 */
export function getJTBD(slug: string): JTBDData {
  return getMarket(slug).jtbd;
}

/**
 * Return the Kano feature-fit data for a market slug.
 */
export function getKano(slug: string): KanoData {
  return getMarket(slug).kano;
}

/**
 * Return the value network data for a market slug.
 */
export function getValueNetwork(slug: string): ValueNetworkData {
  return getMarket(slug).valueNetwork;
}

/**
 * Return the compatibility assessment for a market slug.
 */
export function getCompatibility(slug: string): CompatibilityData {
  return getMarket(slug).compatibility;
}

/**
 * List all market index entries (ordered as in index.json).
 */
export function listMarkets(): MarketIndexEntry[] {
  return marketsIndex;
}

/**
 * List only new-market candidates (excludes existing/reference markets).
 */
export function listNewMarkets(): MarketIndexEntry[] {
  return marketsIndex.filter((m) => !m.isReference);
}

/**
 * Return the meta record for a market slug.
 */
export function getMarketMeta(slug: string): MarketMeta {
  return getMarket(slug).meta;
}

/**
 * Return all ranked markets sorted by composite score descending.
 */
export function getRankedMarkets() {
  return [...ranking.rankedMarkets].sort(
    (a, b) => b.scores.composite - a.scores.composite
  );
}

/**
 * Look up a source by its prefixed ID (e.g. "PROD-S01").
 */
export function getSource(prefixedId: string): import("@/types").Source | undefined {
  return (sources as SourcesRegistry)[prefixedId];
}

/**
 * Return the Bill of Materials data for a market slug.
 */
export function getBOM(slug: string): BOMData {
  return getMarket(slug).bom;
}
