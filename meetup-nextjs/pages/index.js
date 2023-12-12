import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Most_popular_edition_of_Wikipedia_by_country.svg/440px-Most_popular_edition_of_Wikipedia_by_country.svg.png',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Most_popular_edition_of_Wikipedia_by_country.svg/440px-Most_popular_edition_of_Wikipedia_by_country.svg.png',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    }
]
function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;
