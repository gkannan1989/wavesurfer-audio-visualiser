import { gql, useQuery } from "@apollo/client";

const GET_AUDIO_DATA = gql`
  query($id: ID!) {
    audio(id: $id) {
      id
      title
      file
      annotations {
        startTime
        endTime
      }
    }
  }
`;

export const fetchAudioData = (id: string) => {
  return useQuery(GET_AUDIO_DATA, { variables: { id } });
};
