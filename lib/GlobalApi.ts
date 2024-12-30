import { gql, GraphQLClient } from "graphql-request";

import { Diploma } from "@/types/diploma";

const endpoint = `${process.env.HYGRAPH_END_POINT}`;
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `${process.env.HYGRAPH_AUTH_TOKEN}`,
  },
});

export const getAllDiplomas = async (): Promise<Diploma[]> => {
  const query = gql`
    {
      diplomas {
        title
        duration
        eligibility
        description {
          html
        }
        courseContents {
          html
        }
        industrialTraining
        teachingScheme {
          title
          hoursPerWeek
        }
        seats
        slug
      }
    }
  `;
  const data = await client.request<{ diplomas: Diploma[] }>(query);

  return data.diplomas;
};

interface SubMenu {
  title: string;
  path: string;
  newTab: boolean;
}

export interface MenuData {
  id: number;
  title: string;
  path: string;
  newTab: boolean;
  subMenu?: SubMenu[];
}

export const getAllMenuData = async () => {
  const query = gql`
    {
      menuDatas {
        id
        title
        path
        subMenu {
          title
          path
          newTab
        }
        newTab
      }
    }
  `;
  const data = await client.request<{ menuDatas: MenuData[] }>(query);

  return data.menuDatas;
};
