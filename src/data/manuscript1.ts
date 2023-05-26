import type { Manuscripts } from '../components/types/manuscripts';

export const MANUSCRIPT_1_TEST_DATA: Manuscripts = {
    "manuscript_id": 1,
    "manuscript_name" : "AMED-DC (LOC) 6",
    "manuscript_full_name" : "Library of Congress, African and Middle Eastern Division, African Manuscripts, Manuscript No. 6",
    "language": "Gəˁəz (classical Ethiopic)",
    "date_range_start": 1508,
    "date_range_end": 1540,
    "date_note": "Date from king's name",
    "total_stories": 76,
    "total_tm_paintings": 2,
    "scans_of_manuscript_in_color": 'Yes',
    "tm_story_paintings": 'Related Images',
    "link_to_digital_copy": 'https://www.loc.gov/item/2021356021/',
    "total_folios": 203,
    "total_pages": 203,
    "total_scans": 410,
    "columns_per_page": 2,
    "line_range_per_column": '16',
    "folio_start_of_the_tm_part": '9r',
    "scan_start_of_the_tm_part": '9b',
   "mss_rebound_in_disorder_or_there_are_breaks_in_the_sequence_of_tm": 'placeholder',
   "duplicate_missing_scans_rebound_in_disorder": 'placeholder',
   "pemm_cataloger_name": "Jeremy R. Brown", 
   "print_cataloger_name": "E.A.W. Budge and W.F. Macomber", 
   "pemm_volunteer_name": "Chiara Lombardi",
   "catalog": "Dillmann, C. F. A. 1847. Catalogus codicum manuscriptorum orientalium qui in Museo Britannico asservantur, III: Codices Aethiopicos amplectens (n.p.: E Museo Britannico, 1847) , page 48ab",
   "collections_sheet_relevant" : true,
   "location_of_ms_imaging": "Library of Congress",
   "location_of_ms_imaging_city": "Washington, District of Columbia",
   "location_of_ms_imaging_country": "United States of America",
   "digital_repository": null,  // collections sheet
   "digital_repository__city": null,  // collections sheet
   "digital_repository_country": null,  // collections sheet
   "link_to_digital_copy_note_external": null,
   "institution_name": "Library of Congress",  // collections sheet
   "collection_name": "African and Middle Eastern Division, African Manuscripts", // collections sheet
   "institution_city_state": "Washington, DC",  // collections sheet
   "institution_country": "USA",  // collections sheet
   "hamburg_ms_id": null, 
   "Macomber_Catalog_Collection_Abbreviation": null, // collections sheet --> HAVE TO CHANGE '/' to '_' IN SHEET
   "Collection_shelfmark": "Library of Congress African Collection", // collections sheet
   "source": "See one at https://www.loc.gov/item/2021356021/", // collections sheet
  "story_instances": [{ "location_in_ms": "s. 21-22, col. 1", "story_instance_id": null, "incipit": null, "canonical_story_id": "148", "recension_id": null, "confidence_score": "High", "miracle_number": 33, "no_of_paintings_per_story_instance": 0, "macomber_title": "The pregnant woman who was caught by the tide while going to the church of Saint Michael (Mont Saint Michel) and gave birth" }, { "location_in_ms": "s. 23-23, col. 1", "story_instance_id": null, "incipit": null, "canonical_story_id": "140", "recension_id": "EMML (HMML) 3872", "confidence_score": "High", "miracle_number": 28, "no_of_paintings_per_story_instance": 1, "macomber_title": "The sinful deacon whom his enemies could not kill until he had confessed himself to a priest." }, { "location_in_ms": "s. 24-33, col. 1", "story_instance_id": null, "incipit": null, "canonical_story_id": "142", "recension_id": "EMML (HMML) 3872", "confidence_score": "High", "miracle_number": 29, "no_of_paintings_per_story_instance": 1, "macomber_title": "The deacon's prayer that contained five times \"Rejoice!\" [tafassehiyat]." }, { "location_in_ms": "s. 34-36, col. 1", "story_instance_id": null, "incipit": null, "canonical_story_id": "7", "recension_id": "EMML (HMML) 2378", "confidence_score": "High", "miracle_number": 30, "no_of_paintings_per_story_instance": 1, "macomber_title": "Dabra Qaləmon miracles: The monk of Dabra Qaləmon who humbly pretends not to fast and is saved from his brothers by Mary." }, { "location_in_ms": "s. 38-40, col. 1", "story_instance_id": null, "incipit": null, "canonical_story_id": "125", "recension_id": null, "confidence_score": "High", "miracle_number": 31, "no_of_paintings_per_story_instance": 2, "macomber_title": "The noble man from Qemer who ate 78 people, gave a drop of water to a beggar, and went to heaven" }, { "location_in_ms": "s. 43-45, col. 1", "story_instance_id": null, "incipit": null, "canonical_story_id": "152", "recension_id": null, "confidence_score": "High", "miracle_number": 32, "no_of_paintings_per_story_instance": 1, "macomber_title": "The widow who prayed to Saint Mary and saved her only son from death by hanging." }]
};
