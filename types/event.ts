export interface Event {
    id: string;
    title: string;
    description: string;
    body: string;
    imageUrl: string;
    attendees?: string;
    date?: string;
}
