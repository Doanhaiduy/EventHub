export interface EventModel {
    title: string;
    description: string;
    location: Location;
    users: string[];
    imageUrl?: string;
    authorId: string;
    startAt: number;
    endAt: number;
    date: number;
}

export interface Location {
    title: string;
    address: string;
}
