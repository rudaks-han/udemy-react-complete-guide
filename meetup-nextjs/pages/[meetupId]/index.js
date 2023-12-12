import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Most_popular_edition_of_Wikipedia_by_country.svg/440px-Most_popular_edition_of_Wikipedia_by_country.svg.png"
      alt="A First Meetup"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Most_popular_edition_of_Wikipedia_by_country.svg/440px-Most_popular_edition_of_Wikipedia_by_country.svg.png",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
