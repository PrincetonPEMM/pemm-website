import Typography from '@mui/material/Typography';

export const StoryTranslationAndCitation = (props: any) => {
    const story = props.story;

    // Function to write english translation author, if any
    const ConstructEnglishTranslationAuthor = (english_translation_author: string, english_translation_manuscript_name: string, english_translation_manuscript_folio: string) => {
        if (english_translation_author != null) {
            return <> <Typography variant="body2"> Translated by {english_translation_author} from {english_translation_manuscript_name}, f. {english_translation_manuscript_folio}.</Typography> </>
        }
        return;
    }

    // Function to write english translation, if any
    const ConstructEnglishTranslation = (english_translation: string) => {
        if (english_translation != null) {
            return <> <Typography variant="body2"> <div dangerouslySetInnerHTML={{ __html: english_translation }} /> </Typography> </>
        }
        return;
    }

    // Function to write translation citation, if any
    const ConstructTranslationCitation = (english_translation_author: string, macomber_id: string, macomber_title: string) => {
        const last_modified_date = new Date();
        if (english_translation_author != null && macomber_id != null && macomber_title != null) {
            return <> <Typography variant="subtitle1"> <b>TO CITE THIS TRANSLATION</b> </Typography> <Typography variant="body2"> {english_translation_author}. "ID {macomber_id} {macomber_title}" Täˀammərä Maryam (Miracle of Mary) Stories, edited by Wendy Laura Belcher, Jeremy Brown, Mehari Worku, and Dawit Muluneh. Princeton: Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary project. http://pemm.princeton.edu/story-detail/{macomber_id}. Last modified: {last_modified_date.toLocaleDateString().replace(/\//ig, '.')}.</Typography> </>
        }
        return;
    }

    // Function to write other citations, if any
    const ConstructOtherTranslations = (appears_in_arabic: boolean, appears_in_french: boolean, appears_in_amharic: boolean, appears_in_latin: boolean, appears_in_italian: boolean, print_version: string) => {
        if (appears_in_arabic != false || appears_in_french != false || appears_in_amharic != false || appears_in_latin != false || appears_in_italian != false || print_version != null) {
            return <> <Typography variant="subtitle1"> <b>OTHER TRANSLATIONS & EDITIONS</b> </Typography></>
        }
        return;
    }

    // Function to write amharic citation, if any
    const ConstructAmharicCitation = (appears_in_amharic: boolean, tgs: string, tgs_folio_start: number) => {
        if (appears_in_amharic == true && tgs == "TGS (EOTC) 1968") {
            return <> <Typography variant="body2"> Amharic: Täsfa Giyorgis, ed. Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña [the Miracles of Mary in Gəˁəz and Amharic: 111 Miracles]. 2nd ed. Addis Ababa, Ethiopia, 1968, page {tgs_folio_start}</Typography> </>
        } 
        else if (appears_in_amharic == true && tgs == "TGS (EOTC) 1971") {
            return <> <Typography variant="body2"> Amharic: Täsfa Gäbrä Śəllase, ed. Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña [the Miracles of Mary in Gəˁəz and Amharic: Part One: 270 Miracles]. Addis Ababa, Ethiopia: Täsfa Gäbrä Śəllase Printing Press, 1971, page {tgs_folio_start}</Typography> </>
        }
        else if (appears_in_amharic == true && tgs == "TGS (EOTC) 1996") {
            return <> <Typography variant="body2"> Amharic: Täsfa Gäbrä Śəllase, ed. Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña [the Miracles of Mary in Gəˁəz and Amharic: Part Two: 402 Miracles]. Addis Ababa, Ethiopia: Täsfa Gäbrä Śəllase Printing Press, 1996, page {tgs_folio_start}</Typography> </>
        }
        else if (appears_in_amharic == true && tgs == "TGS (EOTC) 2014") {
            return <> <Typography variant="body2"> Amharic: Gäbrä Śəllase Bərhan, ed. Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña [the Miracles of Mary in Gəˁəz and Amharic: 366 Miracles]. Aksum, Ethiopia: Gäbrä Śəllase Bərhan Printing Press, 2014, page {tgs_folio_start}</Typography> </>
        }
        return;
    }

    // Function to write french citation, if any
    const ConstructFrenchCitation = (appears_in_french: boolean, colin_item: string) => {
        if (appears_in_french == true) {
            return <> <Typography variant="body2"> French: Colin, Gérard. Le Livre Éthiopien Des Miracles De Marie (Taamra Mâryâm). Paris: Les Editions du Cerf, 2004, item {colin_item}</Typography> </>
        }
        return;
    }

    // Function to write ge'ez print edition, if any
    const ConstructGeEzPrintEdition = (print_version: string) => {
        if (print_version != null) {
            return <> <Typography variant="body2"> Ge'ez Print Edition(s): {print_version}</Typography> </>
        }
    }

    // Function to write latin citation, if any
    const ConstructLatinCitation = (appears_in_latin: boolean) => {
    }

    // Function to write arabic citation, if any
    const ConstructArabicCitation = (appears_in_arabic: boolean) => {
    }    

    // Function to write italian citation, if any
    const ConstructItalianCitation = (appears_in_italian: boolean) => {
        if (appears_in_italian == true) {
            return <> <Typography variant="body2"> Italian: Italian Translation in Cerulli, Enrico. Il Libro Etiopico Dei Miracoli Di Maria E Le Sue Fonti Nelle Letterature Del Medio Evo Latino. Universita Di Roma, Studi Orientali Pubblicati a Cura Della Scuola Orientale. Rome: Giovanni Bardi Editore, 1943.</Typography> </>
        }
    }

    return (
        <>
            <Typography variant="subtitle1"> <b>TRANSLATION</b> </Typography>
            <h2>{ConstructEnglishTranslationAuthor(story.english_translation_author, story.english_translation_manuscript_name, story.english_translation_manuscript_folio)}</h2>
            <br></br>
            <h2>{ConstructEnglishTranslation(story.english_translation)}</h2>
            <br></br>
            {/* TODO: Story Cycle Hyperlink (Assigned to Ayo) */}
            <h2>{ConstructTranslationCitation(story.english_translation_author, story.macomber_id, story.macomber_title)}</h2><br></br>
            <h2>{ConstructOtherTranslations(story.appears_in_arabic, story.appears_in_french, story.appears_in_amharic, story.appears_in_latin, story.appears_in_italian, story.print_version)}</h2>
            <h2>{ConstructAmharicCitation(story.appears_in_amharic, story.tgs, story.tgs_folio_start)}</h2>
            <h2>{ConstructFrenchCitation(story.appears_in_french, story.colin_item)}</h2>
            <h2>{ConstructItalianCitation(story.appears_in_italian)}</h2>
            <h2>{ConstructGeEzPrintEdition(story.print_version)}</h2>
        </>
    );
};
