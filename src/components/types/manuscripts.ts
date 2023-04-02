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
    tm_story_paintings?: string | null,
    total_tm_paintings?: number | null,
    scans_of_manuscript_in_color?: string| null,
    link_to_digital_copy?: string| null,
    total_folios?: number| null,
    total_pages?: number| null,
    total_scans?: number| null,
    columns_per_page?: number| null,
    line_range_per_column?: string| null,
    folio_start_of_the_tm_part?: string| null,
    scan_start_of_the_tm_part?: string| null,
    mss_rebound_in_disorder_or_there_are_breaks_in_the_sequence_of_tm?: string|null,
    duplicate_missing_scans_rebound_in_disorder?: string| null,
    pemm_cataloger_name?: string | null, 
    print_cataloger_name?: string | null, 
    pemm_volunteer_name?: string | null,
    catalog?: string| null,
    century?: string | null,
    total_paintings?: string | null,
    collections_sheet_relevant?: boolean | null,
    location_of_ms_imaging?: string | null,
    location_of_ms_imaging_city?: string | null,
    location_of_ms_imaging_country?: string | null,
    digital_repository?: string | null,  // collections sheet
    digital_repository__city?: string | null,  // collections sheet
    digital_repository_country?: string | null,  // collections sheet
    link_to_digital_copy_note_external?: string | null,
    institution_name?: string | null,  // collections sheet
    collection_name?: string | null, // collections sheet
    institution_city_state?: string | null,  // collections sheet
    institution_country?: string | null,  // collections sheet
  }