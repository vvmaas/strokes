import { Artwork } from "./Artwork";
import { ArtworkConfig } from "./ArtworkConfig";

export interface ArtworkList {
    config: ArtworkConfig | null,
    data?: Artwork[],
    info?: any, 
    pagination?: any, 
    preference?: any, 
}