import Typography from '@mui/material/Typography';

export const StoryInformationWidget = (props: any) => {
    const story = props.story;
    return (
        <>
            <h1>INFORMATION</h1>
            <Typography variant="body2"> <b>Story type:</b> {story.type_of_story}</Typography>
            <Typography variant="body2"> <b>Subjects:</b> {story.canonical_story_subjects}</Typography>
            <Typography variant="body2"> <b>Keywords:</b> {story.macomber_keywords}</Typography>
            <Typography variant="body2"> <b>Incipit:</b> {story.canonical_incipit}</Typography>
            <Typography variant="body2"> <b>Number of Incipits in PEMM Incipit Tool:</b> {story.total_incipts_in_the_itool}</Typography>
            <Typography variant="body2"> <b>Translation Source:</b> {story.english_translation_source}</Typography>
            <Typography variant="body2"> <b>Manuscript source for English translation:</b> {story.english_translation_manuscript_name}</Typography>
            <Typography variant="body2"> <b>ID Numbers:</b> PEMM ID {story.pemm_id}; Hamburg ID {story.hamburg_id}; Macomber ID {story.macomber_id}; CSM Number {story.csm_number}; Poncelet Number {story.poncelet_number} </Typography>
            <Typography variant="body2"> <b>GMP Manuscripts in which story appears (with page or folio start):</b> {story.names_of_mms_with_earliest_attestation}</Typography>
        </>
    );
};
