import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Most_popular_edition_of_Wikipedia_by_country.svg/440px-Most_popular_edition_of_Wikipedia_by_country.svg.png",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Most_popular_edition_of_Wikipedia_by_country.svg/440px-Most_popular_edition_of_Wikipedia_by_country.svg.png",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;
