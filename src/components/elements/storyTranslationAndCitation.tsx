import Typography from '@mui/material/Typography';

export const StoryTranslationAndCitation = (props: any) => {
    const story = props.story;

    // Function to write english translation author, if any
    const ConstructEnglishTranslationAuthor = (translation_author: string, translation_source_manuscript_name: string, translation_source_manuscript_folio: string, translations: any) => {

        let translation_date = null
        if (translations != null) {
            for (let tran of translations) {
                if (!tran.language_translated_to) continue;
                if (tran.language_translated_to.toLowerCase() == "english") {
                    translation_date = <>, in {tran.translation_as_of_date}</>
                    break
                }
            }
        }

        if (translation_author != null) {
            return <> <Typography variant="body2"> Translated by {translation_author} from {translation_source_manuscript_name}, f. {translation_source_manuscript_folio}{translation_date}.</Typography> </>
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
    const ConstructTranslationCitation = (translation_author: string, macomber_id: string, macomber_title: string, translations: any) => {

        // Get modified date, where the language translated to is English
        let translation_date = null
        if (translations != null) {
            for (let tran of translations) {
                if (!tran.language_translated_to) continue;
                if (tran.language_translated_to.toLowerCase() == "english") {
                    translation_date = <>{tran.translation_as_of_date}</>
                    break
                }
            }
        }

        if (translation_author != null && macomber_id != null && macomber_title != null && translation_date != null) {
            return <> <Typography variant="subtitle1" fontWeight="bold"> TO CITE THIS TRANSLATION </Typography>
                <Typography variant="body2"> {translation_author}. &quot;ID {macomber_id}: {macomber_title}.&quot; <i>Täˀammərä Maryam (Miracle of Mary) Stories</i>, edited by Wendy Laura Belcher, Jeremy Brown, Mehari Worku, and Dawit Muluneh. Princeton: Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary project. http://pemm.princeton.edu/story-detail/{macomber_id}. Last modified: {translation_date}.</Typography> </>
        }
        return;
    }

    // Function to write translation citation using translation sheet data, if any
    const NewConstructTranslationCitations = (translations: any) => {
        let citations = []
        let translation_status_options: string[] = ["Published translation", "Complete Translation", "Complete Unpublished Translation"]

        if (translations != null) {
            for (let tran of translations) {
                if (!tran.canonical_translation_recension) {
                    if (translation_status_options.includes(tran.translation_status)) {
                        let p1 = <><b>{tran.language_translated_to}: </b></>
                        let p2 = <>{tran.translation_author}. {tran.translation_as_of_date}. {tran.published_translation_book_title}</>

                        let p3 = null
                        if (tran.published_translation_book_page_span) {
                            p3 = <>, pages {tran.published_translation_book_page_span}. </>
                        }
                        else if (tran.published_translation_book_item) {
                            p3 = <>, item {tran.published_translation_book_item}. </>
                        }

                        let p4 = null
                        if (tran.translation_source_manuscript_name && tran.translation_source_manuscript_folio) {
                            p4 = <>From {tran.translation_source_manuscript_name}, {tran.translation_source_manuscript_folio}</>
                        }

                        citations.push(<h2>{p1}{p2}{p3}{p4}</h2>)
                    }
                }
            }
        }

        return citations
    }

    // Function to write other citations, if any
    const ConstructOtherTranslations = (appears_in_arabic: boolean, appears_in_french: boolean, appears_in_amharic: boolean, appears_in_latin: boolean, appears_in_italian: boolean, print_version: string) => {
        if (appears_in_arabic != false || appears_in_french != false || appears_in_amharic != false || appears_in_latin != false || appears_in_italian != false || print_version != null) {
            return <> <Typography variant="subtitle1" fontWeight="bold"> OTHER TRANSLATIONS & EDITIONS OF THIS STORY</Typography></>
        }
        return;
    }

    // Function to write amharic citation, if any
    const ConstructAmharicCitation = (appears_in_amharic: boolean, tgs: string, tgs_folio_start: number) => {
        if (appears_in_amharic == true && tgs == "TGS (EOTC) 1968") {
            return <> <Typography variant="body2"> <div className='font-bold inline'>Amharic:</div> Täsfa Giyorgis, ed. <i>Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña</i> [the Miracles of Mary in Gəˁəz and Amharic: 111 Miracles]. 2nd ed. Addis Ababa, Ethiopia, 1968, page {tgs_folio_start}.</Typography> </>
        }
        else if (appears_in_amharic == true && tgs == "TGS (EOTC) 1971") {
            return <> <Typography variant="body2"> <div className='font-bold inline'>Amharic:</div> Täsfa Gäbrä Śəllase, ed. <i>Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña</i> [the Miracles of Mary in Gəˁəz and Amharic: Part One: 270 Miracles]. Addis Ababa, Ethiopia: Täsfa Gäbrä Śəllase Printing Press, 1971, page {tgs_folio_start}.</Typography> </>
        }
        else if (appears_in_amharic == true && tgs == "TGS (EOTC) 1996") {
            return <> <Typography variant="body2"> <div className='font-bold inline'>Amharic:</div> Täsfa Gäbrä Śəllase, ed. <i>Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña</i> [the Miracles of Mary in Gəˁəz and Amharic: Part Two: 402 Miracles]. Addis Ababa, Ethiopia: Täsfa Gäbrä Śəllase Printing Press, 1996, page {tgs_folio_start}.</Typography> </>
        }
        else if (appears_in_amharic == true && tgs == "TGS (EOTC) 2014") {
            return <> <Typography variant="body2"> <div className='font-bold inline'>Amharic:</div> Gäbrä Śəllase Bərhan, ed. <i>Täˀammərä Maryam Bä-Gəˁəz Ənna Bä-Amarəñña</i> [the Miracles of Mary in Gəˁəz and Amharic: 366 Miracles]. Aksum, Ethiopia: Gäbrä Śəllase Bərhan Printing Press, 2014, page {tgs_folio_start}.</Typography> </>
        }
        return;
    }

    // Function to write french citation, if any
    const ConstructFrenchCitation = (appears_in_french: boolean, colin_item: string) => {
        if (appears_in_french == true) {
            return <> <Typography variant="body2"> <div className='font-bold inline'>French:</div> Colin, Gérard. <i>Le Livre Éthiopien Des Miracles De Marie (Taamra Mâryâm).</i> Paris: Les Editions du Cerf, 2004, item {colin_item}.</Typography> </>
        }
        return;
    }

    // Function to write ge'ez print edition, if any
    const ConstructGeEzPrintEdition = (print_version: string) => {
        if (print_version != null) {
            return <> <Typography variant="body2"> <div className='font-bold inline'>Gə&#705;əz</div> Print Edition(s): {print_version}</Typography> </>
        }
        return;
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
            return <> <Typography variant="body2"> <div className='font-bold inline'>Italian:</div> Cerulli, Enrico. <i>Il Libro Etiopico Dei Miracoli Di Maria E Le Sue Fonti Nelle Letterature Del Medio Evo Latino. Universita Di Roma, Studi Orientali Pubblicati a Cura Della Scuola Orientale.</i> Rome: Giovanni Bardi Editore, 1943.</Typography> </>
        }
        return;
    }

    return (
        <>
            <Typography variant="subtitle1" fontWeight="bold"> TRANSLATION </Typography>
            {ConstructEnglishTranslationAuthor(story.translation_author, story.translation_source_manuscript_name, story.translation_source_manuscript_folio, story.translations)}
            {ConstructEnglishTranslation(story.english_translation)}
            <div className='mt-5'>
                {ConstructTranslationCitation(story.translation_author, story.macomber_id, story.macomber_title, story.translations)}
            </div>
            {<div className='mt-5'>
                {ConstructOtherTranslations(story.appears_in_arabic, story.appears_in_french, story.appears_in_amharic, story.appears_in_latin, story.appears_in_italian, story.print_version)}
            </div>}
            {NewConstructTranslationCitations(story.translations)}
        </>
    );
};
