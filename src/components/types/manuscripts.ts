import { Instances } from "./instances";

export type Manuscripts = {
    manuscript_id?: number | null;
    manuscript_name?: string | null;
    manuscript_full_name?: string | null;
    century?: string | null;
    total_stories?: number | null;
    provenance?: string | null;
    total_paintings?: string | null;
    link_to_digital_copy?: string | null;
    story_instances?: Instances[] | null;
};
