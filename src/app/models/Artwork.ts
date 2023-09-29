import { Thumbnail } from "./Thumbnail"

export interface Artwork {
    id?: number,
    title?: string,
    artist_display?: string,
    description?: string | null, 
    date_display?: string,
    main_reference_number?: string
    thumbnail: Thumbnail | null
}