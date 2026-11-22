/**
 * Illustrative TypeScript interface representing a geological specimen
 * and its AI classification telemetry.
 * 
 * Note: Sanitized for showcase purposes; does not represent full database schema.
 */

export type GeologicalClass = 'Igneous' | 'Sedimentary' | 'Metamorphic' | 'Mineral' | 'Gemstone';

export interface GeoLocationTelemetry {
  readonly latitude: number;
  readonly longitude: number;
  readonly placeName?: string;
  readonly elevationMeters?: number;
}

export interface BedrockStratigraphy {
  readonly unitName: string;
  readonly geologicalAge: string;
  readonly lithologies: readonly string[];
  readonly descriptionSummary?: string;
}

export interface IdentificationTelemetry {
  readonly specimenId: string;
  readonly commonName: string;
  readonly scientificName: string;
  readonly classification: GeologicalClass;
  readonly confidenceScore: number; // 0 - 100 percentage
  readonly mohsHardness: string;    // e.g. "6.5 - 7.0"
  readonly formationProcess: string;
  readonly relatedSpecimens: readonly string[];
}

export interface SpecimenRecord {
  readonly id: string;
  readonly photoUrl: string;
  readonly telemetry: IdentificationTelemetry;
  readonly location?: GeoLocationTelemetry;
  readonly stratigraphy?: BedrockStratigraphy;
  readonly fieldNotes?: string;
  readonly loggedAt: string;
}
