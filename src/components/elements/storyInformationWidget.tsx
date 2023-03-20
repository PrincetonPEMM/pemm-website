import Typography from '@mui/material/Typography';
import { Instances } from '../types/instances';

export const StoryInformationWidget = (props: any) => {
    const INSTANCES: Instances[] = props.instances;
    const story = props.story;

    // Function to write story type, if any
    const ConstructStoryType = (type_of_story: string) => {
        if (type_of_story != null) {
            return <> <Typography variant="body2"> <b>Story Type:</b> {type_of_story}</Typography> </>
        }
        return;
    }

    // Function to write collection, if any 
    const ConstructCollection = (collection: string) => {
        if (collection != null) {
            return <> <Typography variant="body2"> <b>Collection:</b> {collection}</Typography> </>
        }
        return;
    }

    // Function to write subjects, if any
    const ConstructSubjects = (story_subjects: string) => {
        if (story_subjects != null) {
            return <> <Typography variant="body2"> <b>Subjects:</b> {story_subjects}</Typography> </>
        }
        return;
    }

    // Function to write keywords, if any
    const ConstructKeywords = (keywords: string) => {
        if (keywords != null) {
            return <> <Typography variant="body2"> <b>Keywords:</b> {keywords}</Typography> </>
        }
        return;
    }

    // Function to write cycle name, if any
    const ConstructCycleName = (cycle_name: string) => {
        if (cycle_name != null) {
            return <> <Typography variant="body2"> <b>Cycle Name:</b> {cycle_name}</Typography> </>
        }
        return;
    }

    // Function to find date range end, if any
    function FindDateRangeEnd(instances: Instances[]) {
        var maxValue = Number.MIN_VALUE;
        if (instances) {
            var minStartDate = FindDateRangeStart(instances);
            for (var i = 0; i < instances.length; i++) {
                let date_range_start = instances[i].manuscript_date_range_start;
                let date_range_end = instances[i].manuscript_date_range_end;
                if (date_range_start && date_range_start === minStartDate) {
                    if (date_range_end) {
                        if (date_range_end > maxValue) {
                            maxValue = date_range_end;
                        }
                    }
                }
            }
        }
        return maxValue;
    }

    // Function to find date range start, if any
    function FindDateRangeStart(instances: Instances[]) {
        var minValue = Number.MAX_VALUE;
        if (instances) {
            for (var i = 0; i < instances.length; i++) {
                let date_range_start = instances[i].manuscript_date_range_start;
                if (date_range_start) {
                    if (date_range_start < minValue) {
                        minValue = date_range_start;
                    }
                }
            }
        }
        return minValue;
    }

    // Function to write the minimum (earliest year) manuscript date range start
    const ConstructDateRangeStart = (instances: Instances[]) => {
        var minValue = FindDateRangeStart(instances);
        return <> {minValue} </>;
    }

    // Function to write the maximum (latest year) manuscript date range end
    const ConstructDateRangeEnd = (instances: Instances[]) => {
        var maxValue = FindDateRangeEnd(instances);
        return <> {maxValue} </>;
    }

    // Function to write the earliest attested instance of the story with the manuscript date range start and end
    const ConstructEarliestAttestedInstanceOfTheStory = (instances: Instances[]) => {
        return <> <Typography variant="body2"> <b>Earliest Attested Instance of the Story:</b> {ConstructDateRangeStart(instances)}-{ConstructDateRangeEnd(instances)} </Typography> </>
    }

    // Function to write earliest manuscripts in which story appears, if any
    const ConstructEarliestManuscriptsInWhichStoryAppears = (names_of_mss_with_earliest_attestation: string) => {
        if (names_of_mss_with_earliest_attestation != null) {
            return <> <Typography variant="body2"> <b>Earliest Manuscripts in which Story Appears:</b> {names_of_mss_with_earliest_attestation}</Typography> </>
        }
        return;
    }

    // Function to write total records, if any
    const ConstructTotalRecords = (total_records: number) => {
        if (total_records != null) {
            return <> <Typography variant="body2"> <b>Total Manuscripts in which Story Appears:</b> {total_records} </Typography> </>
        }
        return;
    }

    // Function to write number of inipits in pemm incipit tool, if any
    const ConstructNumberOfIncipits = (number_of_incipits: number) => {
        if (number_of_incipits != null) {
            return <> <Typography variant="body2"> <b>Total Incipits in the ITool:</b> {number_of_incipits}</Typography> </>
        }
        return;
    }

    // Function to write incipits, manuscript and folio, if any
    const ConstructIncipit = (canonical_incipit: string, english_translation_manuscript_name: string, english_translation_manuscript_folio: string) => {
        if (canonical_incipit != null && english_translation_manuscript_name != null && english_translation_manuscript_folio != null) {
            return <> <Typography variant="body2"> <b>Incipit(s):</b> {canonical_incipit} ... From {english_translation_manuscript_name}, f. {english_translation_manuscript_folio}</Typography> </>
        } else if (canonical_incipit != null) {
            return <> <Typography variant="body2"> <b>Incipit(s):</b> {canonical_incipit} ... </Typography> </>
        }
        return;
    }

    // Function to write PEMM ID, if any
    const ConstructPEMMID = (pemm_id: number) => {
        if (pemm_id != null) {
            return <> PEMM ID {pemm_id}; </>
        }
    }

    // Function to write Macomber ID, if any
    const ConstructMacomberID = (macomber_id: string) => {
        if (macomber_id != null) {
            return <> Macomber ID {macomber_id}; </>
        }
        return;
    }

    // Function to write Hamburg ID, if any
    const ConstructHamburgID = (hamburg_id: string) => {
        if (hamburg_id != null) {
            return <> Beta maṣāḥǝft ID {hamburg_id}; </>
        }
        return;
    }

    // Function to write Clavis ID, if any
    const ConstructClavisId = (clavis_id: string) => {
        if (clavis_id != null) {
            return <> Clavis ID {clavis_id}; </>
        }
        return;
    }

    // Function to write Cantigas ID, if any
    const ConstructCantigasID = (csm_number: number) => {
        if (csm_number != null) {
            return <> Cantigas ID {csm_number}; </>
        }
        return;
    }

    // Function to write Poncelet ID, if any
    const ConstructPonceletID = (poncelet_number: number) => {
        if (poncelet_number != null) {
            return <> Poncelet ID {poncelet_number}; </>
        }
        return;
    }

    // Function to write id numbers (hamburg id, clavis id, csm number, poncelet number, macomber id), if any
    const ConstructIDNumbers = (pemm_id: number, hamburg_id: string, clavis_id: string, csm_number: number, poncelet_number: number, macomber_id: string) => {
        if (pemm_id != null || hamburg_id != null || clavis_id != null || macomber_id != null || csm_number != null || poncelet_number != null) {
            return <> <Typography variant="body2"> <b>ID Numbers:</b> {ConstructPEMMID(pemm_id)} {ConstructMacomberID(macomber_id)} {ConstructHamburgID(hamburg_id)} {ConstructClavisId(clavis_id)} {ConstructCantigasID(csm_number)} {ConstructPonceletID(poncelet_number)}</Typography> </>
        }
        return;
    }

    // Function to write translation source, if any
    const ConstructTranslationSource = (translation_source: string) => {
        if (translation_source != null) {
            return <> <Typography variant="body2"> <b>Translation Source:</b> {translation_source}</Typography> </>
        }
        return;
    }

    // Function to write manuscript source for english translation, if any
    const ConstructManuscriptSource = (manuscript_source: string) => {
        if (manuscript_source != null) {
            return <> <Typography variant="body2"> <b>Manuscript Source for English Translation:</b> {manuscript_source}</Typography> </>
        }
        return;
    }

    return (
        <>
            <Typography variant="subtitle1"> <b>CONTENT INFORMATION</b> </Typography>
            <h2>{ConstructStoryType(story.type_of_story)}</h2>
            <h2>{ConstructCollection(story.collection)}</h2>
            <h2>{ConstructSubjects(story.canonical_story_subject)}</h2>
            <h2>{ConstructKeywords(story.macomber_keywords)}</h2>
            <br></br>
            <Typography variant="subtitle1"> <b>TECHNICAL INFORMATION</b> </Typography>
            <h2>{ConstructEarliestAttestedInstanceOfTheStory(INSTANCES)}</h2>
            <h2>{ConstructEarliestManuscriptsInWhichStoryAppears(story.names_of_mss_with_earliest_attestation)}</h2>
            <h2>{ConstructTotalRecords(story.total_records)}</h2>
            <h2>{ConstructNumberOfIncipits(story.total_incipits_in_the_itool)}</h2>
            <h2>{ConstructIncipit(story.canonical_incipit, story.english_translation_manuscript_name, story.english_translation_manuscript_folio)}</h2>
            <h2>{ConstructIDNumbers(story.pemm_id, story.hamburg_id, story.clavis_id, story.csm_number, story.poncelet_number, story.macomber_id)}</h2>
        </>
    );
};
