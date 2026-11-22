/**
 * Illustrative coordinate helper.
 * Extracts and clamps latitude/longitude tuples from formatted string inputs.
 * 
 * Note: Sanitized for portfolio review.
 */

export interface ParsedCoordinate {
  lat: number;
  lng: number;
  label: string;
  hasPreciseGps: boolean;
}

const GPS_TUPLE_REGEX = /\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)$/;

export function extractCoordinatePair(rawInput: string, fallbackLabel = 'Unmapped Location'): ParsedCoordinate {
  if (!rawInput || typeof rawInput !== 'string') {
    return { lat: 0, lng: 0, label: fallbackLabel, hasPreciseGps: false };
  }

  const match = rawInput.trim().match(GPS_TUPLE_REGEX);
  if (match) {
    const rawLat = parseFloat(match[1]);
    const rawLng = parseFloat(match[2]);

    if (!Number.isNaN(rawLat) && !Number.isNaN(rawLng)) {
      // Clamps within valid WGS-84 coordinate boundaries
      const clampedLat = Math.max(-85, Math.min(85, rawLat));
      const clampedLng = Math.max(-180, Math.min(180, rawLng));
      const cleanLabel = rawInput.replace(GPS_TUPLE_REGEX, '').trim() || 'Recorded GPS Point';

      return {
        lat: clampedLat,
        lng: clampedLng,
        label: cleanLabel,
        hasPreciseGps: true,
      };
    }
  }

  return {
    lat: 0,
    lng: 0,
    label: rawInput.trim(),
    hasPreciseGps: false,
  };
}
