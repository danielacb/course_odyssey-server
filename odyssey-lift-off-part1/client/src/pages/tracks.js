import React from "react";
import { Layout } from "../components";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
import { gql, useQuery } from "@apollo/client";

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      length
      title
      author {
        id
        name
        photo
      }
      thumbnail
      url
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, error, loading } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
