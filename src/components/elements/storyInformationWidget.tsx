import Typography from '@mui/material/Typography';

export const StoryInformationWidget = (props: any) => {
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
    }

    // Function to write earliest attested instance of the story, if any
    const ConstructEarliestAttestedInstance = (manuscript_date_range_start: number, manuscript_date_range_end: number) => {
        if (manuscript_date_range_start != null && manuscript_date_range_end != null) {
            return <> <Typography variant="body2"> <b>Earliest Attested Instance of Story:</b> {manuscript_date_range_start}-{manuscript_date_range_end}  </Typography> </>
        }
        return;
    }

    // Function to write earliest manuscripts in which story appears, if any
    const ConstructEarliestManuscriptsInWhichStoryAppears = (gmp_manuscripts: string) => {
        if (gmp_manuscripts != null) {
            return <> <Typography variant="body2"> <b>Earliest Manuscripts in which Story Appears:</b> {gmp_manuscripts}</Typography> </>
        }
        return;
    }

    // Function to write total records, if any
    const ConstructTotalRecords = (total_records: number) => {
        if (total_records != null) {
            return <> <Typography variant="body2"> <b>Total Manuscripts in which Story Appears:</b> {total_records} </Typography> </>
        }
    }

    // Function to write number of inipits in pemm incipit tool, if any
    const ConstructNumberOfIncipits = (number_of_incipits: number) => {
        if (number_of_incipits != null) {
            return <> <Typography variant="body2"> <b>Total Incipits in the ITool:</b> {number_of_incipits}</Typography> </>
        }
        return;
    }

    // Function to write incipits, if any
    const ConstructIncipit = (canonical_incipit: boolean, incipit: string, recension_id: string, manuscript: string, folio_start: string, folio_end: string) => {
        if (canonical_incipit == true && incipit != null && recension_id != null) {
            return <> <Typography variant="body2"> <b>Incipit(s):</b> {incipit} ... From {manuscript}, f. {folio_start}-{folio_end}</Typography>
                      <Typography variant="body2"> <b>Recension ID:</b> {recension_id}</Typography> </>
        } else if (canonical_incipit == true && incipit != null) {
            return <> <Typography variant="body2"> <b>Incipit(s):</b> {incipit} ... From {manuscript}, f. {folio_start}-{folio_end}</Typography> </>
        }
        return;
    }

    // Function to write id numbers (hamburg id, clavis id, csm number, poncelet number, macomber id), if any
    const ConstructIDNumbers = (hamburg_id: string, clavis_id: string, csm_number: number, poncelet_number: number, macomber_id: string) => {
        if (hamburg_id != null || clavis_id != null || macomber_id != null || csm_number != null || poncelet_number != null) {
            return <> <Typography variant="body2"> <b>ID Numbers:</b> Macomber ID {macomber_id}; Beta maṣāḥǝft ID {hamburg_id}, Clavis ID {clavis_id}; Cantigas ID {csm_number}; Poncelet ID {poncelet_number}</Typography> </>
        }
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
            <h2>{ConstructSubjects(story.canonical_story_subjects)}</h2>
            <h2>{ConstructKeywords(story.macomber_keywords)}</h2>
            <br></br>
            <Typography variant="subtitle1"> <b>TECHNICAL INFORMATION</b> </Typography>
            <h2>{ConstructEarliestAttestedInstance(story.manuscript_date_range_start, story.manuscript_date_range_end)}</h2>
            <h2>{ConstructEarliestManuscriptsInWhichStoryAppears(story.names_of_mms_with_earliest_attestation)}</h2>
            <h2>{ConstructTotalRecords(story.total_records)}</h2>
            <h2>{ConstructNumberOfIncipits(story.total_incipits_in_the_itool)}</h2>
            <h2>{ConstructIncipit(story.story_instance_canonical_incipit, story.canonical_incipit, story.recension_id, story.manuscript, story.folio_start, story.folio_end)}</h2>
            <h2>{ConstructIDNumbers(story.hamburg_id, story.clavis_id, story.csm_number, story.poncelet_number, story.macomber_id)}</h2>
        </>
    );
};
