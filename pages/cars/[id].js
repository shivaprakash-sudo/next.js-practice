import { useRouter } from "next/router";
import Head from "next/head";

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{`${car.colour} ${car.id}`}</title>
      </Head>
      <h1>{`This is a ${id} ${car.id} car.`}</h1>
      <picture>
        <img
          src={car.imageURL}
          alt={`${id} ${car.id} car`}
          width={700}
          height={500}
        />
      </picture>
    </>
  );
}

// server side rendering

export async function getServerSideProps({ params }) {
  const request = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await request.json();
  return {
    props: {
      car: data,
    },
  };
}

// server side generation

// export async function getStaticProps({ params }) {
//   const request = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await request.json();
//   return {
//     props: {
//       car: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const request = await fetch(`http://localhost:3000/cars.json`);
//   const data = await request.json();
//   const paths = data.map((car) => {
//     return {
//       params: {
//         id: car,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
