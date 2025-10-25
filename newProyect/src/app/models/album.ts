//ejemplo de resepcion de datos de la API de spoty o cualquier API

export interface Album {
    id?: number;
    name_music: string;
    img_url: string;
    name_autor: string;
}

export interface AlbumResponse {
    id: number;
    name: string;
    images_url: string;
    name_autor: string;
}
