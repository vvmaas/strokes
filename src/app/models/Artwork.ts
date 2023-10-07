import { Thumbnail } from "./Thumbnail"

export interface Artwork {
    id: number,
    title?: string,
    artist_title?: string,
    description?: string | null, 
    date_display?: string,
    main_reference_number?: string,
    image_id?: number,
    thumbnail?: Thumbnail | null
}