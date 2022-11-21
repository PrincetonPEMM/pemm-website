export type Manuscripts = {
    manuscript_id?: number | null,
    manuscript_name?: string | null,
    manuscript_full_name?: string | null,
    language?: string | null,
    date_range_start?: number | null,
    date_range_end?: number | null,
    date_note?: string | null,
    provenance?: string | null,
    total_stories?:  number | null,
    tm_story_paintings?: number | null,
    total_tm_paintings?: number | null,
    scans_of_manuscript_in_color?: boolean| null,
  }
